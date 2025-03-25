import { Links } from "./Links.js";

export async function Browser(character) {
    let people = [];
  
    for ( let i = 1; i<=9; i++ ) {
      const response = await Links(`https://swapi.dev/api/people?page=${i}`);
      people = people.concat(response.results);
    }
    
    const results = people.filter(({ name }) => character && name.toLowerCase().includes(character.toLowerCase()));
}