import React, {Component } from 'react'


class Welcome extends Component {
    render(){
        return <h1> Welcome Class,  {this.props.firstname} and {this.props.secondname} </h1>
    }
        
 
}

export default Welcome