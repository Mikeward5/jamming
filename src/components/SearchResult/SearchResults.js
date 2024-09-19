import React from 'react';
import './SearchResults.css';
import Track from '../Track/Track';

function SearchResults(props) {
    return (
        <>
        <div className='SearchResult'>
            <h1>Search Results</h1>
            {
            props.tracks.map(track => {
            return (
            <Track tracks={track} key={track.id} handleTrackAction={props.addToPlayList} />
            )
            })
        }
        </div>
        </>
    )
};

export default SearchResults;