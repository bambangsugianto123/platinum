import React, { Fragment } from 'react'

const Header = () => {
    return (
        <Fragment>
            <nav class="navbar bg-light">
                <div class="container-fluid px-5">
                    <a class="navbar-brand fw-bold">BinarRent</a>
                    <div class="d-flex">
                        <div class="nav-item p-2">Our Services</div>
                        <div class="nav-item p-2">Why Us</div>
                        <div class="nav-item p-2">Testimoni</div>
                        <div class="nav-item p-2">FAQ</div>
                        <button type="button" class="btn btn-success btn-sm p-2">Register</button>
                    </div>
                </div>
                <div class="container-fluid px-5 pt-1">
                    <a class="navbar-brand fs-6 fw-semibold"><i class="fs-4 align-middle bi-arrow-left-short p-2"></i>Tiket</a>
                    <div class="d-flex pe-5">
                        <div class="nav-item fs-6 p-2"><i class="bi bi-check-circle-fill text-primary p-1"></i><small>Pilih Metode</small></div>
                        <div class="nav-item fs-6 p-2"><i class="bi bi-check-circle-fill text-primary p-1"></i><small>Bayar</small></div>
                        <div class="nav-item fs-6 p-2"><i class="bi bi-check-circle-fill text-primary p-1"></i><small>Tiket</small></div>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Header