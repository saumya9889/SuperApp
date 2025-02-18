import React, { useState, useEffect } from "react";
import axios from "axios";

export const NewsFeed = ({ className}) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("https://newsapi.org/v2/top-headlines", {
          params: {
            country: "us",
            apiKey: "d10a7c7375c945d3a9d26297070c7b44",
          },
        });
        setNews(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <p>Loading news...</p>;
  }

  if (news.length === 0) {
    return <p>No news available at the moment.</p>;
  }

  return (
    <div className={`news-feed ${className}`}>
      {news.map((article, index) => (
        <NewsCard
          key={index}
          image={article.urlToImage}
          title={article.title}
          date={new Date(article.publishedAt).toLocaleString()}
          description={article.description || "No description available."}
        />
      ))}
    </div>
  );
};

const NewsCard = ({ image, title, date, description }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image || "https://via.placeholder.com/400"} alt={title} />
      </div>
      <div className="card-content">
        <div className="card-overlay">
          <h2>{title}</h2>
          <p>{date}</p>
        </div>
        <div className="card-text">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
