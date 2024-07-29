import { Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useGetOrderByIdQuery } from "../../services/redux/apiSlices/orderApi";
import { PDFViewer, BlobProvider } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";
import Step from "../DetailPayment/Step";

const E_tiket = () => {
  const { id } = useParams();
  const { data: order, isLoading } = useGetOrderByIdQuery(id);

  return (
    <>
      <div className="container p-4" style={{ marginTop: "-100px" }}>
        <Step step1 step2 step3 />
      </div>
      <div className="container mt-2">
        <div className="text-center pt-2">
          <img src="/src/assets/images/checklist.png" alt="success" />
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
                  {order && (
                    <BlobProvider document={<MyDocument data={order} />}>
                      {({ url }) => (
                        <a
                          href={url}
                          download={`invoice-rental-${order?.id}.pdf`}
                          className="btn btn-outline-primary fw-bold"
                        >
                          Unduh
                        </a>
                      )}
                    </BlobProvider>
                  )}
                </div>
              </div>

              <Row
                style={{
                  border: "1px solid rgba(0, 0, 0, .3)",
                  display: "flex",
                  height: "680px",
                  marginBottom: "24px",
                }}
              >
                {isLoading ? (
                  <Row className="justify-content-center align-items-center">
                    <div
                      className="spinner-border text-success d-flex justify-content-center align-items-center"
                      style={{ width: "7rem", height: "7rem" }}
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </Row>
                ) : (
                  <PDFViewer style={{ width: "100%", height: "100%" }}>
                    <MyDocument data={order} />
                  </PDFViewer>
                )}
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default E_tiket;
