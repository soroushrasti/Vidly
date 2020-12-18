import React, { Component } from 'react';
import Joi from 'joi-browser'
import Input from './input'
import Select from './select'

class Form extends Component {
    state = { data:{},
    errors:{}
 }
 validate=()=>{
    const error=Joi.validate(this.state.data, this.schema,{abortEarly:False})
    if (!error) return null;
    const errors ={}
    for (let item of error.details)
    errors[item.path[0]]=item.message;
    return errors;
}
validateProperty=({name,value})=>{
    const obj={[name]:value}
    const schema={[name]:this.schema[name]}
    const errors= Joi.validate(obj,schema);
    if (!errors) return null;
    return errors.details[0].message;
}
doSubmit=()=>{
    console.log('submitted')
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
   const data={...this.state.data}
   data[e.currentTarget.name]=e.currentTarget.value;
   this.setState({data,errors})
}
renderButton=(label)=>{
    return (
        <button disabled={this.validate} className="btn btn-primary">{label}</button>
    )
}
renderInput=(name,label,type='text')=>{
    const {data,errors}=this.state
    return(
        <Input  name={name} 
         value={data[name]} 
         label={label}
          onChange={this.handleChange}
        errors={errors[name]}
        type={type} />
    )
}

renderSelect=(name,label,options)=>{
    const {data,errors}=this.state
    return(
        <Select  name={name} 
         value={data[name]} 
         label={label}
          onChange={this.handleChange}
        errors={errors[name]}
        type={type} />
    );
}

}
 
export default Form;