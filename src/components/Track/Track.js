import React from 'react';
import './Track.css';


function Track(props) {

    return (
        <div className="TrackInnerbox">
            <h3>{props.name}</h3>
            <p>{props.album} | {props.artist}</p>
            <div>
                <button className="button" onClick={props.handleClick}> + </button>
            </div>
        </div>
        
    );
};

export default Track;