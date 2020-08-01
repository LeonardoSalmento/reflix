import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriesRepository from '../../repositories/categories'

function Home() {
const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() =>{
    categoriesRepository.getAllWithVideos()
    .then((categoriesVideos) =>{
      console.log(categoriesVideos);
      setDadosIniciais(categoriesVideos);
    })
    .catch((err)=>{
      console.log(err.message);
    });
    
  }, []);
  

  return (
    <PageDefault>

      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[1].title}
                url={dadosIniciais[0].videos[1].url}
                videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

    </PageDefault>
    
  );
}

export default Home;
