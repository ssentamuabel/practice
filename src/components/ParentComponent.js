import React, {Component} from 'react'

import ChildComponent from './ChildComponent'


class ParentComponent extends Component{

    constructor(props)
    {
        super(props)

        this.state = {
            message: "the message"
        }

        this.Greetings = this.Greetings.bind(this)
    }


    // Greetings = (child)=>{
    //     alert(`This is ${this.state.message} and the ${child}`)
    // }


     Greetings(childname)
    {
        alert(`${this.state.message} and my name is ${childname}`)
    }

    render(){
        return (
            <>
                <ChildComponent greetHandler={this.Greetings} />
            </>
        )
    }
}



export default ParentComponent