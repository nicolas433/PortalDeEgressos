import styled from 'styled-components';

// Caso necessário, adicione novos temas na lista
const buttonThemes = {
  primary: {
    background: '#2f9e41',
    color: '#fff',
    border: 'none',
    hoverColor: '#2f9e41',
  },
  secondary: {
    background: '#fff',
    color: '#2f9e41',
    border: '1px solid #2f9e41',
    hoverColor: '#fafafa',
  },
  link: {
    background: 'none',
    color: '#2f9e41',
    border: 'none',
    hoverColor: 'none',
  },
  circular: {
    background: '#fff',
    color: '#2f9e41',
    border: '1px solid #2f9e41',
    hoverColor: '#fafafa',
    borderRadius: '50%',
  },
};

export const Button = styled.button`
  height: ${({ diameter }) => (diameter || '')};
  width: ${({ width, diameter }) => (diameter || width || '100%')};
  border: ${({ theme }) => buttonThemes[theme].border};
  background: ${({ theme }) => buttonThemes[theme].background};
  color:${({ theme }) => buttonThemes[theme].color};
  cursor: pointer;
  padding: 8px 12px;
  border-radius: ${({ theme }) => (buttonThemes[theme].borderRadius ? buttonThemes[theme].borderRadius : '4px')};
  font-size: 16px;
  font-weight: bold;
  transition: background .5s;
  margin-top: ${({ mt }) => mt || '0px'};
  margin-right: ${({ mr }) => mr || '0px'};
  margin-bottom: ${({ mb }) => mb || '0px'};
  margin-left: ${({ ml }) => ml || '0px'};

  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: center;

  :hover {
    background: ${({ theme }) => buttonThemes[theme].hoverColor};
    transition: background .2s;
  }
`;

export const Anchor = styled.a`
  width: ${({ width }) => width || '100%'};
  color:${({ theme }) => buttonThemes[theme].color};
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  transition: color .5s;
  margin-top: ${({ mt }) => mt || '0px'};
  margin-right: ${({ mr }) => mr || '0px'};
  margin-bottom: ${({ mb }) => mb || '0px'};
  margin-left: ${({ ml }) => ml || '0px'};

  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: center;

  :hover {
    color: ${({ theme }) => buttonThemes[theme].hoverColor};
    transition: color .2s;
  }
`;

export const ReactRouterLink = styled.div`
  width: ${({ width }) => width || '100%'};
  a {
    box-sizing: border-box;
    border: ${({ theme }) => buttonThemes[theme].border};
    background: ${({ theme }) => buttonThemes[theme].background};
    color:${({ theme }) => buttonThemes[theme].color};
    cursor: pointer;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    transition: background .5s;
    margin-top: ${({ mt }) => mt || '0px'};
    margin-right: ${({ mr }) => mr || '0px'};
    margin-bottom: ${({ mb }) => mb || '0px'};
    margin-left: ${({ ml }) => ml || '0px'};

    display: flex;
    justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
    align-items: center;

    :hover {
      background: ${({ theme }) => buttonThemes[theme].hoverColor};
      transition: background .2s;
    }
  }
`;
