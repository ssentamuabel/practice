import React, {Component} from 'react'

class Form extends Component{

    constructor(props){
        super(props)

        this.state={
            username: '',
            message: '',
            topic: ''
        }
    }

    handleChange = (event)=>{
        this.setState(
            {username: event.target.value}
        )
    }


    handleMessageChange = (event)=>{
        this.setState({
            message:event.target.value
        })
    }

    handleTopicChange = (event)=>{
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event)=>{
        alert(`${this.state.username} ${this.state.message} ${this.state.topic}`)
        event.preventDefault();
    }


    render(){
        return(
           <form onSubmit={this.handleSubmit}>
                <div>
                    <label for="username" >Username</label>
                    <input 
                     type="text" 
                     name="username"  
                     value={this.state.username}
                     onChange={this.handleChange}
                      />
                </div>
                <div>
                    <label>Message</label>
                    <textarea
                        name="message"
                        value={this.state.message}
                        onChange={this.handleMessageChange}
                    ></textarea>
                </div>
                <div>
                    <label>options</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
           </form>
        )
    }
}


export default Form