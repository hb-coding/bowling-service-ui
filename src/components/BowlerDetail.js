import React, { Component } from 'react';
import axios from 'axios';

export default class BowlerDetail extends Component {
  constructor(props) {
    super(props);
    this.currentBowler = this.props.location.state.currentBowler;

    //HTTP call placeholder, will call 
    axios.get('https://jsonplaceholder.typicode.com/posts/1').then(res => {
      console.log(res);
    });

    state: {
      games: [{
        'id': 4325,
        'date': '01/19/2018',
        'score': 230,
        'age': 27,
        'totalGames': 220,
        'frames': [
          {
            'number': 1,
            'rollOne': 4,
            'rollTwo': 6,

            'type': 'spare'
          },
          {
            'number': 2,
            'rollOne': 10,
            'rollTwo': 0,
            'type': 'strike'
          }
        ]
      },
      {
        'id': 4325,
        'date': '01/19/2018',
        'score': 230,
        'frames': [
          {
            'number': 1,
            'rollOne': 4,
            'rollTwo': 6,
            'type': 'spare'
          },
          {
            'number': 2,
            'rollOne': 10,
            'rollTwo': 0,
            'type': 'strike'
          }
        ]
      },
      {
        'id': 4325,
        'date': '01/19/2018',
        'score': 230,
        'frames': [
          {
            'number': 1,
            'rollOne': 4,
            'rollTwo': 6,
            'type': 'spare'
          },
          {
            'number': 2,
            'rollOne': 10,
            'rollTwo': 0,
            'type': 'strike'
          }
        ]
      }
      ]
    }
  }

  render() {
    return (
      <div>
        <div>{this.currentBowler.firstName}</div>
        <div>{this.currentBowler.lastName}</div>
        <div>{this.currentBowler.highScore}</div>
        <div>{this.currentBowler.average}</div>
      </div>
    );
  }
}