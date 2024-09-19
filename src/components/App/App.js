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
  
},
{
  name: 'Shutup', 
  album: 'Anthem', 
  artist: 'blink182', 
  
},
];

function App() {

  const [search, setSearchInput] = useState('');
  if(search === '') {
  setSearchInput(musicArray)
  }

  
  const [playList, setPlayList] = useState([]);

  function addToPlayList(track) {
    setPlayList((oldItem) => {
      if(oldItem.includes(track)) {
        return oldItem;
      } else {
        return [...oldItem, track];
      }
    });
  }

  function removeFromPlayList(track) {
    setPlayList((oldItem) => oldItem.filter(t => t !== track))
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
      <SearchResults tracks={search} addToPlayList={addToPlayList} />

      <PlayList tracks={playList} removeFromPlayList={removeFromPlayList}/>
     
    </div>
    </>
  );
}

export default App;
