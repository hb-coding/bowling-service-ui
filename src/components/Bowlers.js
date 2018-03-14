import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Hello from './Hello';
import Bowler from './Bowler';
import BowlerDetail from './BowlerDetail';
import axios from 'axios';
import '../style.css';

export default class Bowlers extends React.Component {

  constructor() {
    this.prevCategory = '';
    super();
    this.state = {
      name: 'React',
      count: 0,
      currentBowler: {},
      bowlers: [{
        "id": 123,
        "firstName": "Pete",
        "lastName": "Weber",
        "highScore": 300,
        "average": 200,
        "games": 125
      },
      {
        "id": 123,
        "firstName": "Al",
        "lastName": "Webbs",
        "highScore": 300,
        "average": 200,
        "games": 15
      },
      {
        "id": 123,
        "firstName": "John",
        "lastName": "Weber",
        "highScore": 100,
        "average": 100,
        "games": 25
      },
      {
        "id": 123,
        "firstName": "Peter",
        "lastName": "Weber",
        "highScore": 100,
        "average": 100,
        "games": 225
      }]
    };
  }

  setCurrentBowler = (bowler) => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1').then(res => {
      this.props.history.push({
        pathname: '/detail',
        state: { currentBowler: bowler }
      });
    })
    this.setState({ currentBowler: bowler });
  }

  sortBy(category) {
    let bowlerCollection = this.state.bowlers;

    //Toggle column order if previously selected
    if (this.prevCategory === category) {
      bowlerCollection.reverse();
    }

    else {
      bowlerCollection.sort((a, b) => {
        return a[category] - b[category];
      });
    }

    //Keep track of previous category for toggle functionality
    this.prevCategory = category;
    this.setState({ bowlers: bowlerCollection });
  }

  setActiveHeader(category){
    if(category === this.prevCategory){
      return 'active-header';
    }
    else{
      return 'header-item';
    }
  }

  render() {
    return (
      <div>
        <div className="bowler-header">
          <div className={this.setActiveHeader('name')} onClick={() => this.sortBy('name')}>Name</div>
          <div className={this.setActiveHeader('highScore')} onClick={() => this.sortBy('highScore')}>High Score</div>
          <div className={this.setActiveHeader('average')} onClick={() => this.sortBy('average')}>Average</div>
          <div className={this.setActiveHeader('games')} onClick={() => this.sortBy('games')}>Games Played</div>
        </div>
        <div className="bowler-list">
          <Bowler bowlers={this.state.bowlers} setCurrentBowler={this.setCurrentBowler} count={this.state.count} />
        </div>
      </div>
    );
  }
}