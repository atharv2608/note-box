import React, { useState } from 'react'
import "../styles/Notes.css"

export default function Notes(props) {
    const [isNoteVisible, setIsNoteVisible] = useState(false);
    const onTittleButtonClick = ()=>{
        setIsNoteVisible(!isNoteVisible);
    }
  return (
    <div className='notes'>
        <button className="note-title__display" onClick={onTittleButtonClick}>
            {props.title}
        </button>
        {
            isNoteVisible && 
        <div className="notes-description">
            {props.description}
        </div>
        }
    </div>
  )
}
