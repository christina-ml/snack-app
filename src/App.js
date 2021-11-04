import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      snackCount: 0,
    }
  }

  giveSnack = () => {
    this.setState({
      snackCount: this.state.snackCount + 1
    })
  }

  render() {
    return (
    <div className="App">Snack App goes here!
      <button onClick={ this.giveSnack }>Give snack</button>
      <div>Baby Yoda has eaten { this.state.snackCount } snacks.</div>
    </div>
    );
  }
}

export default App;
