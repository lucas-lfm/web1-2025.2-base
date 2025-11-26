import { useState } from "react";

import "./App.css";

import Card from "./components/Card";
import SearchBar from "./components/SearchBar";
import { useEffect } from "react";

const App = () => {
  const [cars, setCars] = useState(null);

  useEffect(() => {
    async function fetchCars() {
      const res = await fetch("http://localhost:3000/cars");
      const data = await res.json();
      setCars(data);
    }

    fetchCars();
  }, []);

  const handleSearch = async (query) => {
    if (query === '') {
      const res = await fetch("http://localhost:3000/cars");
      const data = await res.json();
      setCars(data);
      return;
    }

    setCars(cars.filter( ({ model }) => model.toLowerCase().includes(query.toLowerCase()) ));
  }
  
  return (
    <>
      <h1>Anúncios Recentes</h1>
      <SearchBar handleSearch={handleSearch} />
      <div className='cards'>
        {cars && cars.map((car) => (
          <Card key={car.id} car={car} />
        ))}
      </div>
    </>
  );
};

export default App;
