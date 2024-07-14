import React from "react";
import { useState } from "react";
import './Testimonial.css';


function Testimonial() {
    const [testimonial1, setTestimonial1] = useState('none');
    const [testimonial2, setTestimonial2] = useState('flex');
    const [testimonial3, setTestimonial3] = useState('none');

    const handleNext = () => {
        if (testimonial1 == 'flex') {
            setTestimonial1('none');
            setTestimonial2('flex');
            setTestimonial3('none')
        } else if (testimonial2 == 'flex') {
            setTestimonial2('none');
            setTestimonial3('flex');
            setTestimonial1('none')
        }
    }

    const handlePrevious = () => {
        if (testimonial2 == 'flex') {
            setTestimonial2('none');
            setTestimonial1('flex');
            setTestimonial3('none');
        } else if (testimonial3 == 'flex') {
            setTestimonial3('none');
            setTestimonial2('flex');
            setTestimonial1('none');
        }
    }

    return (
        <section id="testimonial">
                <div className="container d-flex flex-column align-items-center">
                    <h3>Testimonial</h3>
                    <p>Berbagai review positif dari para pelanggan kami</p>
                </div>

                <div className="d-flex justify-content-center mx-3" >
                    <div className="card p-3 sm-p-5" style={{width: '619px', minHeight: '270px', backgroundColor: '#F1F3FF', display: `${testimonial1}`}}>
                        <div className="row align-items-center" style={{height: '100%'}}>
                            <div className="col-lg-3 d-flex align-items-center justify-content-center">
                                <img src="./Assets/testimonial2.png" alt="person" />
                            </div>
                            <div className="col-lg-9">
                                <div className="star my-3">
                                    <i className="fa-solid fa-star" style={{color: '#F9CC00'}}></i>
                                    <i className="fa-solid fa-star" style={{color: '#F9CC00'}}></i>
                                    <i className="fa-solid fa-star" style={{color: '#F9CC00'}}></i>
                                    <i className="fa-solid fa-star" style={{color: '#F9CC00'}}></i>
                                    <i className="fa-solid fa-star" style={{color: '#F9CC00'}}></i>
                                </div>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                <p>Jhon Doe 32, Bromo</p>
                            </div>
                        </div>
                    </div>
                    <div className="card p-3" style={{width: '619px', minHeight: '270px', backgroundColor: '#F1F3FF', display: `${testimonial2}`}}>
                        <div className="row d-flex align-items-center" style={{height: '100%'}}>
                            <div className="col-lg-3 d-flex align-items-center justify-content-center">
                                <img src="./Assets/testimonial1.png" alt="person" />
                            </div>
                            <div className="col-lg-9">
                            <div className="star my-3">
                                    <i className="fa-solid fa-star" style={{color: '#F9CC00'}}></i>
                                    <i className="fa-solid fa-star" style={{color: '#F9CC00'}}></i>
                                    <i className="fa-solid fa-star" style={{color: '#F9CC00'}}></i>
                                    <i className="fa-solid fa-star" style={{color: '#F9CC00'}}></i>
                                    <i className="fa-solid fa-star" style={{color: '#F9CC00'}}></i>
                                </div>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                <p>Jhon Doe 32, Bromo</p>
                            </div>
                        </div>
                    </div>
                    <div className="card p-3" style={{width: '619px', minHeight: '270px', backgroundColor: '#F1F3FF', display: `${testimonial3}`}}>
                        <div className="row d-flex align-items-center" style={{height: '100%'}}>
                            <div className="col-lg-3 d-flex align-items-center justify-content-center">
                                <img src="./Assets/testimonial2.png" alt="person" />
                            </div>
                            <div className="col-lg-9">
                                <div className="star my-3">
                                    <i className="fa-solid fa-star" style={{color: '#F9CC00'}}></i>
                                    <i className="fa-solid fa-star" style={{color: '#F9CC00'}}></i>
                                    <i className="fa-solid fa-star" style={{color: '#F9CC00'}}></i>
                                    <i className="fa-solid fa-star" style={{color: '#F9CC00'}}></i>
                                    <i className="fa-solid fa-star" style={{color: '#F9CC00'}}></i>
                                </div>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                <p>Jhon Doe 32, Bromo</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="control container d-flex justify-content-center">
                    <button onClick={handlePrevious} className="btn btn-light my-3 mr-3 d-flex justify-content-center align-items-center" style={{width: '44px', height: '44px', border: '#C4C4C4 solid 1px', borderRadius: '50%', fontSize: '22px'}}>&#60;</button>
                    <button onClick={handleNext} className="btn btn-light my-3 d-flex justify-content-center align-items-center" style={{ width: '44px', height: '44px', border: '#C4C4C4 solid 1px', borderRadius: '50%', fontSize: '22px'}}>&#62;</button>
                </div>
        </section>
    )
}


export default Testimonial;