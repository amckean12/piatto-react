import React, { Component } from 'react'
import '../form.css'
//Container CSS Section

//End CSS


//Start Component

class LogIn extends Component {
  state={
    email: "",
    password: ""
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    //this.props.loginUser(this.state)
    this.setState({
      email: "",
      password: ""
    })
  }

  render(){
    return(
      <div className="form-container log-in-container">
        <form action="#" onSubmit={(event) => this.handleSubmit(event)}>
          <h1>Sign in</h1>
          <input type="email" placeholder="Email" name="email" onChange={(event) => this.handleChange(event)} value={this.state.email}/>
          <input type="password" placeholder="Password" name="password" onChange={(event) => this.handleChange(event)} value={this.state.password}/>
          <a href="#">Forgot your password?</a>
          <button>Sign In</button>
        </form>
      </div>
    )
  }
}

export default LogIn
