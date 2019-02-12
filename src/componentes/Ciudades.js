import React,{Component} from 'react';

class Ciudades extends Component {

    paisRef = this.props.paisRef;
    seleccionarCiudades = paisRef => {
        const ciudades = {
            ar: ['Buenos Aires', 'Mendoza', 'La Plata', 'Rosario'],
            br: ['Brasilia','Belo Horizonte', 'Sao Paulo', 'Manaos'],
            co: ['Armenia', 'Bogotá', 'Manizales', 'Medellín'],
            mx: ['Ciudad de Mexico', 'Guadalajara', 'Monterrey', 'Tijuana'],
            es: ['Madrid', 'Barcelona', 'Sevilla', 'Málaga'],
            us: ['New York', 'Washington DC', 'Chicago', 'Los Angeles']
        }
        if(this.paisRef === 'AR') {
            // var opcion1 = ciudades.ar[0];
            // var opcion2 = ciudades.ar[1];
            // var opcion3 = ciudades.ar[2];
            // var opcion4 = ciudades.ar[3];
        }
        if(paisRef === 'BR') {
            
        }
    }

    render() {
        this.seleccionarCiudades(this.paisRef);
        return (
            <div className="input-field col s12 m8 l4 offset-m2">
                <select ref={this.ciudadRef}>
                    <option value="" defaultValue>Choose a city</option>
                    <option value={this.opcion1}>{this.opcion1}</option>
                    <option value="BR">Brazil</option>
                    <option value="CO">Colombia</option>
                    <option value="MX">Mexico</option>
                    <option value="ES">Spain</option>
                    <option value="US">United States</option>
                </select>
                <label>Country:</label>
            </div>
        );
    }
}

export default Ciudades;