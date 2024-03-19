import React, {Component} from 'react'


class LifeCycleB extends Component{

    constructor(props){
        super(props)

        this.state = {
            name : "SSentamu"
        }
        console.log("LifeCycleB Constructor")
    }

    static getDerivedStateFromProps(props, state){

        console.log("LifeCycleB getDerivedStateFromProps ")

        return null;
    }

    componentDidMount(){
        console.log("LifeCycleB ComponentDidMount")
    }

    render(){

        console.log("LifeCycleB render")
        return(
            
            <div>Hello LifeCycleA</div>
        )       

    }
}

export default LifeCycleB