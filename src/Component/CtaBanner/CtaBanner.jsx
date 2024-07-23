import React from "react";
// import './CtaBanner.css';


function CtaBanner() {
    return (
        <section id="ctaBanner">
            <div className="container d-flex justify-content-center align-items-center ctaBanner px-5">
                <div className="col-lg-9 d-flex flex-column justify-content-center align-items-center p-5">
                    <h1 className="text-center text-light mb-3">Sewa Mobil di (Lokasimu) Sekarang</h1>
                    <p className="text-center text-light mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <a href="/car" className="text-reset text-decoration-none">
                        <button className="btn btn-success">
                            Mulai Sewa Mobil
                        </button>
                    </a>                        
                </div>
            </div>
        </section>
    )
}

export default CtaBanner;