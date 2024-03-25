import React, {Component} from 'react'

class RegularComp extends Component{

    constructor(props){
        super(props)
    }

    render(){
        console.log("Regular Component Render...................")
        return(
            <div>
                <h1>This is a Regular Component {this.props.name}</h1>
            </div>
        )
    }
}

export default RegularComp;