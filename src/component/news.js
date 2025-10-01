import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const News = () => {
    const [news, setNews] = useState([]);
    const navigate = useNavigate();
    const { t } = useTranslation();

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BASE_URL}/news`);
                const data = await response.json();
                setNews(data);
            } catch (error) {
                console.error("Error fetching news:", error);
            }
        };
        fetchNews();
    },[])

    return ( 
        <div className="newsArea">
            <h2 className="newsMainTitle font-bold mb-4">{t('News.news')}</h2>
            <div className="newsBox">
                {news && news.length > 0 ? (
                    news.map((item, index) => (
                        <div key={index} className="newsshape" style={{ backgroundImage: `url(${item.image})` }} onClick={() => window.open(item.url, "_blank")}>
                            <div className="newsOverlay">
                                <div className="newsContent">
                                    <div className="newsSource">{item.source}</div>
                                    <div className="newsTitle" dangerouslySetInnerHTML={{ __html: item.title }}></div>
                                </div>
                                <div className="newsFooter">
                                    <p className="newsPublishedAt">{new Date(item.publishedAt).toLocaleString()}</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No news available.</p>
                )}
            </div>
        </div>
    );
}

export default News;