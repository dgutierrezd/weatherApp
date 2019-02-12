import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Clima extends Component {

    mostrarResultado = () => {

        // Obtener los datos de la consulta
        const {current, location} = this.props.resultado;

        if(!current || !location) return null;

        const alt = `Weather of ${location.name}`;

        return(
            <div className="row">
                <div className="resultado col s12 m8 l6 offset-m2 offset-l3">
                    <div className="card-panel light-blue align-center">
                        <span className="white-text">
                            <h2>Weather of: {location.name}, {location.region}, {location.country}</h2>
                            <p>{current.condition.text}</p>
                            <p className="temperatura">
                                Temperature: {current.temp_c} &deg;C
                                <img src={current.condition.icon} alt={alt}/>
                            </p>
                            <p>Local time: {location.localtime}</p>
                        </span>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        console.log(this.props.resultado);
        return (
            <div className="container">
               {this.mostrarResultado()}
            </div>
        );
    }
}

Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}

export default Clima;