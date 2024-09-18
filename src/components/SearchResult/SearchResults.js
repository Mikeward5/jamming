import React from 'react';
import './SearchResults.css';
import Track from '../Track/Track';

function SearchResults(props) {
    return (
        <>
        <div className='SearchResult'>
            <h1>Search Results</h1>
            {
            props.tracks.map(array => {
            return (
            <Track name={array.name} album={array.album} artist={array.artist} key={array.id} />
            )
            })
        }
        </div>
        </>
    )
};

export default SearchResults;