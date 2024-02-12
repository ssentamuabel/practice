import React, {Component} from 'react'

class Message extends Component{

    constructor(props)
    {
        super(props)
        this.state = {
            message: "Welcome Messahe"
        }
    }


    changeMessage(){
        this.setState({
            message: "Thanks for Visiting"
        })
    }


    render(){
        return (
            <>
                <h2>{this.state.message}</h2>
                <button onClick={()=>this.changeMessage()}>Click</button>
            </>
        )
    }
}


export default Message;