import React, { Component } from 'react';
import './search-bar.scss'
import { ReactComponent as SearchIcon } from './search.svg'
import MusicList from '../music-list/music-list'

const API_KEY = `d95cb209c9a54fbd9f1f3497752e3b8f`

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            query: '',
            type: '',
            searchResults: [],
        }
    }

    updateQuery = (event) => {
        this.setState({
            query: event.target.value
        })
    }

    onselect = (e) => {
        const { value } = e.target;
        this.setState({ type: value })
    }

    onSubmit = () => {
        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/?q=${this.state.type}:${this.state.query}&apiKey=${API_KEY}`, {
            method: 'GET'
        })
<<<<<<< HEAD
        .then(response=>{ 
            return response.json() 
        })
        .then(data =>{ 
            let searches = data.data;
            searches.map(datas => {
                this.setState({
                    _id: data.id
                })
                if (this.state.type === "artist"){
                    this.setState ({result_artist: datas.artist.name})
                    return datas.artist;
                }
                else if (this.state.type === "album"){
                    this.setState({result_album: datas.album})
                }
                else if (this.state.type === "track"){
                    this.setState({result_track: datas.album})
                }
=======
            .then(response => {
                return response.json()
            })
            .then(jsonResponse => {
                console.log(jsonResponse)
                this.setState({
                    searchResults: jsonResponse.data
                }, () => console.log(this.state.searchResults)
                )
>>>>>>> 5be9478230719ceb889b388c3f33df35d635a518
            })
    }
    render() {
        return (
            <div>
                <div className='search-container'>
                    <SearchIcon className='icon' />
                    <input
                        type='text'
                        placeholder='Search for songs, artists...'
                        onChange={this.updateQuery}
                    />
                    <select onChange={this.onselect} id="selectElement">
                        <option value="0">Search By</option>
                        <option value="artist">Artist</option>
                        <option value="album">Album</option>
                        <option value="track">Song</option>
                    </select>
                    <button onClick={this.onSubmit}>Search</button>
                </div >
                <MusicList
                    search={this.state.searchResults}
                />
            </div>
        )
    }
}

export default SearchBar