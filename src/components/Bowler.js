import React from 'react';

export default class Bowler extends React.Component{
  constructor(props) {
    super(props)
  }

  navigateToBowler(bowler){
    this.props.setCurrentBowler(bowler);
  }

  render() {
    return this.props.bowlers.map((bowler)=>(
      <div className="bowler-table" onClick={() => this.navigateToBowler(bowler)}>
        <div className="bowler-item">{bowler.firstName} {bowler.lastName}</div>
        <div className="bowler-item">{bowler.highScore}</div>
        <div className="bowler-item">{bowler.average}</div>
        <div className="bowler-item">{bowler.games}</div>
      </div>
    ))
  }
}