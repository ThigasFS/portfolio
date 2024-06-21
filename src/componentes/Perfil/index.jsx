import styled from "styled-components";
import foto from './thiago1.png'
import { FaInstagram as Insta, FaGithub as Git, FaLinkedinIn as Linkedin, FaWhatsapp as Wpp } from "react-icons/fa";
import { MdEmail as Email } from "react-icons/md";
import { BsFillTelephoneFill as Tel } from "react-icons/bs";


const ContainerPerfil = styled.div`
    background-color: #95D2B3;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 650px;
    width: 250px;
    padding: 2em;
    border-radius: 2em;
`

const Foto = styled.img`
    height: 250px;
    width: 250px;
    border-radius: 50%;
    margin-bottom: 1em;
`

const ContainerRedes = styled.div`
    display: flex;
    gap: 15px;
    margin-bottom: 2em;
`

const Nome = styled.h1`
    font-family: 'Poppins';
    font-size: 1.5em;
    text-align: center;
    margin: 0;
    margin-bottom: 1em;
`

const Anchor = styled.a`
    color: black;
    transition: 0.3s;
    &:hover{
        color: #D8EFD3;
    }
`

const Contato = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 1em;
    font-family: 'Poppins';
`

function Perfil() {
  return (
    <ContainerPerfil>
        <Foto src={foto} alt="foto" />
        <Nome>Thiago Ferreira</Nome>
        <ContainerRedes>
            <Anchor href="https://www.instagram.com/thigasfs/" target="_blank" aria-label='Vai ao instagram'>
                <Insta size={30} />
            </Anchor>
            <Anchor href="https://github.com/ThigasFS" target="_blank" aria-label='Vai ao github'>
                <Git size={30} />
            </Anchor>
            <Anchor href="https://www.linkedin.com/in/thiago-ferreira-790405196/" target="_blank" aria-label='Vai ao linkedin'>
                <Linkedin size={30} />
            </Anchor>
            <Anchor href="https://api.whatsapp.com/send/?phone=5512991025596&text&type=phone_number&app_absent=0" target="_blank" aria-label='Vai ao whatsapp'>
                <Wpp size={30} />
            </Anchor>
        </ContainerRedes>
        <Contato>
            <Email size={20} />
            thiagoferreira3123@gmail.com
        </Contato>
        <Contato>
            <Tel size={20} />
            (12) 99102-5596
        </Contato>
    </ContainerPerfil>
  )
}

export default Perfil