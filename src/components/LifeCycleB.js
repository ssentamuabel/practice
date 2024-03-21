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

    shouldComponentUpdate(){
        console.log("LifeCycleB shoulComponentUpdate");
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifeCycleB getSnapShotBeforeUpdate");
        return null;
    }
    componentDidUpdate(){
        console.log("LifeCycleB componentDidUpdate")
    }


    render(){

        console.log("LifeCycleB render")
        return(
            
            <div>Hello LifeCycleB</div>
        )       

    }
}

export default LifeCycleB