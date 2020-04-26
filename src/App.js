import React, { useState, useEffect } from "react";

const App = () => {
  const [countries, setCountries] = useState({});
  const [search, setSearch] = useState("argentina");

  const handleChange = (e) => {
    setSearch(e.target.value);
    
  };

  const searchCountries = () => {
    fetch(`https://restcountries.eu/rest/v2/name/${search}`)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  };

   const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(searchCountries, [search]);

  return (
    <div className="main">
      <div className="card">
        {countries && countries.name && (
          <>
            <p> Nombre: {countries.name.map((country) => country.name)} </p>
            <span>Bandera:</span>
            <img alt={countries.name} src={countries.flag} />
          </>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <input value={search} onChange={handleChange} />
        <input type="submit" value="Buscar país" />
        <p>{countries.name}</p>
      </form> 
      </div>
  );
};

export default App;
