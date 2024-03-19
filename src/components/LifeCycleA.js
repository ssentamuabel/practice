import React, {Component} from 'react'

import LifeCycleB from './LifeCycleB'




class LifeCycleA extends Component{

    constructor(props){
        super(props)

        this.state = {
            name : "SSentamu"
        }
        console.log("LifeCycleA Constructor")
    }

    static getDerivedStateFromProps(props, state){

        console.log("LifeCycleA getDerivedStateFromProps ")

        return null;
    }

    componentDidMount(){
        console.log("LifeCycleA ComponentDidMount")
    }

    render(){

        console.log("LifeCycleA render")
        return(
            
            <div>
                
                <LifeCycleB/>
            </div>
            
        )       

    }
}

export default LifeCycleA