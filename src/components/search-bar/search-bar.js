import React, { Component } from 'react';
import './search-bar.scss'
import { ReactComponent as SearchIcon } from './search.svg'
import MusicCard from '../music-cards/music-card'

const API_KEY = ` d95cb209c9a54fbd9f1f3497752e3b8f&q`

class SearchBar extends Component {
    constructor(){
    super();
    this.state = {
        query: '',
        type: '',
        result_artist: null,
        result_album: null,
        result_track: null

    }
}

    updateQuery = (event) => {
        this.setState({
            query: event.target.value
        })
    
    }

    onselect = ()=>{
        this.setState({type : document.querySelector('selectElement').value})
    }

    onSubmit = ()=>{
        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?apiKey=${API_KEY}=${this.state.query}`,{
            method : 'GET'
        })
        .then(response=>{ 
            console.log(response.json());
            return response.json() 
        })
        .then(data =>{ 
            if (this.state.type === "artist"){
                this.setState ({result_artist : data})
            }
            else if (this.state.type === "album"){
                this.setState({result_album : data})
            }
            else if (this.state.type === "track"){
                this.setState({result_track : data})
            }
        })
    }


    render() {

        if (this.state.result){
            return(
                <div>
                    <div className='search-container'>
                        <SearchIcon className='icon' />
                        <input
                            type='text'
                            placeholder='Search for songs, artists...'
                            onChange = {this.updateQuery}
                        />
                        <select onChange =  {this.onselect} id = "selectElement">
                            <option value = "0">Search By</option>
                            <option value = "artist">Artist</option>
                            <option value = "album">Album</option>
                            <option value = "track">Song</option>
                        </select>
                        <button onClick = {this.onSubmit}>Search</button>
                    </div >
                    <MusicCard info = {this.state.result_artist} info_1 = {this.state.result_album} info_2 = {this.state.result_track}/>
                </div>
            )
        }

        else if(!this.state.result){
            return(
                <div className='search-container'>
                    <SearchIcon className='icon' />
                    <input
                        type='text'
                        placeholder='Search for songs, artists...'
                        onChange = {this.updateQuery}
                    />
                    <select onChange =  {this.onselect} id = "selectElement">
                        <option value = "0">Search By</option>
                        <option value = "artist">Artist</option>
                        <option value = "album">Album</option>
                        <option value = "track">Song</option>
                    </select>
                    <button onClick = {this.onSubmit}>Search</button>
            </div >
            )
        }
    }
}

export default SearchBar