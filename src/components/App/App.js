import React, {useState} from 'react';
import './App.css';
import SearchBar from '../SearchBars/SearchBar';
import SearchResults from '../SearchResult/SearchResults';
import PlayList from '../PlayLists/PlayList';

const musicArray = [
  {
  name: 'Aliens Exist', 
  album: 'Anthem', 
  artist: 'blink182', 
  id: 1,
},
{
  name: 'Shutup', 
  album: 'Anthem', 
  artist: 'blink182', 
  id: 2,
},
];

function App() {

  const [search, setSearchInput] = useState('');
  if(search === '') {
  setSearchInput(musicArray)
  }

  return (
    <>
    <div className="body">
      <h1>Jamming</h1>
    </div>
    <div>
      <SearchBar />
    </div>
    <div className="Seperate">
      <SearchResults tracks={search} />

      <PlayList />
     
    </div>
    </>
  );
}

export default App;
