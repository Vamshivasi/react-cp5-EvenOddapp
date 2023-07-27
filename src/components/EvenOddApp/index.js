// Write your code here

import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bt-container">
        <h1 className="count-heading">Count {count}</h1>
        <p className="display-heading">Count is {displayText}</p>
        <div>
          <button className="button" type="button" onClick={this.onIncrement}>
            Increment
          </button>
        </div>
        <p>*Increase by random number between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
