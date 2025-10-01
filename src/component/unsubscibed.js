import { useEffect } from 'react';
import unsubscribedImage from '../assets/img/unsubscribed.jpg';
import { useParams } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const Unsubscribed = () => {
const { token } = useParams();
const { t } = useTranslation();
useEffect(async () => {
    try {
        await fetch(`${process.env.REACT_APP_BASE_URL}/newsletter/unsubscribe/${token}`, {
            method: 'GET',
        });
    } catch (error) {
        console.error('Error during unsubscription:', error);
    }
}, [token]);

  return (
    <div className="newsletter">   
        <h1 className="text-4xl font-bold mb-4">{t('Unsubscribed.title')}</h1>
        <div className='newsletterImageContainer'><img className='unsubscribedImage' src={unsubscribedImage} alt="image"/></div>
        <p className="text-lg text-gray-700">{t('Unsubscribed.content')}</p>
    </div>
    );
};
export default Unsubscribed;