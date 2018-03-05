import React, { Component } from 'react';
import './Post.css';
import Comment from './Comment';
import Author from './Author';

class Post extends Component {
  render() {

    const {title, authors, body, comments} = this.props

    let allAuthors = authors.map(function(author, index) {
      return (
        <Author name={author} key={index} />
      )
    })

    let allComments = comments.map(function(comment, index) {
      return (
        <Comment text={comment} key={index} />
      )
    })

    return (
      <div>
        <h1>{title}</h1>
        {allAuthors}
        <p>{body}</p>
        <h3>Comments:</h3>
        {allComments}
      </div>
    );
  }
}

export default Post;
