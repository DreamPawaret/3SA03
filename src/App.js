import React, { Component } from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

//const word = "Sawasdee";
class App extends Component {
    render() {
        return ( 
            <div>
                <WordCard value="Sawasdee"/>
            </div>
        );
    }
}
export default App;