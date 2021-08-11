import React, { Component } from "react";
import ScoreHandle from "./ScoreHandle";

const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;

class Game extends Component {
  state = {
    numQuestions: 0,
    numCorrect: 0,
  };
  onUserClick() {
    this.setState((currState) => {
      numQuestions: currState.numQuestions + 1;
    });
  }
  render() {
    return (
      <div className="game">
        <h2>Mental Math</h2>
        <div className="equation">
          <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
        </div>

        <button onClick={this.onUserClick}>True</button>
        <button>False</button>
        <ScoreHandle
          solvedNum={this.state.numCorrect}
          questionNum={this.state.numQuestions}
        />
      </div>
    );
  }
}

export default Game;
