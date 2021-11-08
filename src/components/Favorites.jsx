import React from 'react';
import Header from './Header';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from './Loading';
import MusicCard from './MusicCard';

class Favorites extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      favorites: [],
      checker: true,
    };
  }

  componentDidMount() {
    this.fetchFavorites();
  }

  componentDidUpdate() {
    getFavoriteSongs();
  }

  fetchFavorites = async () => {
    this.setState({ loading: true });
    const getFavorites = await getFavoriteSongs();
    this.setState({
      favorites: getFavorites,
      loading: false });
  }

  render() {
    const { loading, favorites, checker } = this.state;
    return (
      <div data-testid="page-favorites">
        {loading && <Loading />}
        <Header />
        <MusicCard getAll={ favorites } checker={ checker } />
      </div>
    );
  }
}

export default Favorites;
