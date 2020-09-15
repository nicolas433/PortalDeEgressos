import React from 'react';
import { Container, Row, Column } from '../../components/Grid';
import Header from '../../components/Header';

// import MainLayoutContainer from './styles';

function MainLayout({ children }) {
  return (
    <Container fluid>
      <Row>
        <Column desktop="12" tablet="12" mobile="12">
          <Header />
        </Column>
      </Row>
      <Row>
        <Container>
          <Row>
            <Column desktop="8" tablet="8" mobile="8">
              {children}
            </Column>
            <Column desktop="4" tablet="4" mobile="4" />
          </Row>
        </Container>
      </Row>
    </Container>
  );
}

export default MainLayout;
