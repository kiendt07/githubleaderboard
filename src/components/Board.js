import React from 'react'
import UserDetail from './UserDetail'

var Bootstrap = require('react-bootstrap');
var Table = Bootstrap.Table;


var Loading = function(props) {
  return (
    <div>
      Loading...
    </div>
  )
}

export default React.createClass({
  render () {
    var i = 0;
    var UsersDetail = this.props.userInfos.map(function(info) {
      return <UserDetail info = {info} id = {++i}/>;
    })
    return (
      this.props.isLoading === true ? <Loading /> :
        <Table striped bordered condensed hover>
          <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Recent points</th>
            <th>All-time points</th>
          </tr>
          </thead>
          <tbody>
          {UsersDetail}
          </tbody>
        </Table>
    )
  }
})
