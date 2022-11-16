import React, { useState, useEffect } from "react";

const Table = () => {
  // properties
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:3002/articles")
        .then((response) => {
          return response.json();
        })
        .then((value) => {
          console.log(value);
          setArticles(value);
          setIsLoading(false);
        });
    }, 3000);
  }, []);

  return (
    <div className="container">
      <table className="table table-bordered  table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
          </tr>
        </thead>
        {isLoading && (
          <div>
            <strong>Loading...</strong>
          </div>
        )}
        {articles &&
          articles.map((article) => (
            <tbody>
              <tr key={article.id}>
                <td>{article.id}</td>
                <td>{article.title}</td>
                <td>{article.author}</td>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
};

export default Table;
