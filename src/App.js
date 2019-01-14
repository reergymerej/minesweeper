import React, { Component } from 'react';
import distribute from './distribute'
import grid from './grid'
import './App.css';

// revealed
const BOMB_DEAD = 'exploded bomb'
const BOMB = 'bomb'
const EMPTY = 'empty'
// 1-8

const UNK = 'unknown'
const FLAG = 'flag'
const MAYBE = '?'
const DEP = 'depressed'

class Cell extends Component {
  classes = {
    [BOMB_DEAD]: 'exploded',
    [BOMB]: 'bomb',
    [EMPTY]: 'empty',
    [UNK]: 'unknown',
    [FLAG]: 'flag',
    [MAYBE]: 'maybe',
    [DEP]: 'depressed',
  }

  render() {
    return (
      <div className={`Cell ${this.classes[this.props.type]}`}>
        { this.props.bomb
          ? 'B'
            : ( this.props.count || '' )
        }
      </div>
    )
  }
}

class Row extends Component {
  render() {
    return (
      <div className="Row">
        { this.props.cells.map(cell => {
          return (
            <Cell
              key={cell.id}
              type={cell}
              bomb={cell.bomb}
              count={cell.count}
            />
          )
        })}
      </div>
    )
  }
}

const getGrid = ({ rowCount, colCount, bombs }) => {
  const cells = (() => {
    let result = []
    const max = rowCount * colCount
    while (result.length < max) {
      result.push({
        id: result.length,
        bomb: false,
        count: 0,
      })
    }

    return distribute(result, bombs, (x) => {
      x.bomb = true
      return x
    })
  })()

  const rows = []

  for (let i = 0; i < rowCount; i++) {
    rows.push(cells.slice(i * colCount, i * colCount + colCount))
  }

  // tally up bombs
  rows.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      const neighbors = grid.neighbors(rows, [colIndex, rowIndex])
      const withBombs = Object.keys(neighbors).reduce((acc, key) => {
        const cell = neighbors[key]
        if (cell && cell.bomb) {
          return acc + 1
        }
        return acc
      }, 0)
      rows[rowIndex][colIndex].count = withBombs
    })
  })

  return rows.map((r, i) => ({
    id: i,
    cells: r,
  }))
}

const gameGrid = getGrid({ rowCount: 7, colCount: 16, bombs: 3 })

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Board">
          { gameGrid.map(row => {
            return (
              <Row key={row.id} cells={row.cells} />
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
