import React from 'react';
import './SearchBar.css';

function SearchBar() {
    return (
        <form >
            <input type="text" id="input" className="inputField"/>
            <br />
            <button type="submit">Submit</button>
        </form>
    )
};

export default SearchBar;