import React from 'react';
import './App.css';
import SearchBar from '../SearchBars/SearchBar';
import SearchResults from '../SearchResult/SearchResults';
import PlayList from '../PlayLists/PlayList';

function App() {

  return (
    <>
    <div className="body">
      <h1>Jamming</h1>
    </div>
    <div>
      <SearchBar />
    </div>
    <div className="Seperate">
      <SearchResults />
      <PlayList />
    </div>
    </>
  );
}

export default App;
