import { useTranslation } from "react-i18next"
import Titulo from "../../componentes/Titulo"
import Subtitulo from "../../componentes/Subtitulo"
import Body from "../../componentes/Body"

function Experiencia() {
  const {t} = useTranslation()
  return (
    <>
      <Titulo>{t('experiencia.titulo')}</Titulo>
      <Subtitulo>{t('experiencia.rtenergiaTitulo')}</Subtitulo>
      <Body>{t('experiencia.rtenergiaTexto')}</Body>
      <Subtitulo>{t('experiencia.freelancerTitulo')}</Subtitulo>
      <Body>{t('experiencia.freelancerTexto')}</Body>
    </>
  )
}

export default Experiencia