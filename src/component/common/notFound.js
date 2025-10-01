// import '../styles/style.css';
import { useTranslation } from 'react-i18next';


const NotFound = () => {
  const { t } = useTranslation();
  return (
    <>
    <div>{t('Common.notFound')}</div>
    </>
  );
};

export default NotFound;
