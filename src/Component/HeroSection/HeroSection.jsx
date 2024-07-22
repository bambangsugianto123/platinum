import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authLogout } from '../../Feature/Auth/auth-slice';
import './HeroSection.css';



function HeroSection({isButtonShow}) {
    const [sidebar, setSidebar] = useState('collapse');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isLoggedIn} = useSelector(state => {return state.auth});

    const handleLogout = () => {
        dispatch(authLogout());
        alert('anda berhasil logout');
        navigate(0);
    }

    return (
        <section id="hero" style={{minHeight: '100px'}}>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container mt-3">
                    <a className="navbar-brand text-light px-3 ml-3" href="/">BinarRent</a>
                    <button onClick={() => setSidebar('show')} className="navbar-toggler" type="button" aria-label='open sidebar'>
                        <span className="navbar-toggler-icons"></span>
                    </button>
                    <div className={`sidebar-background ${sidebar}`} onClick={() => setSidebar('')}></div>
                    <div className={`navbar-collapse ${sidebar}`} id='navbarNav'>
                        <button onClick={() => setSidebar('')} className= {`close-navbar ${sidebar} justify-content-center align-items-center`} type='button' aria-label='close sidebar'>✕</button>
                        <ul className="navbar-nav ml-auto mr-5">
                            <li className="nav-item mr-3">
                                <a className="nav-link" href="/#ourServices">Our Services</a>
                            </li>
                            <li className="nav-item mr-3">
                                <a className="nav-link" href="/#whyUs">Why Us</a>
                            </li>
                            <li className="nav-item mr-3">
                                <a className="nav-link" href="/#testimonial">Testimonial</a>
                            </li>
                            <li className="nav-item mr-3">
                                <a className="nav-link" href="/#faq">FAQ</a>
                            </li>
                            <li className="nav-item mr-3">
                                {isLoggedIn? 
                                     <button className="nav-link btn bg-success text-light d-flex justify-content-center px-3" onClick={handleLogout}>Logout</button> :
                                     <button className="nav-link btn bg-success text-light d-flex justify-content-center px-3" onClick={() => navigate('/signup')}>Register</button>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                        <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                        <p className="mt-4 mr-4">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                        <a href="/car" className="text-reset text-decoration-none">
                            {
                                isButtonShow && (
                                <button className="btn btn-success">Mulai Sewa Mobil</button>)
                            }
                            
                        </a> 
                    </div>
                    <div className="col-lg-6">
                        <div className="car-background"></div>
                        <img className="car-img" src="/Assets/car.png" alt="car"/>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default HeroSection;