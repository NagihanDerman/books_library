import { useSearchParams } from "react-router-dom";

const FilterArea = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    // aratılan terimi arama parametresi olarak ekle
    searchParams.set("aramaTerimi", e.target[0].value);
    // url'i güncelle
    setSearchParams(searchParams);
  };

  const handleChange = (e) => {
    // eklenilecek parametreyi belirle
    searchParams.set("sırala", e.target.value);
    // url'i güncelle
    setSearchParams(searchParams);
  };
  return (
    <div className="mt-3 d-flex gap-3 align-items-center justify-content-between">
      <div className="d-flex align-items-center gap-3">
        <label>Sirala</label>
        <select onChange={handleChange} className="form-select">
          <option>a-z</option>
          <option>z-a</option>
        </select>
      </div>
      <form onSubmit={handleSubmit} className="d-flex gap-2">
        <input
          defaultValue={searchParams.get("aramaTerimi")}
          className="form-control"
          type="text"
          placeholder="aranacak kelimeyi giriniz..."
        />
        <button className="btn btn-primary">Ara</button>
      </form>
    </div>
  );
};

export default FilterArea;
