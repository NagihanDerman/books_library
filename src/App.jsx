import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import ProductsPage from "./pages/ProductsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    // tarayıcaki url'e göre sayfalama yapmamızı sağlar
    <BrowserRouter>
      <div className="page">
        {/* Bütün sayfalar tarafından ortak olarak kullanılacak bileşnleri routes dışına yazarız */}
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/ürünler" element={<ProductsPage />} />

          {/* Undifened sayfanin tanimi*/}
          <Route path="*" element={<NotFound />} />

          {/* dinamik yapi*/}
          <Route path="/ürünler/ürün/:id" element={<ProductDetail />} />

          {/* nested routes > iç içe yollar */}
          <Route path="/kategori" element={<CategoryPage />}>
            <Route path="kampanya" element={<h1>HİKAYE</h1>} />
            <Route path="roman" element={<h1>ROMAN</h1>} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
