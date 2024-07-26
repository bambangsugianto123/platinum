import { Image } from "react-bootstrap";

const invoiceData = {
  namaBank: "Bank BCA",
  namaMobil: "Toyota Avanza",
  priceMobil: "IDR 500,000",
  awalSewa: "2024-08-01",
  akhirSewa: "2024-08-05",
  slip: "https://www.jurnal.id/wp-content/uploads/2021/09/contoh-nota-kosong-434x628.png", // Replace with the actual image URL or base64 string
};

const E_tiket = () => {
  return (
    <>
      <div className="container mt-2">
        <div className="text-center pt-2">
          <img src="/public/Assets/checklist.png" alt="success" />
          <h3>Pembayaran berhasil!</h3>
          <p>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
        </div>
        <div className="d-flex justify-content-center">
          <div className="card w-50 mt-5 shadow p-3 mb-5 bg-body rounded">
            <div className="card-body">
              <div className="d-flex flex-row justify-content-between">
                <div className="p-2">
                  <h4>Invoice</h4>
                  <p>
                    <small>*no invoice</small>
                  </p>
                </div>
                <div className="p-2">
                  <a
                    download="Invoice.pdf"
                    className="btn btn-outline-primary"
                    href={invoiceData.slip}
                  >
                    Unduh
                  </a>
                </div>
              </div>

              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, .3)",
                  display: "flex",
                  height: "750px",
                  marginBottom: "24px",
                }}
              >
                <Image
                  src={invoiceData.slip}
                  alt="Slip"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default E_tiket;
