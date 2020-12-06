import React, { Component } from 'react';

class LoginForm extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
            <h1>Log</h1>
                <form action="">
                    <div id='username'  className="form-group">
                        <label htmlFor="username">
                            </label>username<input type="text" className="form-control"/>
                        </div>
                    <div id='Password' className="form-group">
                        <label htmlFor="Password">Password</label>
                    <input type="text" className="form-control"/>
                    </div>
                    <button className="btn btn-primary">Log in</button>
                </form>
        </div>
            
            );
    }
}
 
export default LoginForm;