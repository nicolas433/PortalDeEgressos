import styled from 'styled-components';

export const HeaderContent = styled.header`
  background-color: #EEE;
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,.1);

  a.logo-link {
    height: 90%;
    display: inline-block;
    margin-right: 25px;
  }

  img {
    height: 90%;
    // filter: grayscale(100%);
    margin-left: 25px;
    margin-top: 5px;
    transition: 0.4s;
    cursor: pointer;
  }
  img:hover{
    filter: grayscale(0%);
  }
`;

export const Links = styled.div`
a {
  color: #121212;
  font-size: 18px;
  margin: 13px;
  cursor: pointer;
  margin-right: 15px;
  text-decoration: none;
}
`;

export const Search = styled.div`
height: 30px;
display: flex;
justify-content: center;
align-items: center;
input{
  margin: 10px;
  height: 100%;
  width: 200px;
  border-radius: 4px;
  border: 1px solid gray;
}
button{
  border: none;
  background-color: none;
  cursor: pointer;
}

`;

export const SocialNetworks = styled.div`
heith 30px;
display: flex;
justify-content: space-between;
width: 10%;
`;
