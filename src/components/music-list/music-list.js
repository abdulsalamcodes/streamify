import React, { Component } from 'react';
import MusicCard from '../../components/music-cards/music-card'
import './music-list.scss'
import AudioPlayer from 'react-audio-player'

class MusicList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            song: ''
        }
    }

    playSong = (link) => {
        this.setState({
            song: link
        })
    }

    render() {
        const { search } = this.props
        return (
            <div className='wrapper'>
                <h1 className='heading'>Results</h1>
                <AudioPlayer
                    src={this.state.song}
                    autoPlay
                    controls
                />
                <ul>
                    {search === [] ? <p>No results for this search</p>
                        : search.map(song => (
                            <MusicCard
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