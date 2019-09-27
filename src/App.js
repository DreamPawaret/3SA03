import React, { Component } from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';
const word = ['Sawasdee', 'Hello', 'Bonjour'];
const random = Math.floor(Math.random() * word.length)
//const word = "Sawasdee";
class App extends Component {
    constructor() {
        super();

    }

    newgame = () => {
        window.location.reload(false);
    }
    requestHint = () => {
        this.setState({ requestHint: true });
    }

    render() {
        return (
            <div className="App">
                <h1>RANDOM GAME</h1>
                < WordCard value={word.slice(random, random + 1).join().toUpperCase()}/>
                <h1 id="result"></h1>

                <h1 id="answer"></h1>
                <br></br>
                <button id="newgame" className="button" onClick={this.newgame}>New Game</button>
                <br></br><br></br>
                
            </div>  
            
            
        );
    }
}
export default App;