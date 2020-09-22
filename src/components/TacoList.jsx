import React, {Component, Fragment} from 'react';
import axios from 'axios';

export default class TacoList extends Component{

    state = {
        tacos: [],
        currentTaco: {}
    }

    tacoClick = id =>{
        console.log(id);
        axios.get(`http://localhost:5000/${id}`)
        .then(reponse => reponse.data)
        .then(taco => this.setState({currentTaco: taco}));
    }

    componentDidMount(){
        axios.get('http://localhost:5000')
        .then(reponse => reponse.data)
        .then(tacos => {
            this.setState({tacos: tacos.map(taco =>{
                return <li className='list-group-item' key={taco.id} onClick={()=>this.tacoClick(taco.id)}>
                            Nombre del taco: {taco.name}
                        </li>
            })})
        });
    }

    render() {

        const {name, quantity, pica} = this.state.currentTaco;
        return (
            <Fragment>
                <div className="card" style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">La orden viene con {quantity} tacos y {pica} pica.</p>
                    </div>
                </div>
                <ul className='list-group'>
                    {this.state.tacos}
                </ul>
            </Fragment>
        );
    }
}