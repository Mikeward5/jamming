import React from 'react';
import './Track.css';


function Track(props) {
    return (
        <div className="TrackInnerbox">
            <h3>{props.name}</h3>
            <p>{props.album} | {props.artist}</p>
        </div>
    );
};

export default Track;