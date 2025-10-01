import "../styles/about.css";
import aboutImage from '../assets/img/about.jpg';
import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation();
    return (
        <div>
            {/* <Header /> */}
            <div className="container">
                <div className="about-text">
                    <div className="title">🧠 {t("About.title")}</div>
                    <div>
                        <p>
                            {t("About.content1")}
                            <br /><br />
                            {t("About.content2")}
                            <br /><br />
                            {t("About.content3")}
                        </p>
                    </div>
                </div>
                <div className="about-image">
                    <img
                        src={aboutImage}
                        alt="About BLOGTECH"
                        className="img-fluid"
                    />
                </div>
            </div>
        </div>
     );
}
 
export default About;