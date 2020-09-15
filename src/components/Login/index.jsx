import React from 'react';

import Input from '../Form/Input';
import Button from '../Form/Button';

import { Container, Row, Column } from '../Grid';

function Login() {
  return (
    <div className="login">
      <h1 className="text-center">Login</h1>
      <Input
        type="email"
        label="Email:"
        placeholder="Digite seu email..."
        id="login-email"
      />
      <Input
        type="password"
        label="Senha:"
        placeholder="Digite sua senha..."
        id="login-password"
      />
      <Button
        to="/recuperar-senha"
        theme="link"
        mb="16px"
      >
        Esqueci minha senha
      </Button>
      <Button
        theme="primary"
        justifyContent="center"
        mb="32px"
      >
        Enviar
      </Button>
      <Container>
        <Row alignItems="center">
          <Column desktop="6" tablet="6" mobile="6">Não está cadastrado?</Column>
          <Column desktop="6" tablet="6" mobile="6">
            <Button
              theme="secondary"
              justifyContent="center"
            >
              Cadastre-se
            </Button>
          </Column>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
