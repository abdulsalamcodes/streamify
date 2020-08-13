import React, { Component } from 'react';
import MusicCard from '../../components/music-cards/music-card'
import './music-list.scss'
import AudioPlayer from 'react-audio-player'

class MusicList extends Component {
    state = {
        song: ''
    }

    playSong = (link) => {
        this.setState({
            song: link
        })
    }
    
    render() {
        const { search,
            info, info_1, info_2, info_3
        } = this.props
        return (
            <div className='wrapper'>
                <h1 className='heading'>Results</h1>
                <AudioPlayer
                    // className="mx-auto my-5"
                    src={this.state.song}
                    autoPlay
                    controls
                />
                <ul>
                    {search == [] ? <p>No results for this search</p>
                        : search.map(song => (
                            <MusicCard
                                // picture={info.artist.picture} title={info.title} name={info.artist.name} duration={info.duration}
                                key={song.id}
                                picture={song.artist.picture}
                                title={song.title}
                                name={song.artist.name}
                                duration={song.duration}
                                song={song.preview}
                                handlePlay={() => this.playSong(song.preview)}
                            />
                        ))}
                </ul>
            </div>
        )
    }
}

export default MusicList