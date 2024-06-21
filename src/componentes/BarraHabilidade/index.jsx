import styled from "styled-components"

const BarraAvancada = styled.div`
    width: 200px;
    height: 10px;
    background: #55AD9B;
`

const BarraIntermediaria = styled.div`
    width: 200px;
    height: 10px;
    background: linear-gradient(90deg, #55AD9B 65%, #D8EFD3 65%);
`

const BarraBasica = styled.div`
    width: 200px;
    height: 10px;
    background: linear-gradient(90deg, #55AD9B 30%, #D8EFD3 30%);
`

// eslint-disable-next-line react/prop-types
function BarraHabilidade({ level }) {
  if(level === 'avancado'){
    return <BarraAvancada />
  }else if(level === 'intermediario'){
    return <BarraIntermediaria />
  }else if(level === 'basico'){
    return <BarraBasica />
  }
}

export default BarraHabilidade