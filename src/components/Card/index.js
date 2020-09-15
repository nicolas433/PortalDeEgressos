import styled from 'styled-components';

// mt: margin-top
// ml: maring-left
// ...

const Card = styled.div`
  height: ${({ height }) => height || 'auto'};
  box-sizing: border-box;
  margin-top: ${({ mt }) => mt || '16px'};
  margin-right: ${({ mr }) => mr || '16px'};
  margin-bottom: ${({ mb }) => mb || '16px'};
  margin-left: ${({ ml }) => ml || '16px'};
  padding: 32px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,.1);
`;

export default Card;
