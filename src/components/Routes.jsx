import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import TacoList from './TacoList';
import AddTaco from './AddTaco';
import EditTaco from './EditTaco';

export default class Routes extends Component{

    render() {
        return (
            <BrowserRouter>
                <nav className="navbar navbar-dark bg-dark">
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <Link className='nav-link active text-light' to='/'>home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link active text-light' to='/addtaco'>agregar tacos</Link>
                        </li>
                    </ul>
                </nav>
                <br/>
                <Switch>
                    <Route path='/addtaco' component={AddTaco}/>
                    <Route path='/edittaco' component={EditTaco}/>
                    <Route path='/' component={TacoList}/>
                    {/*poner siempre el home al final, porque si no no jala*/}
                </Switch>
            </BrowserRouter>
        );
    }
}