import styled from 'styled-components';

export const Label = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  width: 100%;
  margin-top: 4px;
  border: 1px solid gray;
  padding: 8px 12px;
  font-size: 16px;
  color: #171718;
  border-radius: 4px;

  :focus {
    border: 1px solid #2f9e41;
    box-shadow: 0px 0px 4px #2f9e4155;
  }
`;
