import React,{Component} from 'react';
// import Ciudades from './Ciudades';
import PropTypes from 'prop-types';

class Formulario extends Component {

    // Crear los Refs
    ciudadRef = React.createRef();
    paisRef = React.createRef();

    buscarClima = e => {
        e.preventDefault();

        // Leer los Refs y crear el objeto 
        const respuesta = {
            pais: this.paisRef.current.value,
            ciudad: this.ciudadRef.current.value
        }

        // Enviar por props
        this.props.datosConsulta(respuesta);

        // Resetear el formulario (opc)
    }

    render() {
        return (
            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <form onSubmit={this.buscarClima}>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <select ref={this.paisRef}>
                                    <option value="" defaultValue>Choose a country</option>
                                    <option value="AR">Argentina</option>
                                    <option value="BR">Brazil</option>
                                    <option value="CO">Colombia</option>
                                    <option value="MX">Mexico</option>
                                    <option value="ES">Spain</option>
                                    <option value="US">United States</option>
                                </select>
                                <label>Country:</label>
                            </div>
                            {/* <Ciudades/> */}
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <input ref={this.ciudadRef} type="text" />
                                <label>City:</label>
                            </div>
                            
                            <div className="input-field col s12 m8 l4 offset-2 buscador">
                                <input type="submit" className="waves-effect waves-light btn-large green accent-20" value="Search"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

Formulario.propTypes = {
    datosConsulta: PropTypes.func.isRequired
}

export default Formulario;