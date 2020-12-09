import React, { Component } from 'react';
import Input from './common/input'
class LoginForm extends Component {
    state = { 
        account:{
            username:'',
            password:''
        },
        errors:''
     }
    username=React.createRef()
    handleSubmit=e=>{
        e.preventDefault()
        const errors=this.validate()
        this.setState({errors: errors || {} })
        if (errors) return;
    }
    handleChange=e=>{
        const errors={...this.state.errors}
        const error_message=this.validateProperty(e.currentTarget)
       const account={...this.state.account}
       account[e.currentTarget.name]=e.currentTarget.value;
       this.setState({account})
    }
    componentDidMount(){
        this.username.current.focus()
    }
    render() { 
        return ( 
        <div>
            <h1>Login</h1>
                <form onSubmit={this.handleSubmit} action="">
                   <Input  name='username' value={this.state.account.username} label='Username' onChange={this.handleChange} />
                   <Input  name='password' value={this.state.account.password} label='Password' onChange={this.handleChange} />
                    <button className="btn btn-primary">Log in</button>
                </form>
        </div>
            
            );
    }
}
 
export default LoginForm;