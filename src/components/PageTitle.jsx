import React, {Component, Fragment} from 'react';

export default class PageTitle extends Component{

    state = {
        fontSize: this.props.fontSize ? this.props.fontSize : 10
    }; 

    componentDidUpdate(){
        
    }

    render() {
        return (
            <Fragment>
                <input type="number" name="" id="" onChange={event =>{
                    this.setState({fontSize: event.target.value});
                }}/>

                <h1 style={{
                    color: this.props.color,
                    fontSize: `${this.state.fontSize}em`
                }}>{this.props.text}</h1>
            </Fragment>
        );
    }
}