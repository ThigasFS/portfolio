import styled from 'styled-components'

const TituloEstilizado = styled.h1`
    font-size: 32px;
    font-family: 'Poppins';
    margin: 0;
    font-weight: 600;
`

// eslint-disable-next-line react/prop-types
function Titulo({ children }) {
  return (
    <TituloEstilizado>{children}</TituloEstilizado>
  )
}

export default Titulo