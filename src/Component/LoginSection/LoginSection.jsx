import React, { useEffect } from "react";
import "./LoginSection.css";
import * as Yup from 'yup';
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "../../Feature/Auth/auth-slice";


function LoginSection() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { isLoggedIn } = useSelector(state => {return state.auth});
    const { message }  = useSelector(state => {return state.message});

    const handleSubmit = async(values, actions) => {
        try {
            const login = await dispatch(authLogin(values));
            actions.setSubmitting(false);
            actions.resetForm();
        } catch (error) {
            console.log(error);
            actions.setSubmitting(false);
            actions.resetForm();
        }
    }

    const loginSchema = Yup.object().shape({
        email: Yup.string()
        .email("Invalid email format")
        .required("Email is Required"),
        password: Yup.string()
        .required("Password is Required")
    })

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginSchema,
        onSubmit: (values, actions) => {
            handleSubmit(values, actions)
        },
    })
    
    useEffect(() => {
        isLoggedIn && navigate('/');
    })

    return (
        <section id="loginSection" className="mb-0">
            {isLoggedIn === false && (
            <div className="container-fluid">
                <div className="row min-vh-100">
                    <div className="leftside col-lg-6 d-flex flex-column justify-content-sm-center align-items-center">
                    <form className="mx-3" onSubmit={formik.handleSubmit}>
                    <a href="/" className="text-decoration-none"><div className="rectangle d-flex justify-content-center align-items-center font-weight-bold text-dark">BCR</div></a>
                        <h1 className="w-100 my-4">Welcome Back!</h1>
                        <div className="form-group">
                            <label htmlFor="email">Email*</label>
                            <input 
                                aria-describedby="emailHelp" 
                                placeholder="Masukkan Email"
                                className="form-control" 
                                id="email"
                                name="email"
                                type="email" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                style={formik.errors.email && formik.touched.email && {border: 'red 1px solid'}}
                            />
                            {formik.touched.email && formik.errors.email ? <div className="text-danger mt-1">{formik.errors.email}</div> : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password*</label>
                            <input 
                                className="form-control" 
                                placeholder="Masukkan Password"
                                id="password"
                                name="password"
                                type="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password} 
                                style={formik.errors.password && formik.touched.password && {border: 'red 1px solid'}}
                            />
                            {formik.touched.password && formik.errors.password ? <div className="text-danger mt-1">{formik.errors.password}</div> : null}
                        </div>
                        {message != 'berhasil login' && message != 'akun berhasil dibuat' && message != null ? <div className="alert alert-danger" role="alert">{message}</div> : message === 'akun berhasil dibuat' ? <div className="alert alert-success" role="alert">Akun berhasil dibuat, silahkan login</div> : null}
                        <button type="submit" className="btn mt-3">Sign In</button>
                        <p className="mt-4 d-flex justify-content-center">Don’t have an account?<a href="/signup">Sign Up for Free</a></p>
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
    )
}

export default LoginSection;