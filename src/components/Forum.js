import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


const Forum = () => {
  const [articles, setArticles] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://community-garden-api.onrender.com/forum');
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleLike = async (articleId) => {
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

    try {
      await fetch(`https://community-garden-api.onrender.com/forum/${articleId}/like`, {
        method: 'POST',
      });
    } catch (error) {
      console.error('Error liking article:', error);
    }
  };

  const handleDislike = async (articleId) => {
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

    try {
      await fetch(`https://community-garden-api.onrender.com/forum/${articleId}/dislike`, {
        method: 'POST',
      });
    } catch (error) {
      console.error('Error disliking article:', error);
    }
  };

  const handleNewCommentSubmit = async (event, articleId) => {
    event.preventDefault();
    if (newComment.trim() !== '') {
      try {
        const response = await fetch(`https://community-garden-api.onrender.com/forum/${articleId}/comment`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            comment: newComment,
          }),
        });

        if (response.ok) {
          console.log('Comment saved successfully');
          const updatedArticles = articles.map((article) => {
            if (article.id === articleId) {
              return {
                ...article,
                comments: [...(article.comments || []), newComment],
              };
            }
            return article;
          });
          console.log('Updated articles:', updatedArticles);
          setArticles(updatedArticles);
          setNewComment('');
        } else {
          console.error('Failed to save comment:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error saving comment:', error);
      }
    }
  };

  return (
    <div className='forum-section'>
      <h1>Forum Section</h1>
      <Carousel className='control-arrow'>
        {articles.map((article) => (
          <div className='article-container' key={article.id}>
            <h2>{article.article}</h2><br />
            <p>{article.content}</p><br />
            <button onClick={() => handleLike(article.id)}>Like ({article.likes})</button>
            <button onClick={() => handleDislike(article.id)}>Dislike ({article.dislikes})</button>
            <h4>Comments</h4>
            {article.comments && article.comments.length > 0 ? (
              <ul>
                {article.comments.map((comment, index) => (
                  <li key={index}>{comment}</li>
                ))}
              </ul>
            ) : (
              <p>{article.comment}</p>
            )}
            <form className='comment-form' onSubmit={(event) => handleNewCommentSubmit(event, article.id)}>
              <input
                type='text'
                name='comment'
                placeholder='Add a comment'
                value={newComment}
                onChange={(event) => setNewComment(event.target.value)}
              />
              <button type='submit'>Submit</button>
            </form>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Forum;
