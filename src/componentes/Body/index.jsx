import styled from 'styled-components'

const BodyEstilizado = styled.p`
    font-size: 1.25em;
    font-family: 'Poppins';
    margin: 0;
    text-align: justify;
    margin-top: 1em;
`

// eslint-disable-next-line react/prop-types
function Body({ children, cor }) {
  return (
    <BodyEstilizado style={{ color: cor }}>{children}</BodyEstilizado>
  )
}

export default Body