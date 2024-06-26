import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { useSearchParams } from "react-router-dom";
import FilterArea from "../components/FilterArea";

const ProductsPage = () => {
  const [books, setBooks] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  //url'deki parametrelere erisme
  const order = searchParams.get("sirala");
  const query = searchParams.get("aramaTerimi");

  //api istegi atilirken gonderilecek olan parametreler

  useEffect(() => {
    const params = {
      _sort: "title",
      _order: order === "z-a" ? "desc" : "asc",
      q: query,
    };
    axios
      .get(`http://localhost:3090/books`, { params })
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, [order, query]);

  // console.log(books);
  return (
    <div className="my-5 p-5">
      <h3>{books?.length} Kitap Bulundu</h3>
      <FilterArea />
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-5 mt-3">
        {books?.map((book) => (
          <div key={book.id} className="col">
            <Cards book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
