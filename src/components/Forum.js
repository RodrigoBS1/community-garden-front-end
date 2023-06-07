import img1 from "../images/cg1.jpeg"
import img2 from "../images/cg2.jpeg"
import img3 from "../images/cg3.jpeg"
import img4 from "../images/cg4.jpeg"
import React, { useState } from "react";

const Forum = () => {
  const [articles, setArticles] = useState([
    {
      id: 1,
      img: img1,
      title: "Article 1",
      text: "This is the content of article 1.",
      likes: 0,
      dislikes: 0,
      comments: [],
    },
    {
      id: 2,
      img: img2,
      title: "Article 2",
      text: "This is the content of article 2.",
      likes: 0,
      dislikes: 0,
      comments: [],
    },
    {
      id: 3,
      img: img3,
      title: "Article 3",
      text: "This is the content of article 3.",
      likes: 0,
      dislikes: 0,
      comments: [],
    },
    {
      id: 4,
      title: "Article 4",
      img: img4,
      text: "This is the content of article 4.",
      likes: 0,
      dislikes: 0,
      comments: [],
    },
  ]);

  const [newComment, setNewComment] = useState("");

  const handleNewCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleNewCommentSubmit = (event, articleId) => {
    event.preventDefault();
    if (newComment.trim() !== "") {
      const updatedArticles = articles.map((article) => {
        if (article.id === articleId) {
          return {
            ...article,
            comments: [...article.comments, newComment],
          };
        }
        return article;
      });
      setArticles(updatedArticles);
      setNewComment("");
    }
  };

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

  const toggleContent = (articleId) => {
    const updatedArticles = articles.map((article) => {
      if (article.id === articleId) {
        return {
          ...article,
          showContent: !article.showContent,
        };
      }
      return article;
    });
    setArticles(updatedArticles);
  };

  return (
    <div>
        <h2>Forum Section</h2>
    <div className='forum-section'>
      
      {articles.map((article) => (
        <div key={article.id}>
          <h3>{article.title}</h3>
          <img src={article.img} alt={article.title} className='images-article'/>
          <p>{article.showContent ? article.text : 'Content hidden'}</p>
          <button onClick={() => toggleContent(article.id)}>
            {article.showContent ? 'Hide Content' : 'Show Content'}
          </button>
          <button onClick={() => handleLike(article.id)}>
            Like ({article.likes})
          </button>
          <button onClick={() => handleDislike(article.id)}>
            Dislike ({article.dislikes})
          </button>
          <h4>Comments</h4>
          {article.comments.length === 0 ? (
            <p>No comments available.</p>
          ) : (
            <ul>
              {article.comments.map((comment, index) => (
                <li key={index}>{comment}</li>
              ))}
            </ul>
          )}
          <form onSubmit={(event) => handleNewCommentSubmit(event, article.id)}>
            <input
              type="text"
              value={newComment}
              onChange={handleNewCommentChange}
              placeholder="Write your comment..."
            />
            <button type="submit">Add Comment</button>
          </form>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Forum;
