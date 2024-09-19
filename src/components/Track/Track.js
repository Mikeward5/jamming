import React from 'react';
import './Track.css';


function Track(props) {

    return (
        <div className="TrackInnerbox">
            <h3>{props.tracks.name}</h3>
            <p>{props.tracks.album} | {props.tracks.artist}</p>
            <div>
                <button className="button" onClick={()=> props.handleTrackAction(props.tracks)}> + </button>
            </div>
        </div>
        
    );
};

export default Track;