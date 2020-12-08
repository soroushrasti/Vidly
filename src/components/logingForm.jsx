import React, { Component } from 'react';

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
                    <div id='username'  className="form-group">
                        <label htmlFor="username">
                            </label>username
                            <input type="text" className="form-control" 
                            ref={this.username}
                            value={this.state.account.username}
                            onChange={this.handleChange}
                            name='username'
                            type='text'
                            />
                        </div>
                    <div id='Password' className="form-group">
                        <label htmlFor="Password">Password</label>
                    <input type="text" 
                    className="form-control" 
                    value={this.state.account.password}
                    onChange={this.handleChange}
                    name='password'
                    type='text'

                     />
                    </div>
                    <button className="btn btn-primary">Log in</button>
                </form>
        </div>
            
            );
    }
}
 
export default LoginForm;