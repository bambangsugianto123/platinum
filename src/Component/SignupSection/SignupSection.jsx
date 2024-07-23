import "./SignupSection.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authRegister } from "../../Feature/Auth/auth-slice";

function SignupSection() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => {
    return state.auth;
  });
  const { message } = useSelector((state) => {
    return state.message;
  });

  const handleSubmit = async (values, actions) => {
    try {
      dispatch(authRegister(values));
      actions.setSubmitting(false);
      actions.resetForm();
    } catch (error) {
      actions.setSubmitting(false);
      console.log(error);
      actions.resetForm();
    }
  };

  const signupSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be 3 characters at minimum")
      .max(15, "Name must be 15 characters at maximum"),
    email: Yup.string()
      .email("Invalid email adress format")
      .required("Password is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be 6 characters at minimum"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: signupSchema,
    onSubmit: (values, actions) => {
      handleSubmit(values, actions);
    },
  });

  useEffect(() => {
    isLoggedIn && navigate("/");
  });

  return (
    <section id="signupSection" className="mb-0">
      {isLoggedIn === false && (
        <div className="container-fluid">
          <div className="row min-vh-100">
            <div className="leftside col-lg-6 d-flex flex-column justify-content-sm-center align-items-center">
              <form className="mx-3" onSubmit={formik.handleSubmit}>
                <a href="/" className="text-decoration-none">
                  <div className="rectangle d-flex justify-content-center align-items-center font-weight-bold text-dark">
                    BCR
                  </div>
                </a>
                <h1 className="w-100 my-4">Sign Up</h1>
                <div className="form-group">
                  <label htmlFor="name">Name*</label>
                  <input
                    className="form-control"
                    aria-describedby="name"
                    placeholder="Full Name"
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    style={
                      formik.errors.name &&
                      formik.touched.name && { border: "red 1px solid" }
                    }
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="text-danger mt-1">{formik.errors.name}</div>
                  ) : null}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email*</label>
                  <input
                    className="form-control"
                    placeholder="Contoh: johndoe@gmail.com"
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    style={
                      formik.errors.email &&
                      formik.touched.email && { border: "red 1px solid" }
                    }
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-danger mt-1">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>
                <div className="form-group">
                  <label htmlFor="password">Create Password*</label>
                  <input
                    placeholder="6+ Karakter"
                    className="form-control"
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    style={
                      formik.errors.password &&
                      formik.touched.password && { border: "red 1px solid" }
                    }
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="text-danger mt-1">
                      {formik.errors.password}
                    </div>
                  ) : null}
                </div>
                {message != null && message != "akun berhasil dibuat" ? (
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                ) : message === "akun berhasil dibuat" ? (
                  navigate("/login")
                ) : null}
                <button type="submit" className="btn mt-3">
                  Sign Up
                </button>
                <p className="mt-4 d-flex justify-content-center">
                  Already have an account?<a href="/login">Sign In here</a>
                </p>
              </form>
            </div>
            <div className="rightside col-lg-6 d-none d-lg-flex">
              <h1>Binar Car Rental</h1>
              <div className="image border">
                <img src="/Assets/landing-page.png" alt="landing-page" />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default SignupSection;
