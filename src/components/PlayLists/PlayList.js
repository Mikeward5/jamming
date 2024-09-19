import React from 'react';
import './PlayList.css';
import Track from '../Track/Track';

function PlayList(props) {
    return (
        <>
        <div className='PlayList'>
            <h1>PlayList</h1>
            {
             props.tracks.map(track => {
             return (
                <Track tracks={track} key={track.id} handleTrackAction={props.removeFromPlayList}/> 
             )
            })      
}
        </div>
        </>
    )
};

export default PlayList;