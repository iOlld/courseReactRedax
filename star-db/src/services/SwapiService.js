// fetch('https://swapi.dev/api/people/1/')
//   .then(res => res.json())
//   .then(body => console.log(body))

export default class SwapiService {

    _apiBase = 'https://swapi.dev/api';

    getResourse = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        
        if(!res.ok) throw new Error(`Could not fetch ${url} , received ${res.status}`);
        
        return await res.json();
    }

    // персонажи
    getAllPeople = async () => {
        const res = await this.getResourse(`/people/`);
        return res.results.map(this._transformPerson);
    }

    getPerson = async (id) => {
        const person = await this.getResourse(`/people/${id}/`);
        return this._transformPerson(person);
    }

    // планеты
    getAllPlanets = async () => {
        const res = await this.getResourse(`/planets/`);
        return res.results.map(this._transformPlanet);
    }

    getPlanet = async (id) => {
        const planet = await this.getResourse(`/planets/${id}/`);
        return this._transformPlanet(planet)
    }

    // корабли
    getAllStarships = async () => {
        const res = await this.getResourse(`/starships/`);
        return res.results.map(this._transformStarship);
    }

    getStarship = async (id) => {
        const starship = await this.getResourse(`/starships/${id}/`);
        return this._transformStarship(starship);
    }

    // // транспортные средства
    // getAllVehicles = async () => {
    //     const res = await this.getResourse(`/vehicles/`);
    //     return res.results;
    // }

    // getVehicle (id) {
    //     return this.getResourse(`/vehicles/${id}/`);
    // }

    // // виды
    // async getAllSpecies () {
    //     const res = await this.getResourse(`/species/`);
    //     return res.results;
    // }

    // getSpecies (id) {
    //     return this.getResourse(`/species/${id}/`);
    // }
    
    // // фильмы
    // async getAllFilms () {
    //     const res = await this.getResourse(`/films/`);
    //     return res.results;
    // }

    // getFilm (id) {
    //     return this.getResourse(`/films/${id}/`);
    // }

    _extractId = (item) => {
        const idRegEx = /\/([0-9]*)\/$/;
        return item.url.match(idRegEx)[1];
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
        }
    }

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        }
    }

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }

}

// const swapi = new SwapiService();

// swapi.getPlanet(2).then(data => console.log(data))


// swapi.getPerson(5).then(p => {
//     console.log(p)
//   // people.forEach((p) => {
//   //   console.log(p.name);
//   // })
// })

//   // swapi.getAllPeople().then(people => {
//   //   console.log(people)
//   //   // people.forEach((p) => {
//   //   //   console.log(p.name);
//   //   // })
//   // })