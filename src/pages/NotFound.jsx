import { Link } from "react-router-dom";

const NotFoundPage = ({ state }) => {
  return (
    <div className="container py-6">
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "400px" }}
      >
        <img
          className="img-fluid rounded"
          style={{
            maxWidth: "400px",
            maxHeight: "400px",
          }}
          src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg"
          alt="404 Not Found"
        />
      </div>
      <p className="text-center fs-3 my-4">
        Üzgünüz, aradığınız sayfa bulunamadı
      </p>
      <div className="d-flex justify-content-center">
        <Link className="bg-primary text-white p-2 rounded" to={"/"}>
          Anasayfa
        </Link>
      </div>
      {state && (
        <p className="fs-3 text-center my-4">
          Hata kodunuz
          <span className="badge bg-warning mx-4"> {state}</span>
        </p>
      )}
    </div>
  );
};

export default NotFoundPage;
