import React, { Component } from 'react';
import './search-bar.scss'
import { ReactComponent as SearchIcon } from './search.svg'

class SearchBar extends Component {
    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState({
            query: query.trim()
        })

    }

    render() {
        return (
            <div className='search-container'>
                <SearchIcon className='icon' />
                <input
                    type='text'
                    placeholder='Search for songs, artists...'
                    // value={this.state.query}
                />
            </div >
        )
    }
}

export default SearchBar