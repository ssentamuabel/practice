import React, {Component} from 'react'

class EventBind extends Component{
    constructor(props){
        super(props)

        this.state = {
            message: "Welcome Customer"
        }

        //  this is applied for the second option
        //  the binding is done in the constructor straight
        // this.clickHandler = this.clickHandler.bind(this)
    }


    // this is for both the first and second option
    clickHandler()
    {
        this.setState({
            message:"Goodbye customer"
        })
    }

    // clickHandler = ()=>{
        
    //     this.setState({
    //         message:"Goodbye customer"
    //     })
    // }
    render(){
        return(
            <>
                <h3>{this.state.message}</h3>
                {/* <button onClick={this.clickHandler.bind(this)}>Click Here</button> */}
                {/* <button onClick={this.clickHandler}>Click Here</button> */}
                {/* <button onClick={this.clickHandler}>Click Here</button> */}
                <button onClick={()=> this.clickHandler()}>Click Here</button>
            </>
        )
    }
}


export default EventBind