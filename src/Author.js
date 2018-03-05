import React, {Component} from 'react';

class Author extends Component {
  render() {
    return (
      <h6>Written By: {this.props.name}</h6>
    )
  }
}

export default Author
