import React from 'react';

const Input = ({name,label,value,onChange,errors}) => {
    return ( 
        <div id={name}  className="form-group">
                        <label htmlFor={name}>
                            </label>{label}
                            <input type="text" className="form-control" 
                            ref={value}
                            value={value}
                            onChange={onChange}
                            name={name}
                            type='text'
                            />
                            <div className="alert alert-danger"> {errors} </div>
                        </div>
    );
}
 
export default Input;