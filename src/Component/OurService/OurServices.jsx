import React from "react";
import './OurServices.css';


function OurServices() {
    return (
        <section id="ourServices" className="d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex justify-content-center my-4">
                        <div className=" d-flex justify-content-center">
                            <img className="img-fluid person-img" src="/Assets/person.png" alt="person" />   
                            <div className="circle"></div>         
                        </div>                        
                        <div className="circle1"></div>
                        <div className="circle2"></div>
                        <div className="circle3"></div>
                    </div>
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                        <h3>Best Car Rental for any kind of trip in (Lokasimu)!</h3>
                        <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                        <ul>
                            <li className="our-services mt-3">
                                <p>Sewa Mobil Dengan Supir di Bali 12 Jam</p> 
                            </li>
                            <li className="our-services mt-3">
                                <p>Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
                            </li>
                            <li className="our-services mt-3">
                                <p>Sewa Mobil Jangka Panjang Bulanan</p>
                            </li>
                            <li className="our-services mt-3">
                                <p>Gratis Antar - Jemput Mobil di Bandara</p>
                            </li>
                            <li className="our-services mt-3">
                                <p>Layanan Airport Transfer / Drop In Out</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurServices;