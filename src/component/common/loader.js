import { useTranslation } from "react-i18next";
const Loader = () => (
    const { t } = useTranslation();
    <div className="loaderContainer">
        <div className="spinner"></div>
        <span>{t('Common.loading')}</span>
    </div>
);

export default Loader;
