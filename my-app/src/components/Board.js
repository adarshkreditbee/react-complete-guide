import React from "react";
import Square from "../index";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();

    squares[i] = this.state.xIsNext ? "X" : "O";

    this.setState({
      ...this.state,
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });

    this.props.updateMoveCount(this.props.moveCount + 1);
    this.props.updateMoves(squares);
  }

  handleHistoryClick(positionValues) {
    console.log("Board", positionValues);
    console.log("Board", this.state);

    this.setState((prevState) => {
      return {
        ...prevState,
        squares: positionValues,
      };
    });
  }

  renderSquare(i) {
    return (
      <Square
        // Get rid of the index value being used as the key for a component
        key={i}
        value={this.state.squares[i]}
        onClick={() => {
          if (this.state.squares[i] == null) this.handleClick(i);
        }}
      />
    );
  }

  render() {
    const status = "Next player: " + (this.state.xIsNext ? "X" : "O");

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {[...Array(3)].map((x, i) => this.renderSquare(i))}
        </div>
        <div className="board-row">
          {[3, 4, 5].map((x) => this.renderSquare(x))}
        </div>
        <div className="board-row">
          {[6, 7, 8].map((x) => this.renderSquare(x))}
        </div>
      </div>
    );
  }
}

export default Board;
