import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Board from "./components/Board";

export default function Square(props) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: null,
  //   };
  // }

  return (
    <button
      className="square"
      onClick={() =>
        // this.setState({ value: "X" })
        props.onClick()
      }
    >
      {props.value}
    </button>
  );
}

class Game extends React.Component {
  state = {
    moveCount: 0,
    moves: [
      {
        squares: Array(9).fill(null),
      },
    ],
  };

  updateMoveCount = (moveCount) => {
    this.setState({
      moveCount: moveCount,
    });
  };

  updateMoves = (move) => {
    this.setState({
      moves: [...this.state.moves, move],
    });
  };

  handleHistoryClick(position) {
    console.log(this.state.moves[position].squares);
    new Board().handleHistoryClick(this.state.moves[position]["squares"]);
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board
            {...this.state}
            updateMoveCount={this.updateMoveCount}
            updateMoves={this.updateMoves}
          />
        </div>

        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
        <div id="history">
          {[...Array(this.state.moveCount)].map((x, i) => {
            return (
              <button
                key={i}
                onClick={() => {
                  this.handleHistoryClick(i);
                }}
              >
                Go Back to Move # {i}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
