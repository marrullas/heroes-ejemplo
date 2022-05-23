import { heroes } from "../data/heroes"


export const getHeroByName = (name = '') => {

    console.log('diparado');

    name = name.toLowerCase();
    if(name.length === 0) {
        return [];
    }
    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name));
    //return heroes;
  
}
