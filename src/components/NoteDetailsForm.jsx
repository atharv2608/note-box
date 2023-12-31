import React, { useState } from "react";
import "../styles/NoteDetailsForm.css";

export default function NoteDetailsForm(props) {
  const [noteTitle, setNoteTitle] = useState("");
  const [notekeywords, setNoteKeywords] = useState("");
  const [noteDescription, setNoteDescription] = useState("");
  const [formVisible, setFormVisible] = useState(true);


  function generateNoteID(notesData) {
    let lastID = "NOTE000";

    notesData.forEach((item) => {
        const numericPart = parseInt(item.id.slice(4), 10);
        if (!isNaN(numericPart) && numericPart >= parseInt(lastID.slice(4), 10)) {
            lastID = item.id;
        }
    });

    let numericPart = parseInt(lastID.slice(4), 10) + 1;
    const newId = `NOTE${numericPart.toString().padStart(3, "0")}`;
    return newId;
}


  const notesArray = props.notesArray;
  const id = generateNoteID(notesArray);

  const onTitleChange = (event) => {
    setNoteTitle(event.target.value);
  };
  const onKeywordsChange = (event) => {
    setNoteKeywords(event.target.value);
  };
  const onDescChange = (event) => {
    setNoteDescription(event.target.value);
  };

  const onSubmitClick = (event) => {
    if (noteTitle !== "" || noteDescription !== "") {
      event.preventDefault();
      const newNote = [
        {
          id: id,
          title: noteTitle,
          keywords: notekeywords,
          note: noteDescription,
        },
      ];
      // console.log(newNote);
      props.onAddNoteEventHandler(newNote);
      setNoteTitle("");
      setNoteKeywords("");
      setNoteDescription("");
      props.onBoolChangeHandler(!formVisible);
    }
  };
  return (
    <form className="note-details">
      <label htmlFor="note-title__label">Title:</label>
      <input
        type="text"
        name="note-title"
        id="note-title"
        className="note-title"
        placeholder="Enter Title"
        value={noteTitle}
        onChange={onTitleChange}
        required
      />

      <label htmlFor="note-keywords__label">Keywords (optional)</label>
      <input
        type="text"
        id="note-keywords"
        className="note-keywords"
        placeholder="Enter Keywords"
        value={notekeywords}
        onChange={onKeywordsChange}
      />

      <label htmlFor="note-description__label">Note:</label>
      <textarea
        name="note-description"
        id="note-description"
        className="note-description"
        cols="30"
        rows="5"
        placeholder="Enter your secrets here!"
        value={noteDescription}
        onChange={onDescChange}
      ></textarea>

      <button
        type="submit"
        id="add-note-button"
        className="add-note-button"
        onClick={onSubmitClick}
      >
        Add
      </button>
    </form>
  );
}
