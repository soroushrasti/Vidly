import React, { Component } from 'react';
import Input from './common/input'
class LoginForm extends Component {
    state = { 
        account:{
            username:'',
            password:''
        },
        errors:{}
     }
    username=React.createRef()

    validate=()=>{
        const errors={};
        if(this.state.account.username.trim()==='')
        errors.username='username is required'
        if(this.state.account.password.trim()==='')
        errors.username='password is required'
    }
    handleSubmit=e=>{
        e.preventDefault()
        const errors=this.validate()
        this.setState({errors: errors || {} })
        if (errors) return;
    }
    handleChange=e=>{
        const errors={...this.state.errors}
        const errorMessage=this.validateProperty(e.currentTarget)
        if (errorMessage) errors[e.currentTarget]=errorMessage
        else delete errors[e.currentTarget]
       const account={...this.state.account}
       account[e.currentTarget.name]=e.currentTarget.value;
       this.setState({account,errors})
    }
    validateProperty=input=>{
        if (input.name==='username'){
            if (input.value.trim()==='') return 'username required'
        }
        if (input.name==='password'){
            if (input.value.trim()==='') return 'password required'
        }
    }
    componentDidMount(){
        this.username.current.focus()
    }
    render() { 
        return ( 
        <div>
            <h1>Login</h1>
                <form onSubmit={this.handleSubmit} action="">
                   <Input  name='username'  value={this.state.account.username} label='Username' onChange={this.handleChange}
                   errors={this.state.errors.username} />
                   <Input  name='password' value={this.state.account.password} label='Password' onChange={this.handleChange} 
                   errors={this.state.errors.password}/>
                    <button className="btn btn-primary">Log in</button>
                </form>
        </div>
            
            );
    }
}
 
export default LoginForm;