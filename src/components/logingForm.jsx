import React from 'react';
import Joi from 'joi-browser'
import Form from './common/form'

class LoginForm extends Form {
    state = { 
        data:{
            username:'',
            password:''
        },
        errors:{}
     }
    //username=React.createRef()

    schema={
        username:Joi.string().required().label('Username'),
        password:Joi.string().required().label('Password'),
    }

    componentDidMount(){
        this.username.current.focus()
    }
    render() { 
        return ( 
        <div>
            <h1>Login</h1>
                <form onSubmit={this.handleSubmit} action="">
                  {this.renderInput('username','Username')}
                  {this.renderInput('password','Password','password')}
                  {this.renderButton('Log in')}
                </form>
        </div>
            
            );
    }
}
 
export default LoginForm;