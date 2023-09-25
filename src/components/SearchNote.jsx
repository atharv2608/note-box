import React, {useState} from 'react'
import "../styles/SearchNote.css"

export default function SearchNote() {
    const [searchText, setSearchText] = useState("");
    const onSearchTextChange = (event)=>{
      setSearchText(event.target.value)
    }
  return (
    <div className='search-container'>
        <input type="text" className='search-text' 
            placeholder='Search Your Notes Here.....'
            value={searchText}
            onChange={onSearchTextChange}

        />
    </div>
  )
}
