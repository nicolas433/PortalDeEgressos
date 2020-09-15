import styled from 'styled-components';

const Container = styled.div`
color: #222;

h1 {
  margin-bottom: 30px;
}
p {
  border: 1px solid red;
}
p:nth-child(2) {
  border: 1px solid green;
  width: 60%;
}

`;

export default Container;
