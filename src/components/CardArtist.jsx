import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CardArtist extends React.Component {
  render() {
    const { bandName, bandInfo } = this.props;
    return (
      <div>
        <p>
          {`Resultado de álbuns de: ${bandName}`}
        </p>
        {bandInfo.map(({ collectionId, artworkUrl100, collectionName, artistName }) => (
          <div key={ collectionId }>
            <Link
              to={ `/album/${collectionId}` }
              data-testid={ `link-to-album-${collectionId}` }
            >
              Link para o album
            </Link>
            <img src={ artworkUrl100 } alt="Album Cover" />
            <p>{ collectionName }</p>
            <p>{ artistName }</p>
          </div>
        ))}
      </div>
    );
  }
}

CardArtist.propTypes = {
  bandInfo: PropTypes.array,
}.isRequired;

export default CardArtist;
