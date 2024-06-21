import styled from 'styled-components'

const SubtituloEstilizado = styled.h2`
    font-size: 24px;
    font-family: 'Poppins';
    margin: 0;
    margin-top: 1em;
    font-weight: 600;
`

// eslint-disable-next-line react/prop-types
function Subtitulo({ children }) {
  return (
    <SubtituloEstilizado>{children}</SubtituloEstilizado>
  )
}

export default Subtitulo