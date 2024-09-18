import React from 'react';
import './SearchResults.css';
import Track from '../Track/Track';

function SearchResults() {
    const array = [{name: 'Aliens Exist', album: 'Anthem', artist: 'blink182', id: 1}, 
        {name: 'ShutUp', album: 'Anthem', artist: 'blink182', id: 2}]
    return (
        <>
        <div className='SearchResult'>
            <h1>Search Results</h1>
            {
            array.map(array => {
            return (
            <Track key={array.id} name={array.name} album={array.album} artist={array.artist}/>
            )
            })
        }
        </div>
        </>
    )
};

export default SearchResults;