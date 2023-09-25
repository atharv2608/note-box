import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import AddNote from './components/AddNote';
import MyNotes from './components/MyNotes';
import SearchNote from './components/SearchNote';
function App() {
  const [notesArray, setNotesArray] = useState([])

  const addNoteEventHandler = (newNoteData) => {
    setNotesArray((previousNotes) => {
      return [...newNoteData, ...previousNotes]
    })
  }

  const deleteNote = (id)=>{
    setNotesArray(notesArray.filter((note)=>{
      return note.id !== id;
    }))
    
  }
  return (
    <div className='app-container'>
      <Header />
      <AddNote onAddNoteEventHandler={addNoteEventHandler} notesArray={notesArray} />
      <SearchNote />
      <MyNotes notesArray={notesArray} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
