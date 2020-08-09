import React, { Component} from 'react';
import ArtistPic from './eminem-picture.jpg'
import { ReactComponent as PlayListIcon } from './icons/playlist.svg'
import './music-list.scss'

function MusicList() {
    return (
        <div className='wrapper'>
            <h1 className='heading'>Results</h1>
            <div className='container row'>
                <div className='img-and-song row'>
                    <img className='artist-pic' src={ArtistPic} />
                    <div className='song-info column'>
                        <p className='song-title'>Song title</p>
                        <span className='artist-name'>Artist name</span>
                    </div>
                </div>
                <div className='icon-and-duration row'>
                    <span className='duration'>4:20</span>
                    <PlayListIcon className='playlist' />
                </div>
            </div>
        </div>
    )
}

export default MusicList