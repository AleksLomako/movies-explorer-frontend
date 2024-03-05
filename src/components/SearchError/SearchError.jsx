import React from 'react';
import './SearchError.css';

function SearchError({ errorText }) {
    return <span className="search-error">{errorText}</span>;
}

export default SearchError;