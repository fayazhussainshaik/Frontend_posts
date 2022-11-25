import React from "react";
import "./user.css";

const User = ({ id, title, body, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="list">
      <span id="title">{title}</span>
      <span id="body">{body} </span>
      <span>
        <button class="btn">edit</button>
        <button class="btn" onClick={handleDelete}>
          delete
        </button>
      </span>
    </div>
  );
};

export default User;
