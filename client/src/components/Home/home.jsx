import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDogs, getTemperaments } from "../../redux/actions/actions.js"
import Card from "../Card/card.js";
import Loader from "../Loader/loader.js";
import Searchbar from "../SearchBar/searchbar.js";
import Filters from "../Filters/filters.js";
import Sort from "../Sort/sort.js";
import Pages from "../Pages/pages.js";

import "./home.css";

const Home = () => {
  const dispatch = useDispatch();
  const appTopRef = useRef()
  const dogs = useSelector((state) => state.dogs);
  const [order, setOrder] = useState(""); //este state sólo sirve para re-renderizar la pág cuando hacemos un sort

  //paginado
  const [actualPage, setActualPage] = useState(1); //arrancamos desde la page 1
  const [dogsPerPage, setDogsPerPage] = useState(8); //cuantos dogs por page
  const indexOfLastDog = actualPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const actualDogs = dogs.slice(indexOfFirstDog, indexOfLastDog); //recortamos el arreglo con todos los dogs
  const [minPageNumber, setMinPageNumber] = useState(0)
  const [maxPageNumber, setMaxPageNumber] = useState(5)
  const pages = (pageNumber) => {
    setActualPage(pageNumber);
    appTopRef.current?.scrollIntoView({ behavior: 'smooth' })                                                            
    //desplaza los contenedores ancestros del elemento de manera que el elemento en el que scrollIntoView()se llama sea visible para el usuario.
    if(pageNumber >= maxPageNumber) {
      setMinPageNumber(minPageNumber+4)
      setMaxPageNumber(maxPageNumber+4)
    } else if(pageNumber <= minPageNumber+1 && pageNumber !== 1) {
      setMinPageNumber(minPageNumber-4)
      setMaxPageNumber(maxPageNumber-4)
    }
  };

  useEffect(() => {
    !dogs.length && dispatch(getDogs())
    dispatch(getTemperaments())
  }, [dispatch, dogs]);

  const handleRefresh = () => {
    dispatch(getDogs())
  }

  return (
    <div ref={appTopRef} className="App">
      
      <div className="home-container">
      
        <div className="sort-filter-container">
          <div className="sort-filter">
            <Filters setMinPageNumber={setMinPageNumber} setMaxPageNumber={setMaxPageNumber} setActualPage={setActualPage} />
            <Sort setMinPageNumber={setMinPageNumber} setMaxPageNumber={setMaxPageNumber} setActualPage={setActualPage} setOrder={setOrder} />
          </div>
          <Searchbar className="home-serchbar" setMinPageNumber={setMinPageNumber} setMaxPageNumber={setMaxPageNumber} setActualPage={setActualPage}/>
          <div className="create-dog">
            Create your dog &nbsp;
            <Link to="/dogs">here</Link>!
          </div>
          <button className="home-refresh-btn" onClick={handleRefresh}>Refresh</button>
        </div>

        {/* dog cards */}
        <div className="container"> {/*hay otra clase container en card.css */}
          {actualDogs.length && Array.isArray(actualDogs) ? (
            actualDogs.map((dog) => {
              return (
                <Card
                  id={dog.id}
                  key={dog.id}
                  name={dog.name}
                  image={dog.image}
                  weight={dog.weight}
                  temperaments={dog.temperaments}
                />
              );
            })
          ) : (
            !dogs.length 
            ? <Loader /> 
            : <div className="home-dog-not-found"><h3>Dog not found :(</h3></div>
          )}
        </div>

        <div className="page-home">
          <Pages
            actualPage={actualPage}
            minPageNumber={minPageNumber}
            maxPageNumber={maxPageNumber}
            dogsPerPage={dogsPerPage}
            dogs={Array.isArray(dogs) ? dogs.length : 1}
            pages={pages}
          />
        </div>
        
      </div>
    </div>
  );
};

export default Home;