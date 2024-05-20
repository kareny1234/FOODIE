import React, { useState, useEffect } from 'react';

const API_KEY = 'YOUR_NEWSAPI_KEY';
const API_URL = `https://newsapi.org/v2/everything?q=Sumatera%20Barat&apiKey=${API_KEY}`;

function NewsList() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                setArticles(data.articles);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching the news:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="news-list">
            {articles.map((article, index) => (
                <div key={index} className="news-item">
                    <h2>{article.title}</h2>
                    <p>{article.description}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                </div>
            ))}
        </div>
    );
}

export default NewsList;
