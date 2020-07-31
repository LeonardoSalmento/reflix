import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState(['Teste']);
  const initialValues = {
    name:'asd',
    description:'ddd',
    color:'#000'
  }
  const [values, setValues] = useState(initialValues);

  function setValue(key, value){
    setValues({
      ...values,
      [key]: value,}
      )
  }

  function handleChange(changes){
    const { getAttribute, value } = changes.target;
    setValue(
      getAttribute('name'),
      value
      )
    }


  function handleOnSubmit(infosDoEvento){
    infosDoEvento.preventDefault();
    console.log('asd');
    setCategorias([
      ...categorias, values.name
    ]);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.name} </h1>

      <form onSubmit={handleOnSubmit}>
        
        <FormField
        label= "Nome da categoria: "
        name="name"
        type="text"
        value={values.name}
        onChange={handleChange}
        />

        <FormField 
        label= "Descrição: "
        name="description"
        type="textarea"
        value={values.description}
        onChange={handleChange}
        />

        <FormField 
        label= "Cor: "
        name="color"
        type="color"
        value={values.color}
        onChange={handleChange}
        />

        <button>
          Cadastrar
        </button>
      </form>


      <ul>
        {categorias.map((categoria, indice)=>{
          return(
          <li key={categoria+indice}>
            {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
          Ir para home
      </Link>
    </PageDefault>
    
  );
}

export default CadastroCategoria;
