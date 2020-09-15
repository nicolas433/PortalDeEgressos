import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import MainLayout from '../../layouts/MainLayout';
import Card from '../../components/Card';
import { Container, SearchNews, NewsContainer } from './styles';

function News() {
  const [title, setTitle] = useState('');
  const [course, setCourse] = useState('');

  // Chamada de api aqui //
  function handleSearch(e) {
    e.preventDefault();
    console.log(course);
    console.log(title);
  }

  return (
    <MainLayout>
      <Card>
        <Container>
          <SearchNews>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Título"
            />
            <input
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              type="text"
              placeholder="Curso relacionado"
            />
            <button type="button" onClick={handleSearch}>
              <FaSearch size={25} color="#2f9e41" />
            </button>
          </SearchNews>
          <NewsContainer>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf6By2wSAlzt3btkJKi0SmzypfRY0vMpt_rveeRvDwzoLLmT64pSSlj-esMsIHDAyf2G6m9xQ&s" />
            <div>
              <Link to="/noticia">Título da notícia</Link>
              <div className="sub-title">
                <h4>Subtitulo/curso/blablabla </h4>
                <p>- dd/mm/aa</p>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book....
              </p>
            </div>
          </NewsContainer>
          <NewsContainer>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf6By2wSAlzt3btkJKi0SmzypfRY0vMpt_rveeRvDwzoLLmT64pSSlj-esMsIHDAyf2G6m9xQ&s" />
            <div>
              <Link to="/noticia">Título da notícia</Link>
              <div className="sub-title">
                <h4>Subtitulo/curso/blablabla </h4>
                <p>- dd/mm/aa</p>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book....
              </p>
            </div>
          </NewsContainer>
          <NewsContainer>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf6By2wSAlzt3btkJKi0SmzypfRY0vMpt_rveeRvDwzoLLmT64pSSlj-esMsIHDAyf2G6m9xQ&s" />
            <div>
              <Link to="/noticia">Título da notícia</Link>
              <div className="sub-title">
                <h4>Subtitulo/curso/blablabla </h4>
                <p>- dd/mm/aa</p>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book....
              </p>
            </div>
          </NewsContainer>
          <NewsContainer>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf6By2wSAlzt3btkJKi0SmzypfRY0vMpt_rveeRvDwzoLLmT64pSSlj-esMsIHDAyf2G6m9xQ&s" />
            <div>
              <Link to="/noticia">Título da notícia</Link>
              <div className="sub-title">
                <h4>Subtitulo/curso/blablabla </h4>
                <p>- dd/mm/aa</p>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book....
              </p>
            </div>
          </NewsContainer>
          <NewsContainer>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf6By2wSAlzt3btkJKi0SmzypfRY0vMpt_rveeRvDwzoLLmT64pSSlj-esMsIHDAyf2G6m9xQ&s" />
            <div>
              <Link to="/noticia">Título da notícia</Link>
              <div className="sub-title">
                <h4>Subtitulo/curso/blablabla </h4>
                <p>- dd/mm/aa</p>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book....
              </p>
            </div>
          </NewsContainer>
          <NewsContainer>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf6By2wSAlzt3btkJKi0SmzypfRY0vMpt_rveeRvDwzoLLmT64pSSlj-esMsIHDAyf2G6m9xQ&s" />
            <div>
              <Link to="/noticia">Título da notícia</Link>
              <div className="sub-title">
                <h4>Subtitulo/curso/blablabla </h4>
                <p>- dd/mm/aa</p>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book....
              </p>
            </div>
          </NewsContainer>
        </Container>
      </Card>
    </MainLayout>
  );
}

export default News;
