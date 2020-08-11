import React, { Component } from 'react';
import './search.scss'
import MusicList from '../../components/music-list/music-list';
import SearchBar from '../../components/search-bar/search-bar';

class SearchPage extends Component {
    
    
    render(){
        return (
            <div className='search'>
                <SearchBar />
                <MusicList />
            </div>
        )
    }
}

export default SearchPage