import { Navigate, useParams } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";
import { HeroCard } from "./HeroCard";


export const HeroScreen = () => {

    const {id} = useParams();

    const hero = getHeroById(id);

    if(!hero){
      return <Navigate to='/' />
    }

    return (
      <div className="row rows-cols-1">
      
        <HeroCard {...hero} />
      
    </div>
    )
  }