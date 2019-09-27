import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash';
const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    console.log("chars : "+chars.join('').toString())
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
        //console.log(guess.join('').toString())
        if(guess.length == this.state.chars.length){
            //console.log(`${guess.join('').toString} ${this.state.chars.join('').toString()}`)

            if(guess.join('').toString() == this.state.chars.join('').toString()){
                this.setState({guess: [], completed: true})
                document.getElementById('result').innerHTML = `Congratulations!`
                document.getElementById('answer').innerHTML = `Answer is : ${this.state.chars.join("")}`
            }
            else{
                this.setState({guess: [], attempt: this.state.attempt + 1})
                //document.getElementById('result').innerHTML = `Attempt Or Try Again: ${this.state.attempt} `
                document.getElementById('answer').innerHTML = `Answer is : ${this.state.chars.join("")}` 
 
            }

            if(this.state.attempt == 3){
                document.getElementById('result').innerHTML = `Game Over! So RestartGame`
                setTimeout(() => window.location.reload(false),3000)
            }
        }
    }
    render() {
        if(this.props.requestHint){
            var a;
            var lenghtstring = 0;
            var stringword = " ";
            for(a in this.state.chars){
                lenghtstring++;
            }
            lenghtstring = lenghtstring/2;
            lenghtstring=lenghtstring.toFixed(0);
            for(a = 0; a < lenghtstring; a++)
            {
                stringword += this.state.chars[a]
        
            }
            this.props.getHint(stringword)
        }
        return (
            <div>
            { 
                Array.from(this.props.value).map((c, i) => <CharacterCard value={c} key={i} activationHandler={this.activationHandler} />) 
            }
            </div>
        );
    }
}
