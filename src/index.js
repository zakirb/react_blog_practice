import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './Post';
import registerServiceWorker from './registerServiceWorker';

var post = {
  title: "Funny Stuff",
  authors: [
    "Mike Hunt",
    "Johnny Tsunami",
    "Elon Husk"
  ],
  body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  comments: [
    "Great read!",
    "Nice!",
    "Interesting!",
    "Waste of time."
  ]
}

ReactDOM.render(<
  Post
  title={post.title}
  authors={post.authors}
  body={post.body}
  comments={post.comments}
   />, document.getElementById('root'));
registerServiceWorker();
