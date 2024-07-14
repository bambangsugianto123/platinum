import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function ProgressBar({page, setPage, car}) {
    const navigate = useNavigate();
    const { id } = useParams();

    return (
        <section id='progressBar' style={{position: 'absolute', top: '140px', right: '0', left: '0', marginBottom:'106px'}}>
            <div className="container d-flex justify-content-between" style={{height: '44px'}}>
                <div className='d-flex'>
                    <a onClick={() => {page === 'transfer' ? setPage('payment method') : page === 'payment method' ? navigate(`/payment/${id}`) : page === 'etiket' && navigate(`/transfer/${id}`)}} className='h-100 text-decoration-none text-dark' style={{width: '44px', fontSize: '18px', cursor: 'pointer'}}><i className="fa-solid fa-arrow-left mr-3 d-flex align-items-center h-100 w-100"></i></a>
                    <p className='d-none d-sm-flex align-items-center h-100'>Pembayaran</p>
                </div>
                <div className='d-flex justify-content-evenly align-items-center'>
                    <div className='d-flex'>
                        <p className='d-flex justify-content-center align-items-center text-light m-0' style={{border: '#0D28A6 solid 1px',borderRadius: '50%', width:'20px', height:'20px', backgroundColor: '#0D28A6'}}>1</p>
                        <p className='mb-0 mx-1 font-weight-normal'>Pilih Metode</p>
                    </div>
                    <div style={{ flex: 1, color: '#F1F3FF', backgroundColor: "#0D28A6", height: "2px" }}> dkf</div>
                    <div className='d-flex'>
                        <p className='d-flex justify-content-center align-items-center mb-0 ml-1' style={page === 'transfer' || page === 'etiket' ? {border: '#0D28A6 solid 1px',borderRadius: '50%', width:'20px', height:'20px', backgroundColor: '#0D28A6', color: 'white'} : {border: '#0D28A6 solid 1px',borderRadius: '50%', width:'20px', height:'20px'}}>2</p>
                        <p className='mb-0 mx-1 font-weight-normal'>Bayar</p>
                    </div>
                    <div style={{ flex: 1, color: '#F1F3FF', backgroundColor: "#0D28A6", height: "2px" }}> dkf</div>
                    <div className='d-flex'>
                        <p className='d-flex justify-content-center align-items-center mb-0 ml-1' style={page === 'etiket' ? {border: '#0D28A6 solid 1px',borderRadius: '50%', width:'20px', height:'20px', backgroundColor: '#0D28A6', color: 'white'} : {border: '#0D28A6 solid 1px',borderRadius: '50%', width:'20px', height:'20px'}}>3</p>
                        <p className='mb-0 ml-1 font-weight-normal'>Tiket</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProgressBar