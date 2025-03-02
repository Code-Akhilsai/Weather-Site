import "./App.css";
import Logo from "./Logo";
import Weadisplay from "./Weadisplay";
import Places from "./Places";
import Hour from "./Hour";
import Max from "./Max";
import Min from "./Min";
import Feel from "./Feel";
import Fareh from "./Fareh";
import { useState } from "react";
function App() {
  const [search_cou, setSearch] = useState("");
  const [data2, setData2] = useState("New York");
  const handleSearch = () => {
    setData2(search_cou);
  };

  return (
    <>
      <Logo
        search_cou={search_cou}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />

      <Weadisplay search_cou={data2} />

      <Min min_cou={data2} />
      <Max max_cou={data2} />
      <Feel feel_cou={data2} />
      <Fareh f_cou={data2} />
      <Hour h_cou={data2} />

      <Places />
    </>
  );
}

export default App;
