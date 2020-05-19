// fetch('https://swapi.dev/api/people/1/')
//   .then(res => res.json())
//   .then(body => console.log(body))

export default class SwapiService {

    _apiBase = 'https://swapi.dev/api';

    async getResourse (url) {
        const res = await fetch(`${this._apiBase}${url}`);
        
        if(!res.ok) throw new Error(`Could not fetch ${url} , received ${res.status}`);
        
        return await res.json();
    }

    // персонажи
    async getAllPeople () {
        const res = await this.getResourse(`/people/`);
        return res.results;
    }

    getPerson (id) {
        return this.getResourse(`/people/${id}/`);
    }

    // планеты
    async getAllPlanets () {
        const res = await this.getResourse(`/planets/`);
        return res.results;
    }

    getPlanets (id) {
        return this.getResourse(`/planets/${id}/`);
    }

    // корабли
    async getAllStarships () {
        const res = await this.getResourse(`/starships/`);
        return res.results;
    }

    getStarships (id) {
        return this.getResourse(`/starships/${id}/`);
    }

    // транспортные средства
    async getAllVehicles () {
        const res = await this.getResourse(`/vehicles/`);
        return res.results;
    }

    getVehicles (id) {
        return this.getResourse(`/vehicles/${id}/`);
    }

    // виды
    async getAllSpecies () {
        const res = await this.getResourse(`/species/`);
        return res.results;
    }

    getSpecies (id) {
        return this.getResourse(`/species/${id}/`);
    }
    
    // фильмы
    async getAllFilms () {
        const res = await this.getResourse(`/films/`);
        return res.results;
    }

    getFilms (id) {
        return this.getResourse(`/films/${id}/`);
    }

}

const swapi = new SwapiService();

swapi.getPerson(35).then(p => {
    console.log(p)
  // people.forEach((p) => {
  //   console.log(p.name);
  // })
})

  // swapi.getAllPeople().then(people => {
  //   console.log(people)
  //   // people.forEach((p) => {
  //   //   console.log(p.name);
  //   // })
  // })