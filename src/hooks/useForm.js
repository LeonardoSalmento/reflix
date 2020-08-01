import { useState } from 'react';

function useForm(initialValues){
    const [values, setValues] = useState(initialValues);
  
    function setValue(key, value){
      setValues({
        ...values,
        [key]: value,}
        )
    }
  
    function handleChange(changes){
      
      setValue(
        changes.target.getAttribute('name'),
        changes.target.value
        );
      }
  
    function clearForm(){
      setValues(initialValues);
    }
    
    return {
      clearForm,
      handleChange,
      values
    };
  
  }

export default useForm;