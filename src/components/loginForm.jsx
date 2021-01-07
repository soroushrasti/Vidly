import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import {login} from '../services/loginServices'

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = async () => {
     try{
       const {data}=this.state
       const {data:jwt}= await login(data.username,data.password)
       localStorage.setItem('token',jwt)
       window.location='/'
       }
     catch(exp){
      if(exp.response && exp.response.status===400)
      {
        const errors={...this.state.errors}
        errors.username=exp.response.data
        this.setState({errors})
      }
     }
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
