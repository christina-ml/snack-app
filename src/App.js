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
    <div className="App">
      <h1>Give Baby Yoda some snack.</h1>
      <img src="https://img.huffingtonpost.com/asset/5fb802c62900005b61c6c565.png?ops=1778_1000" 
      alt="baby yoda" />
      <button onClick={ this.giveSnack }>Give snack</button>
      <div>Baby Yoda has eaten { this.state.snackCount } snacks.</div>
    </div>
    );
  }
}

export default App;
