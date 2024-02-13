import React, {Component} from 'react'


class ClassClick extends Component{


    clickHandler()
    {
        console.log("The ClassClick compoenent is clicked")
    }

    render(){     

        return(
            <>
            <button onClick={this.clickHandler}>Click Class </button>
            </>
        )
    }
}

export default ClassClick;