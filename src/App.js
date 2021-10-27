import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Album from './components/Album';
import Favorites from './components/Favorites';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Profile from './components/Profile';
import ProfileEdit from './components/ProfileEdit';
import Search from './components/Search';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={ Login } />
          <Route exact pat="/search" component={ Search } />
          <Route exact pat="/album/:id" component={ Album } />
          <Route exact pat="/favorites" component={ Favorites } />
          <Route exact pat="/profile" component={ Profile } />
          <Route exact pat="/profile/edit" component={ ProfileEdit } />
          <Route exact pat="*" component={ NotFound } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
