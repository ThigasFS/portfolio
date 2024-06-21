import styled from "styled-components";
import BarraHabilidade from "../BarraHabilidade";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right: 550px;
    align-items: center;
    gap: 25px;
    font-family: 'Poppins';
    font-size: 1.5em;
`

// eslint-disable-next-line react/prop-types
function Habilidade({ skill, level }) {
  return (
    <Container>
        {skill}
        <BarraHabilidade level={level} />
    </Container>
  )
}

export default Habilidade