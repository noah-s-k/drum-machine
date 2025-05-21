import React from 'react';
import "./App.css";

const sound = {
  Q: "Heather 1",
  W: "Heather 2",
  E: "Heather 3",
  A: "Heather 4",
  S: "Clap",
  D: "Open-HH",
  Z: "Kick-n'-Hat",
  X: "Kick",
  C: "Closed-HH"
}

const keys = {
  81: "Q",
  87: "W",
  69: "E",
  65: "A",
  83: "S",
  68: "D",
  90: "Z",
  88: "X",
  67: "C"
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this)
    this.changeVolume = this.changeVolume.bind(this)
    this.handleButtonPress = this.handleButtonPress.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.state = {
      volume: 0.5
    }
  }
  playSound(id) {
    document.getElementById(id).volume = this.state.volume;
    //document.getElementById(`${e.target.innerText}`).currentTime = 0;
    document.getElementById(id).play();
    document.getElementById("display").innerText = sound[id];
  }
  changeVolume() {
    this.setState({
      volume: document.getElementById("volumeSlider").value / 100,
    })
  }
  handleButtonPress(e) {
    this.playSound(`${e.target.innerText}`);
  }
  handleKeyPress(event) {
    if (keys.hasOwnProperty(event.keyCode)) {
      this.playSound(keys[event.keyCode]);
    }
  }

  componentDidMount() {
    document.getElementById("volumeSlider").value = this.state.volume * 100;
    document.addEventListener("keydown", this.handleKeyPress);
  }
  render() {
    return (
        <div className="App">
          <div id="drum-machine">
            <div id="buttons">
              <button onClick={this.handleButtonPress} className="drum-pad" id="heater-1">
                Q
                <audio className="clip" id="Q" src="/sounds/heater-1.mp3"/>
              </button>
              <button onClick={this.handleButtonPress} className="drum-pad" id="heater-2" >
                W
                <audio className="clip" id="W" src="/sounds/heater-2.mp3"/>
              </button>
              <button onClick={this.handleButtonPress} className="drum-pad" id="heater-3">
                E
                <audio className="clip" id="E" src="/sounds/heater-3.mp3"/>
              </button>
              <button onClick={this.handleButtonPress} className="drum-pad" id="heater-4">
                A
                <audio className="clip" id="A" src="/sounds/heater-4.mp3"/>
              </button>
              <button onClick={this.handleButtonPress} className="drum-pad" id="clap">
                S
                <audio className="clip" id="S" src="/sounds/clap.mp3"/>
              </button>
              <button onClick={this.handleButtonPress} className="drum-pad" id="open-hh">
                D
                <audio className="clip" id="D" src="/sounds/open-hh.mp3"/>
              </button>
              <button onClick={this.handleButtonPress} className="drum-pad" id="kick-n-hat">
                Z
                <audio className="clip" id="Z" src="/sounds/kick-n-hat.mp3"/>
              </button>
              <button onClick={this.handleButtonPress} className="drum-pad" id="kick">
                X
                <audio className="clip" id="X" src="/sounds/kick.mp3"/>
              </button>
              <button onClick={this.handleButtonPress} className="drum-pad" id="closed-hh">
                C
                <audio className="clip" id="C" src="/sounds/closed-hh.mp3"/>
              </button>
            </div>
            <div id="controls">
              <span id="display"></span>
              <label htmlFor="volumeSlider" id="volumeLabel">Volume</label>
              <input type="range" min="1" max="100" className="slider" id="volumeSlider" onChange={this.changeVolume} />
            </div>
          </div>
        </div>
    );
  }
}

export default App;
