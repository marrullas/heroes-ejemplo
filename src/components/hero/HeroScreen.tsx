import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";


export const HeroScreen = () => {

  const navigate = useNavigate();



  const handleReturn = () => {
    navigate(-1); //devolverse a la pagina anterior
  }

    const {id:heroId} = useParams();

    const hero = useMemo(() => getHeroById(heroId), [heroId]); //memorizamos los datos para no llamar inecesariamente el render

    if(!hero){
      return <Navigate to='/' />
    }

    const { 
      id,
      superhero,
      publisher,
      alter_ego,
      first_appearance,
      characters

    } = hero;

    const imagePath = `/assets/${id}.jpg`;

    return (
      <div className=" row mt-5">
        <div className="col-4">
          <img src={imagePath} alt={superhero} className="img-thumbnail animate__animated animate__fadeInLeft" />
        </div>

        <div className="col-8 animate__animated animate__slideInDown">
          <h3>{superhero}</h3>
          <ul className="list-group">
            <li className="list-group-item">
              <b>Alter ego: </b>
              {alter_ego}
            </li>
            <li className="list-group-item">
              <b>Publisher: </b>
              {publisher}
            </li>
            <li className="list-group-item">
              <b>Firts Appearance: </b>
              {first_appearance}
            </li>
          </ul>
          <h5>Characters</h5>
          <p>{ characters }</p>

          <button className="btn btn-outline-info"
          onClick= {handleReturn}
          >
            Back
          </button>
        </div>
      </div>
    );
  }