import React from "react";
import './random-planet.css';
import SwapiService from "../../services/swapi-services";
import Spinner from "../spinner/Spinner";

export default class RandomPlanet extends React.Component {

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
    }

    constructor() {
        super();
        this.updatePlanet()
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading:false,
        })
    }

    updatePlanet() {
        const id = 12;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
    }

    render() {
        const {planet,loading} = this.state;
        const spinner = loading ? <Spinner /> : null;
        const content = !loading ? <PlanetView planet={planet} /> : null;
        return (
            <div className="random-planet jumbotron rounded">
                {spinner}
                {content}
            </div>
        )
    }
}

const PlanetView = ({planet}) => {
    const {name,population,rotationPeriod,diameter} = planet;
    return (
        <>
            <img className="planet-image"
                 src={`https://starwars-visualguide.com/assets/img/planets/4.jpg`} alt=""/>
            <div>
                <h4>{name}</h4>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <span className='term'>Population</span>
                        <span>{population}</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </>
    )
}