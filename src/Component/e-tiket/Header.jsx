import React, { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <nav className="navbar bg-light">
        <div className="container-fluid px-5">
          <a className="navbar-brand fw-bold">BinarRent</a>
          <div className="d-flex">
            <div className="nav-item p-2">Our Services</div>
            <div className="nav-item p-2">Why Us</div>
            <div className="nav-item p-2">Testimoni</div>
            <div className="nav-item p-2">FAQ</div>
            <button type="button" className="btn btn-success btn-sm p-2">
              Register
            </button>
          </div>
        </div>
        <div className="container-fluid px-5 pt-1">
          <a className="navbar-brand fs-6 fw-semibold">
            <i className="fs-4 align-middle bi-arrow-left-short p-2"></i>Tiket
          </a>
          <div className="d-flex pe-5">
            <div className="nav-item fs-6 p-2">
              <i className="bi bi-check-circle-fill text-primary p-1"></i>
              <small>Pilih Metode</small>
            </div>
            <div className="nav-item fs-6 p-2">
              <i className="bi bi-check-circle-fill text-primary p-1"></i>
              <small>Bayar</small>
            </div>
            <div className="nav-item fs-6 p-2">
              <i className="bi bi-check-circle-fill text-primary p-1"></i>
              <small>Tiket</small>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
