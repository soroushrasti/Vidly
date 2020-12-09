import React from 'react';

const Input = ({name,label,value,onChange}) => {
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
                        </div>
    );
}
 
export default Input;