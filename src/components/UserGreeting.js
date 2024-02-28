import React , {Component} from 'react'


class UserGreeting extends Component{



    constructor(props){

        super(props)

        this.state ={
            isLoggedIn: false
        }
    }

    render(){

        return this.state.isLoggedIn && <div>Welcome Ssentamu Abel Yusuf</div>

        // return this.state.isLoggedIn ? (<div>Welcome SSentamu Abel</div>) : (<div>Welcome Our Guest</div>)



        // let message;

        // if (this.state.isLoggedIn)
        // {
        //     message = <div>Welcome Ssentamu Abel</div>
        // }
        // else{
        //     message = <div>Welcome Our Guest</div>
        // }

        // return(
        //     <div>{message}</div>
        // )

        // if (this.state.isLoggedIn)
        // {
        //     return(
        //         <div>Welcome Ssentamu Abel Yusuf</div>
        //     )
        // }
        // else{
        //     return(
        //         <div> Welcome our Guest  </div>
        //     )
           
        // }

        // return(
        //     <div>
        //         Welcome Yusuf Ssentamu
        //     </div>
        // )
    }
}


export default UserGreeting