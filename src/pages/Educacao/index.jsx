import Titulo from "../../componentes/Titulo"
import Subtitulo from "../../componentes/Subtitulo"
import Body from "../../componentes/Body"
import { useTranslation } from "react-i18next"


function Educacao() {
  const {t} = useTranslation()
  return (
    <>
        <Titulo>{t('educacao.titulo')}</Titulo>
        <Subtitulo>{t('educacao.subtitulo')}</Subtitulo>
        <Body><strong>{t('educacao.eniacTitulo')}</strong>{t('educacao.eniacTexto')}</Body>
        <Body><strong>{t('educacao.saojoaquimTitulo')}</strong>{t('educacao.saojoaquimTexto')}</Body>
        <Subtitulo>{t('educacao.subtitulo2')}</Subtitulo>
        <Body><strong>{t('educacao.unisalTitulo')}</strong>{t('educacao.unisalTexto')}</Body>
    </>
  )
}

export default Educacao