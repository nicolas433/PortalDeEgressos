import React from 'react';
// import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import MainLayout from '../../layouts/MainLayout';
import Card from '../../components/Card';
import Button from '../../components/Form/Button';
import { Container } from './styles';

function News() {
  return (
    <MainLayout>
      <Card>
        <Container>
          <Button
            theme="circular"
            diameter="40px"
            onClick={() => {
              // eslint-disable-next-line no-restricted-globals
              close();
            }}
          >
            <FaArrowLeft size={16} />
          </Button>
          <h1>Título da notícia</h1>
          <h4>
            Por <a>Quem Postou</a>
          </h4>
          <h5>
            Postado em dd/mm/aa
          </h5>
          <img src="https://opetroleo.com.br/wp-content/uploads/2019/12/Airswift-com-vaga-de-Operador-de-guindaste-offshore.jpg" />
          <h6>referência da imagem</h6>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur? Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.
          </p>
        </Container>
      </Card>
    </MainLayout>
  );
}

export default News;
