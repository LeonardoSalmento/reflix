import React from 'react';

function FormField({ name, type, value, onChange, label}){
    return(
        <div>
          <label>
            {label}
            <input
              name={name}
              type={type}
              value={value}
              onChange={onChange}
            />
          </label>
        </div>
    )
};

export default FormField;