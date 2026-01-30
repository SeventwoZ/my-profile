import React, { Component } from 'react';

class Projectcard extends Component {
  render() {
    return (
        <div className="Projectcard">
          <img src={this.props.image} alt={`${this.props.title} logo`} className="icon" />
          <div className="compdet">
            <h2>{this.props.title}</h2>
            <h3 className="secondtext project-role">{this.props.role}</h3>
            <p className="project-desc">{this.props.desc}</p>
          </div>
        </div>
    );
  }
}

export default Projectcard;
