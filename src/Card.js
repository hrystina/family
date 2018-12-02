import React, { Component } from 'react';



class Card extends Component {
  render() {
    return (
      <div className="Card">
        <h2>{this.props.title}</h2>
        <img className="card-img" src={this.props.image} />
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default Card;
