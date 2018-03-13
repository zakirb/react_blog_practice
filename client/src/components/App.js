import React, { Component } from 'react';
import Post from './Post';
import Home from './Home';
import About from './About';
import FavMovie from './FavMovie';
import FavFood from './FavFood';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    const {title, authors, body, comments} = this.props

    return (
      <Router>
        <div>
          <nav>
            <Link to='/'>Home</Link>{' '}
            <Link to='/About'> About</Link>{' '}
            <Link to='/Posts'>Main Blog</Link>{' '}
            <Link to='/FavoriteFood'>Favorite Food</Link>{' '}
            <Link to='/FavoriteMovie'>Favorite Movie</Link>{' '}
          </nav>
          <Route exact path='/' component={Home} />
          <Route path='/About' component={About} />
          <Route path='/Posts' component={ () => <Post title={title} authors={authors} body={body} comments={comments} /> } />
          <Route path='/FavoriteFood' component={FavFood} />
          <Route path='/FavoriteMovie' component={FavMovie} />
        </div>
      </Router>
    );
  }
}

export default App;
