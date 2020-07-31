import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);
  const initialValues = {
    name:'',
    description:'',
    color:''
  }
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


  function handleOnSubmit(infosDoEvento){
    infosDoEvento.preventDefault();
    setCategorias([
      ...categorias, values.name
    ]);
  }


  useEffect(() =>{
    console.log('entrou')
    const URL = 'http://localhost:8080/categorias';

    fetch(URL).then(async (respostaDoServidor) =>{
      const resposta = await respostaDoServidor.json();
      setCategorias([
        ...resposta,
      ]);
    });
  }, [])

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.name} </h1>

      <form onSubmit={handleOnSubmit}>
        
        <FormField
        label= "Nome da categoria"
        name="name"
        type="text"
        value={values.name}
        onChange={handleChange}
        />

        <FormField 
        label= "Descrição"
        name="description"
        type="textarea"
        value={values.description}
        onChange={handleChange}
        />

        <FormField 
        label= "Cor"
        name="color"
        type="color"
        value={values.color}
        onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>


      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.titulo}
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
