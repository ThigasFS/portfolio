import { useTranslation } from 'react-i18next'
import brasil from './brasil.png'
import usa from './usa.png'
import styled from 'styled-components'
import Bandeira from '../Bandeira'
import { useForceRender } from '../../context/globalRender'

const ContainerBandeiras = styled.div`
    display: flex;
    gap: 0.5em;
`

// eslint-disable-next-line react/prop-types
function I18n(){
  const { i18n } = useTranslation()
  const { setForceRender } = useForceRender();
  function handleChangeLanguage(language) {
    i18n.changeLanguage(language).then(() => {
        setForceRender(prev => prev + 1); // Atualizar o estado para forçar a re-renderização
      });
  }
  const selectedLanguage = i18n.language
  return (
    <ContainerBandeiras>
      <Bandeira
        image={brasil}
        isSelected={selectedLanguage === 'pt-BR'}
        onClick={() => handleChangeLanguage('pt-BR')} // Troca o idioma para pt-BR
      />

      <Bandeira
        image={usa}
        isSelected={selectedLanguage === 'en-US'} // Verifica o idioma escolhido
        onClick={() => handleChangeLanguage('en-US')} // Troca o idioma para en-US
      />
    </ContainerBandeiras>
  )
}

export default I18n