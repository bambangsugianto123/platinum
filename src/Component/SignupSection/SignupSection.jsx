import { useEffect } from "react";

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useSignUpMutation } from "../../services/redux/apiSlices/authApi";
import { setUserInfo } from "../../services/redux/reducerSlices/authSlice";
import { toast } from "react-toastify";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";

function LoginSection() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
  // console.log(userInfo);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const [signUp] = useSignUpMutation();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({ mode: "onChange" });

  const signUpSubmit = async (data) => {
    // console.log(data);
    try {
      const res = await signUp(data).unwrap();
      // console.log(res);
      dispatch(setUserInfo(res));
      toast.success("Login Success");
      navigate("/");
    } catch (error) {
      // console.log(error);
      toast.error(error?.data?.message || error?.error);
    }
  };

  return (
    <>
      <section id="loginSection" className="mb-0">
        <Container fluid>
          <Row>
            <Col xl={6} className="p-3 p-xl-5">
              <Row className="p-3 p-xl-5">
                <Col>
                  <Row>
                    <Image
                      style={{ maxWidth: "100px" }}
                      src="/Assets/images/Rectangle 62.png"
                      alt="retanggle"
                    />
                  </Row>
                  <Row>
                    <h1>Sign Up</h1>
                  </Row>
                  <Row>
                    <Form onSubmit={handleSubmit(signUpSubmit)}>
                      <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="Name"
                          placeholder="Masukkan Name"
                          {...register("name", {
                            required: "Name harus diisi",
                          })}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Masukkan Email"
                          {...register("email", {
                            required: "Email harus diisi",
                          })}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Masukkan password"
                          {...register("password", {
                            required: "Password harus diisi",
                          })}
                        />
                      </Form.Group>
                      <Button
                        disabled={!isValid}
                        variant="primary"
                        type="submit"
                        className="w-100"
                      >
                        Sign In
                      </Button>
                    </Form>
                  </Row>
                  <Row>
                    <p>
                      Already have an account?{" "}
                      <span>
                        <Link to={"/login"}>Log in</Link>
                      </span>
                    </p>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col xl={6} className="d-none d-xl-block">
              <Image src="/Assets/images/pict.png" alt="landing-page" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default LoginSection;
