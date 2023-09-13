import React from 'react'
import "../styles/MyNotes.css"
import Notes from "./Notes"

export default function MyNotes(props) {
  return (
    <div className='my-notes-section'>
        <h2 className='my-notes__title'>Your Notes</h2>

        {props.notesArray.length === 0 ? <p className='empty-message'>No Notes to Display.<br/> Start Adding Notes......</p> : <div className="notes-div">
            {
                props.notesArray.map((note, index)=>(
                    <Notes 
                        key={index}
                        title={note.title}
                        description={note.note}
                    />
                ))
            }
        </div> }

        
    </div>
  )
}
