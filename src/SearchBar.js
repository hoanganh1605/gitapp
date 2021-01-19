import React from 'react';

const SearchBar = (props) => {
    return (
        <input type='search'
            className='search'
            placeholder={''}
            onChange={props }
        />
    )
}
export default SearchBar