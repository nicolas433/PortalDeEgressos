import styled from 'styled-components';

export const Container = styled.div`
`;
export const SearchNews = styled.div`
heigth: 150px;
width: 100%;
display: flex;
justify-content: space-between;
border-bottom: 2px solid rgba(47, 158, 65, 0.4);
padding-bottom: 20px;
margin-bottom: 20px;

button {
  border: none;
  cursor: pointer;
}
input {
  heigth: 60px;
  width: 300px;
  border: 1px solid #2f9e41;
  border-radius: 3px;
  color: gray;
  font-size: 16px;
  padding-left: 5px;
}
`;
export const NewsContainer = styled.div`
display: flex;
font-size: 14px;
border-bottom: 2px solid rgba(47, 158, 65, 0.2);
padding-bottom: 20px;
margin-bottom: 20px;

a {
  font-size: 16px;
  text-decoration: none;
}
img {
  heigth: 110px;
  width: 110px;
  margin-right: 10px;
}
div {
  display: flex;
  flex-direction: column;
}

div p {
  font-size: 13px;
}

div div {
  color: red;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
}
div div h4 {
  color: #2f9e41;
  font-weigth: bold;
  margin-right: 5px;
}
div div p {
  color: gray;
  font-weigth: bold;
}
`;
