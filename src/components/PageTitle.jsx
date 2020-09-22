import React, {Component, Fragment} from 'react';

export default class PageTitle extends Component{

    state = {
        fontSize: this.props.fontSize ? this.props.fontSize : 10
    }; 

    render() {
        return (
            <Fragment>
                <h1 style={{
                    color: this.props.color,
                    fontSize: `${this.state.fontSize}em`
                }}>{this.props.text}</h1>
            </Fragment>
        );
    }
}