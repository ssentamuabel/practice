import React, {Component } from 'react'


class Welcome extends Component {
    render(){
        const {firstname, secondname}= this.props;
        return <h1> Welcome Class,  {firstname} and {secondname} </h1>
    }
        
 
}

export default Welcome