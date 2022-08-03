import "./App.css";
import { useEffect, useState } from "react";
import Card from "./Card";
import Select from "./Select";
import SearchBar from "./SearchBar";

function App() {
  const [urlParams, setUrlParams] = useState({
    rows: 32,
    recherche: "Paris",
  });
  const [records, setRecords] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let url = `https://data.iledefrance.fr/api/records/1.0/search/?dataset=evenements-publics-cibul&q=${urlParams.recherche}&rows=${urlParams.rows}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setRecords(data.records);
      });
  }, [urlParams.rows, urlParams.recherche]);


  const handleChange = (e) => {
    setUrlParams({ ...urlParams, rows: e.target.value, recherche: e.target.value });
  };

  return (
    <div>
      <h1>Ma liste d'évènements</h1>
      <SearchBar onChange={handleChange} type="text" value={urlParams}/>
  
      <Select onChange={handleChange}/>
  
      {loading ? (
        <div>Chargement en cours </div>
      ) : (
        <>
          <h1>{records.length}</h1>
          {records.map((e) => (
            <Card
              key={e.recordid}
              title={e.fields.title}
              image={e.fields.image_thumb}
              description={e.fields.description}
            />
          ))}
        </>
      )}
    </div>
  );

}

export default App;
