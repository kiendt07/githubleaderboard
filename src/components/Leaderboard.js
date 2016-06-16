import React from 'react'
import BoardContainer from './BoardContainer'

var Tab = require('react-bootstrap').Tab;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;

export default React.createClass({
  getInitialState() {
    return {
      sortBy: 'recent'
    }
  },

  onSelect (sortBy) {
    this.setState({
      sortBy: sortBy
    })
  },

  render () {
    return (
      <div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first" onSelect={this.onSelect}>
          <Row className="clearfix">
            <Col sm={2}>
              <Nav bsStyle="pills" stacked>
                <NavItem eventKey="recent">
                  Recent
                </NavItem>
                <NavItem eventKey="alltime">
                  All-time
                </NavItem>
              </Nav>
            </Col>
            <Col sm={10}>
              <BoardContainer sortBy={this.state.sortBy} />
            </Col>
          </Row>
        </Tab.Container>
      </div>
    )
  }
})
