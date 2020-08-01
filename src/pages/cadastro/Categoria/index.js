import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';


function CadastroCategoria() {
  const initialValues = {
    title:'',
    description:'',
    color:''
  }

  const {handleChange, values, clearForm} = useForm(initialValues);

  const [categorias, setCategorias] = useState([]);


  function handleOnSubmit(infosDoEvento){
    infosDoEvento.preventDefault();
    setCategorias([
      ...categorias, values.title
    ]);

    clearForm(initialValues);
  }


  useEffect(() =>{
    const URL = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080/categorias'
    : 'https://reflix-imersao.herokuapp.com/categorias';

    fetch(URL).then(async (respostaDoServidor) =>{
      const resposta = await respostaDoServidor.json();
      setCategorias([
        ...resposta,
      ]);
    });
  }, [])

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.title} </h1>

      <form onSubmit={handleOnSubmit}>
        
        <FormField
        label= "Nome da categoria"
        name="title"
        type="text"
        value={values.title}
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
              {categoria.title}
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
