import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetail = () => {
  const [book, setBook] = useState(null);
  // use Navigate fonk cagirip yonlendirme gorevini yapacak olan fok erisme
  const navigate = useNavigate();
  //1 - url daki id parametresini al,

  const { id } = useParams();
  // 2- kitabin bilgilerini apiden al
  useEffect(() => {
    axios
      .get(`http://localhost:3090/books/${id}`)
      .then((res) => setBook(res.data))
      .catch((err) => navigate("/undefined", { state: err.message }));
    // urunun bilgisi  apiden  gelmediyse kullaniciyi 404 sayfasina yonlendir
  }, []);

  return (
    <div>
      {/* kitap verisi gelmediyse yükleniyor bas */}
      {!book && <p>Yükleniyor...</p>}
      {/* kitap verisi geldiyse içieriği ekrana bas */}
      {book && (
        <div className="row my-5 p-5">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              className="img-fluid rounded shadow"
              style={{ maxWidth: "400px" }}
              src={book.image}
              alt={book.title}
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-content-center my-3">
            <h1>{book.title}</h1>

            <div>
              <BookInfo label="Yazar" value={book.author} />
              <BookInfo label="Açıklma" value={book.description} />
              <BookInfo label="Yıl" value={book.year} />
              <BookInfo label="Sayfa Sayısı" value={book.page} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductDetail;

// 2.component
const BookInfo = ({ label, value }) => {
  return (
    <p className="fs-5">
      <span className="badge bg-danger me-3">{label}</span>
      <span>{value}</span>
    </p>
  );
};
