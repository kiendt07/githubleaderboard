import React from 'react'
import Board from './Board'

var GithubHelper = require('../utils/GithubHelper')

export default React.createClass({
  getInitialState() {
    return {
      isLoading: true,
      UserInfos: []
    }
  },
  componentDidMount() {
    GithubHelper.getTopHundred(this.props.sortBy).then(function(infos){
      this.setState({
        isLoading: false,
        UserInfos: infos
      })
    }.bind(this));
  },

  render () {
    return <div>
      <Board userInfos={this.state.UserInfos} isLoading={this.state.isLoading}/>
    </div>
  }
})
