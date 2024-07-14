import React from "react";


function WhyUs() {
    return (
        <section id="whyUs" className="d-flex flex-column justify-content-center" style={{minHeight: '300px'}}>
            <div className="container mb-5">
                <h3>Why Us?</h3>
                <p className="mb-5">Mengapa harus pilih Binar Car Rental?</p>
                <div className="row" style={{rowGap: '15px'}}>
                    <div className="col-lg-3">
                        <div className="card py-2 px-3" style={{height: '100%'}}>
                            <div className="d-flex justify-content-center my-3" style={{width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#F9CC00'}}>
                                <i className="fa-solid fa-thumbs-up p-2" style={{color: 'white'}}></i>
                            </div>
                            <h6>Mobil Lengkap</h6>
                            <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card py-2 px-3" style={{height: '100%'}}>
                            <div className="d-flex justify-content-center my-3" style={{width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#FA2C5A'}}>
                                <i className="fa-solid fa-tag p-2" style={{color: 'white'}}></i>
                            </div>
                            <h6>Harga Murah</h6>
                            <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card py-2 px-3" style={{height: '100%'}}>
                            <div className="d-flex justify-content-center my-3" style={{width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#0D28A6'}}>
                                <i className="fa-solid fa-clock p-2" style={{color: 'white'}}></i>
                            </div>
                            <h6>Layanan 24 Jam</h6>
                            <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card py-2 px-3" style={{height: '100%'}}>
                            <div className="d-flex justify-content-center my-3" style={{width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#5CB85F'}}>
                                <i className="fa-solid fa-award p-2" style={{color: 'white'}}></i>
                            </div>
                            <h6>Sopir Profesional</h6>
                            <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default WhyUs;