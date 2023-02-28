import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Paginacion from "./components/Paginacion";
import Personajes from "./components/Personajes";

function App() {

  const [personajes, setPersonajes] = useState([])

  const [info, setInfo] = useState({});

  const urlInicial = "https://rickandmortyapi.com/api/character"

  const fetchPersonajes = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPersonajes(data.results);
        setInfo(data.info);
      })
      .catch(error => console.log(error))
  };

const onPrevious = () => {
  fetchPersonajes(info.prev)
}

const onNext = () => {
  fetchPersonajes(info.next)
}

  useEffect(() => {
    fetchPersonajes(urlInicial)
  }, [])

  return (
    <>
      <Navbar titulo="rick and morty api" />

      <div className="container mt-5">
        <Paginacion prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
        <Personajes personajes={personajes} />
        <Paginacion prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
      </div>

    </>
  );
}

export default App;
