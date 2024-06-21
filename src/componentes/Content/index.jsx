import { Link, Outlet } from "react-router-dom"
import styled from "styled-components"
import Botao from "../Botao"
import I18n from "../i18n"
import { t } from "i18next"
import { useForceRender } from "../../context/globalRender"

const ContentContainer = styled.div`
    background-color: #95D2B3;
    width: 1000px;
    padding: 2em;
    border-radius: 2em;
`
const ContainerHeader = styled.div`
    display: flex;
    gap: 3em;
    margin-bottom: 2em;
    align-items: center;
    justify-content: space-between;
`

const ContainerBtns = styled.div`
    display: flex;
    gap: 3em;
`

function Content() {
  // eslint-disable-next-line no-unused-vars
  const { forceRender } = useForceRender()
  return (
    <ContentContainer>
        <ContainerHeader>
            <ContainerBtns>
                <Link to='/sobre-mim'>
                    <Botao>{t('botoes.sobremim')}</Botao>
                </Link>
                <Link to='/educacao'>
                    <Botao>{t('botoes.educacao')}</Botao>
                </Link>
                <Link to='/experiencia'>
                    <Botao>{t('botoes.experiencia')}</Botao>
                </Link>
                <Link to='/habilidades'>
                    <Botao>{t('botoes.habilidades')}</Botao>
                </Link>
            </ContainerBtns>
            <I18n />
        </ContainerHeader>
        <Outlet />
    </ContentContainer>
  )
}

export default Content