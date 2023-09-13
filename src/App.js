import './App.css';
import Header from './components/Header';
import AddNote from './components/AddNote';
import MyNotes from './components/MyNotes';
import { useState } from 'react';
function App() {
  const [notesArray, setNotesArray] = useState([ ])

  const addNoteEventHandler = (newNoteData) =>{
      setNotesArray((previousNotes) => {
        return [...previousNotes, ...newNoteData]
      })
  }
  return (
    <div>
      <Header />
      <AddNote onAddNoteEventHandler = {addNoteEventHandler}/>
      <MyNotes notesArray={notesArray}/>

    </div>
  );
}

export default App;
