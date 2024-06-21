import styled from "styled-components"

const BandeiraSelecionda = styled.img`
    cursor: pointer;
    opacity: 1;
`

const BandeiraNaoSelecionda = styled.img`
    opacity: 0.5;
    cursor: pointer;
`

// eslint-disable-next-line react/prop-types
function Bandeira({ image, isSelected, ...props}){
    return(
        isSelected 
        ? <BandeiraSelecionda alt="bandeira" src={image} {...props} /> 
        : <BandeiraNaoSelecionda alt="bandeira" src={image} {...props} />
    )
}

export default Bandeira