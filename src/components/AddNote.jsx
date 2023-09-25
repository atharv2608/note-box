import React, { useState } from "react";
import NoteDetailsForm from "./NoteDetailsForm";
import "../styles/AddNote.css";

export default function (props) {
  const [formVisible, setFormVisible] = useState(false);
  const onAddNoteEventHandler = props.onAddNoteEventHandler;
  const notesArray = props.notesArray;

  const onAddNewClick = () => {
    setFormVisible(!formVisible);
  };

  const onBoolChangeHandler = (bool) =>{
    setFormVisible(bool);
  }
  return (
    <div className="add-note-section">
      <button className="add-new-button" onClick={onAddNewClick}>
        {formVisible ? "Cancel" : "Add New"}
      </button>
      {formVisible && <NoteDetailsForm onAddNoteEventHandler={onAddNoteEventHandler} onBoolChangeHandler={onBoolChangeHandler} notesArray={notesArray} />}
    </div>
  );
}
