import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Forum = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch articles from the external database
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/forum');
        const data = await response.json();

        // Provide default values for likes and dislikes
        const updatedArticles = data.map((article) => ({
          ...article,
          likes: article.likes || 0,
          dislikes: article.dislikes || 0,
        }));

        setArticles(updatedArticles);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleLike = (articleId) => {
    const updatedArticles = articles.map((article) => {
      if (article.id === articleId) {
        return {
          ...article,
          likes: article.likes + 1,
        };
      }
      return article;
    });
    setArticles(updatedArticles);
  };

  const handleDislike = (articleId) => {
    const updatedArticles = articles.map((article) => {
      if (article.id === articleId) {
        return {
          ...article,
          dislikes: article.dislikes + 1,
        };
      }
      return article;
    });
    setArticles(updatedArticles);
  };

  const handleNewCommentSubmit = (event, articleId, newComment) => {
    event.preventDefault();
    if (newComment.trim() !== '') {
      const updatedArticles = articles.map((article) => {
        if (article.id === articleId) {
          const comments = article.comments || []; // Handle undefined comments array
          return {
            ...article,
            comments: [...comments, newComment],
          };
        }
        return article;
      });
      setArticles(updatedArticles);
    }
  };

  
  return (
    <div className='forum-section'>
      <h2>Forum Section</h2>
      <Carousel>
        {articles.map((article) => (
          <div key={article.id}>
            <h3>{article.article}</h3>
            <p>{article.content}</p>
            <button onClick={() => handleLike(article.id)}>Like ({article.likes})</button>
            <button onClick={() => handleDislike(article.id)}>Dislike ({article.dislikes})</button>
            <h4>Comments</h4>
            {article.comments && article.comments.length === 0 ? (
              <p>No comments available.</p>
            ) : (
              <p>
                {article.comments && article.comments.map((comment, index) => (
                  <p key={index}>{comment}</p>
                ))}
              </p>
            )}
            <form className='comment-form' onSubmit={(event) => handleNewCommentSubmit(event, article.id, event.target.comment.value)}>
              <input
                type="text"
                placeholder="Write your comment..."
                name="comment"
              />
              <button type="submit">Add Comment</button>
            </form>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Forum;

