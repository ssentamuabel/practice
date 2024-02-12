import React, {Component} from 'react'

class Counter extends Component{

    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }


    increment()
    {
        this.setState((previousState)=>({count : previousState.count + 1}))
    }


    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render(){
        return (
            <>

            <h2>Count: {this.state.count}</h2>
            <button onClick={()=>this.incrementFive()}>Increment</button>

            
            </>
        )
    }
}

export default Counter;