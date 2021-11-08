import React from 'react';
import PropTypes, { objectOf } from 'prop-types';
import Loading from './Loading';
import { addSong, removeSong } from '../services/favoriteSongsAPI';

class MusicCard extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false,
    };
  }

  handleChange = async (event, music) => {
    if (event.target.checked) {
      this.setState({ loading: true });
      await addSong(music);
      this.setState({ loading: false });
    } else {
      this.setState({ loading: true });
      await removeSong(music);
      this.setState({ loading: false });
    }
  };

  render() {
    const { getAll } = this.props;
    const { loading } = this.state;
    const allLista = [...getAll];
    allLista.shift();
    return (
      <div>
        {loading && <Loading />}
        {allLista.map((music) => (
          <div key={ music.trackId }>
            <p>{music.trackName}</p>
            <audio data-testid="audio-component" src={ music.previewUrl } controls>
              <track kind="captions" />
              O seu navegador não suporta o elemento
              <code>audio</code>
            </audio>
            <label htmlFor={ music.trackId }>
              Favorita
              <input
                data-testid={ `checkbox-music-${music.trackId}` }
                type="checkbox"
                id={ music.trackId }
                onChange={ (event) => this.handleChange(event, music) }
              />
            </label>
          </div>
        ))}
      </div>
    );
  }
}

MusicCard.propTypes = {
  getAll: PropTypes.arrayOf(
    objectOf({
      previewUrl: PropTypes.string,
      trackName: PropTypes.string,
      trackId: PropTypes.string,
    }),
  ).isRequired,
};

export default MusicCard;
