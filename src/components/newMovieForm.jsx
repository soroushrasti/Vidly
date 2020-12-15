import React from 'react';
import Form from './common/form'
import Joi from 'joi-browser'


class NewMovieForm extends Form {
    state = { 
        data:{
            title:'',
            genre:'',
            numberOfStuck:'',
            rate:'',

        },
        errors:{}
     }
     schema={
        title:Joi.string().required().label('Title'),
        genre:Joi.string().required().list().label('Genre'),
        numberOfStuck:Joi.string().required().label('Number in Stock'),
        rate:Joi.string().required().list().label('Rate')

    }

    doSubmit=()=>{
        console.log('submitted')
    }
    render() { 
        return ( 
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit} action="">
                  {this.renderInput('title','Title')}
                  {this.renderInput('genre','Genre')}
                  {this.renderInput('numberOfStuck','Number in Stock')}
                  {this.renderInput('rate','Rate')}
                  {this.renderButton('Save')}
                </form>
            </div>
         );
    }
}
 
export default NewMovieForm;