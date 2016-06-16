import React from 'react'
var Image = require('react-bootstrap').Image;
var userImgStyle = {
  maxWidth:'40px',
  height: '40px',
  display: 'inline'
}

export default React.createClass({
  render () {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>
          <a href={'https://www.freecodecamp.com/' + this.props.info.username} target="_blank">
            <Image rounded src={this.props.info.img} className="img-responsive" style={userImgStyle} />
            {this.props.info.username}
          </a>
        </td>
        <td>{this.props.info.recent}</td>
        <td>{this.props.info.alltime}</td>
      </tr>
    )
  }
})
