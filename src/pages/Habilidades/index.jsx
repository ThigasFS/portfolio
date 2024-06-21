import { useTranslation } from "react-i18next"
import Titulo from "../../componentes/Titulo"
import Habilidade from "../../componentes/Habilidade"
import Subtitulo from "../../componentes/Subtitulo"

function Habilidades() {
  const {t} = useTranslation()
  return (
    <>
      <Titulo>{t('habilidades.titulo')}</Titulo>
      <Subtitulo>{t('habilidades.subtitulo')}</Subtitulo>
      <Habilidade skill='C' level='avancado' />
      <Habilidade skill='Java' level='basico' />
      <Habilidade skill='Python' level='intermediario' />
      <Habilidade skill='HTML/CSS' level='avancado' />
      <Habilidade skill='React' level='intermediario' />
      <Subtitulo>{t('habilidades.subtitulo2')}</Subtitulo>
      <Habilidade skill={t('habilidades.ptbr')} level='avancado' />
      <Habilidade skill={t('habilidades.enus')} level='avancado' />
      <Habilidade skill={t('habilidades.itit')} level='basico' />
    </>
  )
}

export default Habilidades