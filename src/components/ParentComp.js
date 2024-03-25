import React, {Component, PureComponent} from 'react'
import RegularComp from './RegularComp';
import PureComp from './PureComp';
import MemoComp from './MemoComp';


class ParentComp extends PureComponent{
    constructor(props){
        super(props)

        this.state = {
            name: "Hanifah"
        }
    }

    componentDidMount(){

        setInterval(()=>{
            this.setState({
                name: "Hanifah"
            })
        }, 2000);

    }
    render(){
        console.log("Parent Component Render*********************************************")
        return(
            <div>
               <MemoComp name={this.state.name}/>
                <h2>This is the parent Component</h2>
            </div>
        )
    }
}

export default ParentComp;