import styled from 'styled-components'

const BotaoEstilizado = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  padding-bottom: 5px;
  text-align: center;
  text-decoration: none;
  font-size: 24px;
  border-bottom: 2px solid black;
  cursor: pointer;
  transition: 0.2s;
  font-family: "Poppins";
  &:hover{
    border-color: #D8EFD3;
  }
`

// eslint-disable-next-line react/prop-types
function Botao({ children }) {
  return (
    <BotaoEstilizado>{children}</BotaoEstilizado>
  );
}

export default Botao