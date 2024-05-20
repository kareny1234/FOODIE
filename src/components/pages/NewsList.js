import React, { useState, useEffect } from 'react';

function NewsList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=id&category=general&apiKey=YOUR_NEWS_API_KEY')
      .then(response => response.json())
      .then(data => setArticles(data.articles));
  }, []);

  return (
    <div className="news-list">
      <h1>Berita Lokal</h1>
      {articles.map((article, index) => (
        <div key={index} className="news-item">
          <h2>{article.title}</h2>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
}

export default NewsList;
