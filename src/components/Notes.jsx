import React, { useState } from "react";
import "../styles/Notes.css";

export default function Notes(props) {
  const [isNoteVisible, setIsNoteVisible] = useState(false);
  const onTittleButtonClick = () => {
    setIsNoteVisible(!isNoteVisible);
  };

  const onDeleteButtonClick = () => {
    props.deleteNote(props.id);
  };
  return (
    <div className="notes">
      <div className="title-container">
        <button className="note-title__display" onClick={onTittleButtonClick}>
          {props.title}
        </button>
        <div className="trash-button" onClick={onDeleteButtonClick}>
          <i className="fa-solid fa-trash fa-2xl"></i>
        </div>
      </div>

      {isNoteVisible && (
        <div className="notes-description">
          <div className="note-id">{`ID: #${props.id}`}</div>
          {props.description}
        </div>
      )}
    </div>
  );
}
