import React from 'react';
// import ArtistPic from './eminem-picture.jpg'
import { ReactComponent as PlayListIcon } from './icons/playlist.svg'
import './music-list.scss'

function MusicList(props) {
    return (
        <div className='wrapper'>
            <h1 className='heading'>Results</h1>
            <div className='container row'>
                <div className='img-and-song row'>
                    <img className='artist-pic' src={props.ArtistPic} alt = "Artist" />
                    <div className='song-info column'>
                        <p className='song-title'>Song title : {props.title}</p>
                        <span className='artist-name'>Artist : {props.artist}</span>
                    </div>
                </div>
                <div className='icon-and-duration row'>
                    <span className='duration'>duration: {props.duration}</span>
                    <PlayListIcon className='playlist' />
                </div>
            </div>
        </div>
    )
}

export default MusicList