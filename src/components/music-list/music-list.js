import React from 'react';
// import ArtistPic from './eminem-picture.jpg'
import MusicCard from '../../components/music-cards/music-card'
import './music-list.scss'

function MusicList({info, info_1, info_2, info_3}) {
    return (
        <div className='wrapper'>
            <h1 className='heading'>Results</h1>
            <MusicCard picture={info.artist.picture} title={info.title} name={info.artist.name} duration={info.duration}/>
        </div>
    )
}

export default MusicList