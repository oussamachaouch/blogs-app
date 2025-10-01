import FormGroup from 'react-bootstrap/esm/FormGroup';
import Header from '../partials/header';
import { useEffect, useState } from 'react';
// REACT BOOTSTRAP COMPONENTS
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// BOOTSTRAP LIBRARY
import "bootstrap/dist/css/bootstrap.min.css";
// OTHERS
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import subscriptionImage from '../assets/img/subscription.jpg';
import { useTranslation } from "react-i18next";

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const baseURL = process.env.REACT_APP_BASE_URL;
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!email || email === '') newErrors.email = t('Newsletter.emailEmpty');
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = t('Newsletter.emailInvalid');
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    try {
      await axios.post(`${baseURL}/newsletter/subscribe`, { email });
      navigate("/", { replace: true });
    } catch (err) {
      setErrors({ email: err.response?.data || t('Newsletter.emailExist') });
    }
  };
  
  return (
    <div className="newsletter">
      {/* <Header /> */}
      <h1 className='text-4xl font-bold mb-4'>{t('Newsletter.title')}</h1>
      <div className='newsletterImageContainer'><img className='newsletterImage' src={subscriptionImage} alt="image"/></div>
      <Form className='newsletterForm'>
        <FormGroup controlId="formEmail" className='formEmail'>
          <Form.Control
            type="text"
            value={email}
            placeholder={t('Newsletter.enterYourEmail')}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </FormGroup>
        <div className="buttonSC">
            <Button onClick={handleSubmit} className="subscribeButton" variant="primary" type="submit">
              {t('Newsletter.submit')}
            </Button>
        </div>
      </Form>
    </div>
  );
}

export default Newsletter;