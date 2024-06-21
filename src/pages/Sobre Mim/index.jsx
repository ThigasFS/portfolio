import Body from '../../componentes/Body'
import Titulo from '../../componentes/Titulo'
import { useTranslation } from 'react-i18next';

function SobreMim() {
  const { t } = useTranslation();
  return (
    <>
      <Titulo> {t('sobremim.titulo')} </Titulo>
      <Body>{t("sobremim.texto")}</Body>
      <Body>{t('sobremim.texto2')}</Body>
      <Body>{t('sobremim.texto3')}</Body>
      <Body>{t('sobremim.texto4')}</Body>
    </>
  )
}

export default SobreMim