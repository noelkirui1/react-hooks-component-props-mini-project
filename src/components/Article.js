import React from "react";
function Article ({ title, date="January 1, 1970", preview }) {
    // Formatting date or using default value if date is not provided
   
    return (
      <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
      </article>
    );
  };
  
  export default Article;