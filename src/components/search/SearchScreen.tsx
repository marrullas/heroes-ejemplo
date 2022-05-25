import { ChangeEvent, useMemo } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import queryString from 'query-string'; //nos permite extraer valores de la url

import { useForm } from "../../hooks/useForm";
import { getHeroByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";


export const SearchScreen = () => {

  interface FormData {
    searchText: string ;
  };

  const navigate = useNavigate();
  const location = useLocation();
  const {q = ''} = queryString.parse(location.search) ?? '';

  const { values, handleInputChange } = useForm<FormData>( {
    searchText: q as string,   
  });

  const {searchText} = values;
  const herosfiltered = useMemo(() => getHeroByName(q as string),[q]); //para renderizar unicamente cuando cambia el q
  //const herosfiltered = getHeroByName(q as string);

  const handleSearch = (e: ChangeEvent<HTMLFormElement>) => {

    e.preventDefault();
    navigate(`?q=${ searchText }`);
    //console.log(searchText);
  }

    return (

     
      
      <>
        <h1>Search Screen </h1>
        <hr/>
        <div className="row">
          <div className="col-5">

            <h4> Buscar </h4>
            <hr />

            <form onSubmit={handleSearch}>
              <input 
                type="text"
                placeholder="Buscar un heroe"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={searchText}
                onChange={handleInputChange}
              />
              <button type="submit" className="btn btn-outline-primary mt-1">
                <i className="fa fa-search"></i>
                Buscar...
              </button>
            </form>
            <pre>{JSON.stringify(searchText)}</pre>
          </div>
          <div className="col-7">
            <h4>RESULTADOS:</h4>
            <hr />

            {
              (q === '')
                ? <div className="alert alert-info animate__animated animate__fadeIn">Buscar Heroe</div>
                : (herosfiltered.length === 0) &&
                <div className="alert alert-danger animate__animated animate__fadeIn">No hay resultados: { q }</div>
            }

            {
              herosfiltered.map(hero => (

                <HeroCard
                  key={hero.id}
                  {...hero}
                />

              ))
            }

          </div>
        </div>
      </>

    )
  }
  