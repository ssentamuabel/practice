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


    ChangeState =()=>{
        this.setState({
            name: "Yusuf"
        })
    }

    static getDerivedStateFromProps(props, state){

        console.log("LifeCycleA getDerivedStateFromProps ")

        return null;
    }

    componentDidMount(){
        console.log("LifeCycleA ComponentDidMount")
        return true;
    }
    shouldComponentUpdate(){
        console.log("LifeCycleA shoulComponentUpdate");
        return null;
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifeCycleA getSnapShotBeforeUpdate");
    }
    componentDidUpdate(){
        console.log("LifeCycleA componentDidUpdate")
    }


    render(){

        console.log("LifeCycleA render")
        return(
            
            <div>
                <h1>Hello this is LifeCycle A</h1>
                <LifeCycleB/>
                <button onClick={this.ChangeState}>ChangeState</button>
            </div>
            
        )       

    }
}

export default LifeCycleA