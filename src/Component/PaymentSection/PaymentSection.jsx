import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function PaymentSection() {
    const [clipboard, setClipBoard] = useState();
    const [paymentMethod, setPaymentMethod] = useState('ATM BCA');
    const [uploadPaymentProof, setUploadPaymentProof] = useState(false);
    const [uploadImage, setUploadImage] = useState();
    const navigate = useNavigate();


    return (
        <section className="mb-5" id="paymentDetail">
            <div className="container">
                <div className="row d-flex justify-content-evenly mx-1">
                    <div className="col-lg-7 p-0">
                        <div className='card p-4 mb-3'>
                            <h5>Selesaikan Pembayaran Sebelum</h5>
                            <div className='d-flex justify-content-between'>
                                <p className='m-0 py-2 d-flex fw-normal justify-content-center align-items-center'>Rabu, 19 Mei 2022 jam 13.00 WIB</p>
                                <p className='m-0 px-3 d-flex align-items-center font-weight-normal'>23:10:05</p>
                            </div>                        
                        </div>
                        <div className='card p-4 mb-3'>
                            <h5>Lakukan Transfer Ke</h5>
                            <div>
                                <div className='d-flex py-3 mb-2'>
                                    <p className='m-0 py-2 d-flex justify-content-center align-items-center card' style={{width:'85px'}}>BCA</p>
                                    <p className='m-0 px-3 d-flex align-items-center font-weight-normal'>BCA Transfer <br /> a.n Binar Car Rental</p>
                                </div>
                                <div className='mb-2'>
                                    <form>
                                        <label htmlFor='rekening'>Nomor Rekening</label>
                                        <div className='d-flex'>
                                            <input disabled value={54104257877} id="rekening" className='w-100 px-2 py-1'></input>
                                            <button className='px-3 btn btn-light' onClick={(e) => {navigator.clipboard.writeText(54104257877); e.preventDefault()}}><i className="fa-regular fa-copy"></i></button>
                                        </div>
                                    </form>
                                </div>
                                <div>
                                    <form>
                                        <label htmlFor='rekening'>Total Bayar</label>
                                        <div className='d-flex'>
                                            <input disabled value={`Rp.`} id="rekening" className='w-100 px-2 py-1'></input>
                                            <button className='px-3 btn btn-light' onClick={(e) => {navigator.clipboard.writeText('Rp. 500.000'); e.preventDefault()}}><i className="fa-regular fa-copy"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className='card p-4'>
                            <h5>Instruksi Pembayaran</h5>
                            <div className='d-flex my-4 row px-3'>
                                <p className='d-flex justify-content-center mb-0 px-3 pb-3 col-md-3 col-6' onClick={() => {setPaymentMethod('ATM BCA')}} style={paymentMethod === 'ATM BCA' ? {borderBottom: 'solid 2px green'} : {borderBottom: 'solid 2px #EEEEEE', cursor: 'pointer'}} >ATM BCA</p>
                                <p className='d-flex justify-content-center mb-0 px-3 pb-3 col-md-3 col-6'onClick={() => {setPaymentMethod('M-BCA')}} style={paymentMethod === 'M-BCA' ? {borderBottom: 'solid 2px green'} : {borderBottom: 'solid 2px #EEEEEE', cursor: 'pointer'}}>M-BCA</p>
                                <p className='d-flex justify-content-center mb-0 px-3 pb-3 col-md-3 col-6'onClick={() => {setPaymentMethod('BCA Klik')}} style={paymentMethod === 'BCA Klik' ? {borderBottom: 'solid 2px green'} : {borderBottom: 'solid 2px #EEEEEE', cursor: 'pointer'}}>BCA Klik</p>
                                <p className='d-flex justify-content-center mb-0 px-3 pb-3 col-md-3 col-6'onClick={() => {setPaymentMethod('Mobile Banking')}} style={paymentMethod === 'Mobile Banking' ? {borderBottom: 'solid 2px green'} : {borderBottom: 'solid 2px #EEEEEE', cursor: 'pointer'}}>Mobile Banking</p>
                            </div>
                            <div className={paymentMethod === 'ATM BCA' ? 'd-flex' : 'd-none'}>
                                <ul>
                                    <li className="fw-normal">Masukkan kartu ATM, lalu PIN</li>
                                    <li className="fw-normal">Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek BCA Virtual Account”</li>
                                    <li className="fw-normal">Masukkan nomor BCA Virtual Account: 70020+Order ID
                                        Contoh:
                                        No. Peserta: 12345678, maka ditulis 7002012345678
                                    </li>
                                    <li className="fw-normal">Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi</li>
                                    <li className="fw-normal">Ambil dan simpanlah bukti transaksi tersebut</li>
                                </ul>
                            </div> 
                            <div className={paymentMethod === 'M-BCA' ? 'd-flex' : 'd-none'}>
                                <ul>
                                    <li className="fw-normal">Buka M-BCA di handphone kamu</li>
                                    <li className="fw-normal">Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek BCA Virtual Account”</li>
                                    <li className="fw-normal">Masukkan nomor BCA Virtual Account: 70020+Order ID
                                        Contoh:
                                        No. Peserta: 12345678, maka ditulis 7002012345678
                                    </li>
                                    <li className="fw-normal">Ikuti instruksi untuk menyelesaikan transaksi</li>
                                    <li className="fw-normal">Ambil dan simpanlah bukti transaksi tersebut</li>
                                </ul>
                            </div>
                            <div className={paymentMethod === 'BCA Klik' ? 'd-flex' : 'd-none'}>
                                <ul>
                                    <li className="fw-normal">Buka BCA Klik di handphone kamu</li>
                                    <li className="fw-normal">Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek BCA Virtual Account”</li>
                                    <li className="fw-normal">Masukkan nomor BCA Virtual Account: 70020+Order ID
                                        Contoh:
                                        No. Peserta: 12345678, maka ditulis 7002012345678
                                    </li>
                                    <li className="fw-normal">Ikuti instruksi untuk menyelesaikan transaksi</li>
                                    <li className="fw-normal">Ambil dan simpanlah bukti transaksi tersebut</li>
                                </ul>
                            </div>
                            <div className={paymentMethod === 'Mobile Banking' ? 'd-flex' : 'd-none'}>
                                <ul>
                                    <li className="fw-normal">Buka aplikasi BCA Mobile Banking di handphone kamu</li>
                                    <li className="fw-normal">Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek BCA Virtual Account”</li>
                                    <li className="fw-normal">Masukkan nomor BCA Virtual Account: 70020+Order ID
                                        Contoh:
                                        No. Peserta: 12345678, maka ditulis 7002012345678
                                    </li>
                                    <li className="fw-normal">Ikuti instruksi pada aplikasi BCA Mobile Banking untuk menyelesaikan transaksi</li>
                                    <li className="fw-normal">Setelah transfer berhasil, screenshot bukti transaksi yang ada di aplikasi BCA Mobile Banking, simpan sebagai bukti pembayaran</li>
                                </ul>
                            </div>                       
                        </div>                    
                    </div>
                    <div className="col-lg-4 p-0">
                        {
                            !uploadPaymentProof ?  
                            (<div className='card p-4'>
                                <p>Klik konfirmasi pembayaran untuk mempercepat proses pengecekan</p>
                                <div>
                                    <button className='btn btn-success w-100' onClick={() => setUploadPaymentProof(true)}>Konfirmasi Pembayaran</button>
                                </div>
                            </div>) : (
                                <div className='card p-4'>
                                    <p>Konfirmasi Pembayaran</p>
                                    <p className='fw-normal'>Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu akan segera kami cek tunggu kurang lebih 10 menit untuk mendapatkan konfirmasi.</p>
                                    <form>
                                        <input type={'file'} onChange={(e) => {setUploadImage(e.target.value)}} id="fileUpload" accept=".jpg" />
                            
                                    </form>
                                    <div>
                                        <button className='btn btn-success w-100 mt-3' onClick={() => navigate(`/car/etiket/`)}>Konfirmasi</button>
                                    </div>
                                </div>
                            )
                        }
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PaymentSection
