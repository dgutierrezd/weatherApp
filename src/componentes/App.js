import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Error from './Error';
import Clima from './Clima';

class App extends Component {

  state = {
    error: false,
    consulta: {},
    resultado: {}
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.consulta !== this.state.consulta) {
      this.consultarApi();
    }
  }

  consultarApi = () => {
    const {ciudad,pais} = this.state.consulta;
    if(!ciudad || !pais) 
      return null;

    // Leer la URL y agregar el api key  
    const appID = '74ecded46b1d4631950222322182912';
    let url = `https://api.apixu.com/v1/current.json?key=${appID}&q=${ciudad},${pais}`;

    // Query con fetch api
    fetch(url)
      .then(respuesta => {
        return respuesta.json();    
      })
      .then(datos => {
        this.setState({
          resultado: datos
        })
      })
      .catch(error => {
        console.log(error);    
      })

  }

  datosConsulta = respuesta => {
    if(respuesta.ciudad === '' || respuesta.pais === '') {
      this.setState ({
        error: true
      })
    } else {
      this.setState({
        consulta: respuesta,
        error: false
      })
    }
  }

  render() {

    const error = this.state.error;

    let resultado;

    if(error) {
      resultado = <Error mensaje='All fields are required.' />
    } else {
      resultado = <Clima resultado={this.state.resultado}/>  
    }


    return (
      <div className="app">
       <Header />
       <Formulario
        datosConsulta = {this.datosConsulta}
       />
       {resultado}
      </div>
    );
  }
}

export default App;
