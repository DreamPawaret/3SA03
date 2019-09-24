import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash';
const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return{
        word,
        chars,
        attempt: 1,
        guess: [],
        complete: false
    }
} 

export default class WordCard extends


Component {
    constructor(props){
        super(props)
        this.state = prepareStateFromWord(this.props.value)
    }
    //activationHandler = c => { console.log(`${c} has been activated.`) }
    //activationNotHandler = c => { console.log(`${c} not activated.`) }
    activationHandler = (c) => {
        let guess = [...this.state.guess, c]
        this.setState({guess})
        console.log(guess.join('').toString())
        if(guess.length == this.state.chars.length){
            console.log(`${guess.join('').toString} ${this.state.chars.join('').toString()}`)
        if(guess.join('').toString() == this.state.word){
        this.setState({guess: [], completed: true})
        }else{
        this.setState({guess: [], attempt: this.state.attempt + 1})
        }
        }
       }
    render() {
        return (
            <div>
            { 
                Array.from(this.props.value).map((c, i) => <CharacterCard value={c} key={i} activationHandler={this.activationHandler} />) 
            }
            </div>
        );
    }
}
