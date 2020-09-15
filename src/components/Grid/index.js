import styled from 'styled-components';

// fluid: ocupa 100% do espaço horizontal disponível
// padding: Se settado, aplica um padding css

export const Container = styled.div`
  width: 100%;
  max-width: ${(props) => (props.fluid ? 'auto' : '1366px')};
  box-sizing: border-box;
  padding: ${(props) => (props.padding ? props.padding : '0px')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Row = styled.div`
  width: 100%;
  heigth: auto;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
  flex-wrap: wrap;
`;

function getColumnWidth(value) {
  if (!value) return false;

  const width = (value / 12) * 100;
  return `width: ${width}%;`;
}

export const Column = styled.div`
  box-sizing: border-box;

  @media only screen and (max-width: 768px) {
    ${({ mobile }) => mobile && getColumnWidth(mobile)}
  }

  @media only screen and (min-width: 768px) {
    ${({ tablet }) => tablet && getColumnWidth(tablet)}
  }

  @media only screen and (min-width: 1000px) {
    ${({ desktop }) => desktop && getColumnWidth(desktop)}
  }
`;
