import React from "react";

class Post extends React.Component {

  render() {

    return (
      <li key={this.props.key}>{this.props.item}</li>
    );
  }
}

export default Post;