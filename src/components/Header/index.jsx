import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaSearch,
  FaArrowLeft,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';
import Popup from 'reactjs-popup';
import Card from '../Card';
import Button from '../Form/Button';
import Login from '../Login';
import {
  HeaderContent,
  Links, Search,
  SocialNetworks,
} from './styles';
import Logo from '../../assets/images/logo.svg';

function Header({ isDarkMode = true }) {
  return (
    <HeaderContent DarkMode={isDarkMode}>
      <a className="logo-link" href="/">
        <img src={Logo} alt="Logo" />
      </a>
      <Links>
        <Link to="/">Home</Link>
        <Link to="/noticias">Notícias</Link>
        <Link to="/eventos">Eventos</Link>
        <Link to="/cursos">Cursos</Link>
        <Link to="/">Fale conosco</Link>
      </Links>
      <Search>
        <input />
        <button type="button">
          <FaSearch size={16} color="gray" />
        </button>
      </Search>
      <SocialNetworks>
        <Button
          theme="circular"
          diameter="40px"
        >
          <FaFacebookF size={20} />
        </Button>
        <Button
          theme="circular"
          diameter="40px"
        >
          <FaTwitter size={20} />
        </Button>
        <Button
          theme="circular"
          diameter="40px"
        >
          <FaInstagram size={20} />
        </Button>
      </SocialNetworks>
      <Popup
        trigger={(
          <Button
            theme="secondary"
            justifyContent="center"
            width="90px"
          >
            Login
          </Button>
        )}
        closeOnDocumentClick
        modal
      >
        {(close) => (
          <Card height="100%" ml="0">
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
            <Login />
          </Card>
        )}
      </Popup>
    </HeaderContent>
  );
}

export default Header;
