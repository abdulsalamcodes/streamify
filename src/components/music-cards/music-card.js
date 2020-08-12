import React from 'react';
import { ReactComponent as PlayListIcon } from './icons/playlist.svg'
import './music-card.scss'

const MusicCard = (props) =>{
    return(
        <div className="card">
            <div className='container row'>
                <div className='img-and-song row'>
                    <img className='artist-pic' src={props.picture} alt = "Artist" />
                    <div className='song-info column'>
                        <p className='song-title'>Song title : {props.title}</p>
                        <span className='artist-name'>Artist : {props.name}</span>
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

export default MusicCard
