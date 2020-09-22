import React, {Component, Fragment} from 'react';
import axios from 'axios';

export default class AddTaco extends Component{

    state = {
        name: '',
        quantity: 0,
        pica: 'si'
    }

    sendTaco = () =>{
        const {name, quantity, pica} = this.state;
        //console.log({name: name, quantity: quantity, pica: pica});

        axios.post('http://localhost:5000', {name: name, quantity: quantity, pica: pica})
        .then(response => response.data)
        .then(data => window.location.reload());
    }

    catchName = event => this.setState({name: event.target.value});
    catchQuantity = event => this.setState({quantity: event.target.value});
    catchSpacyness = event => this.setState({pica: event.target.value});

    render() {
        return (
            <Fragment>
                <h3>Agregar taco:</h3>
                    <div className='form-group' style={{width: '50%'}}>
                        <span>Nombre del taco:</span>
                        <input onChange={this.catchName} className='form-control' type="text" name="" id="taco-name" placeholder='eje: tu taco'/>
                        <span>Cantidad:</span>
                        <input onChange={this.catchQuantity} className='form-control' type="number" name="" id="taco-quantity" style={{width: '20%'}}/>
                        <span>¿Es picante? (Si/No):</span>
                        <div>
                            <label htmlFor="option-spyciness"></label>
                            <select onChange={this.catchSpacyness} id="option-spyciness" name="option-spyciness" style={{width: '20%'}}>
                                <option value="si">Si</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <br/>
                        <br/>
                        <div>
                            <button onClick={this.sendTaco} className='btn btn-secondary' id="btn-post-taco">Crear taco</button>
                        </div>
                    </div>
            </Fragment>
        );
    }
}