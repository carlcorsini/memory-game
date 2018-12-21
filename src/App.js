import React, { Component } from 'react'

import Board from './components/Board'

class App extends Component {
  state = { match: [], success: [], nameWin: '', failed: [] }

  isMatch = name => {
    this.setState({ match: this.state.match.concat(name) }, () => {
      if (
        this.state.match.length === 2 &&
        this.state.match[0] === this.state.match[1]
      ) {
        this.setState({
          failed: [],
          success: this.state.success.concat(name),
          nameWin: name,
          match: [],
        })
      } else {
        this.setState({ match: [], failed: this.state.failed.concat(name) })
      }
    })
  }
  render() {
    console.log(this.state)
    return (
      <div>
        {this.state.success === true ? <div>nice</div> : null}
        <Board
          failed={this.state.failed}
          match={this.state.match}
          nameWin={this.state.nameWin}
          success={this.state.success}
          isMatch={this.isMatch}
        />
      </div>
    )
  }
}

export default App
