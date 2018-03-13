import React, { Component } from 'react';
import '../Post.css';
import Comment from './Comment';
import Author from './Author';


class Post extends Component {
  constructor(props) {
    super()
    this.state = {
      body: props.body
    }
    this.handleChange = this.handleChange.bind(this);
  }

  changeBodyPrompt(e) {
    let newBody = prompt("What is the body?")
    this.setState({
      body: newBody
    })
  }

  changeBody(e) {
    this.setState({
      body: this.state.value
    })
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    })
  }

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
        <p>{this.state.body}</p>
        <button onClick={ (e) => this.changeBodyPrompt(e)}>Edit Body</button>
        <input type="text" value={this.state.value} onChange={this.handleChange}  />
        <button onClick={ (e) => this.changeBody(e)}>Post</button>
        <h3>Comments:</h3>
        {allComments}
      </div>
    );
  }
}

export default Post;
