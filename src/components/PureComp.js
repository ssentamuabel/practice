import React, {PureComponent} from 'react'

class PureComp extends PureComponent{
    constructor(props){
        super(props)


    }
    render(){
        console.log("Pure Component Render .....................................")
        return(
            <div>
                <h1>Pure Component {this.props.name}</h1>
            </div>
        )

    }
}

export default PureComp;