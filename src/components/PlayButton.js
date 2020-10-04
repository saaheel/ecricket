import React, { Component } from 'react';

const staticScore = {
    0:'out',
    1:1,
    2:2,
    3:1,
    4:4,
    5:0,
    6:6,
    7:0,
    8:1,
    9:0,
}

class PlayButton extends Component{

    constructor(props){
        super(props);
        this.playEachBall = this.playEachBall.bind(this);
        this.showWinner = this.showWinner.bind(this);
        this.resetMatch = this.resetMatch.bind(this);
        this.state={
            'player1':0,
            'player1Disbled':true,
            'player2':0,
            'player2Disbled':true,
            'winner':'__________',
            'note':'__________',
        }
    }

    generateRandomRuns(){

        const randNumber = Math.floor(Math.random() * 10);
        console.log(randNumber);
        return staticScore[randNumber];
    }
    playEachBall(player){

        const newRun = this.generateRandomRuns();
        if(newRun !== 'out'){
            if(player === 1){
                this.setState({
                    player1:this.state.player1+newRun,
                });
            }

            if(player === 2){
                this.setState({
                    player2:this.state.player2+newRun,
                });
            }
        }else{
            if(player === 1){
                this.setState({
                    player1Disbled:false,
                    note:'player 1 got out'
                });
            }

            if(player === 2){
                this.setState({
                    player2Disbled:false,
                    note:'player 2 got out'
                });
            }
            
        }
        
    }

    showWinner(){

        if(this.state.player1 > this.state.player2){
            this.setState({note:'player 1 won the match'})
        }

        if(this.state.player1 < this.state.player2){
            this.setState({note:'player 2 won the match'})
        }
    }

    resetMatch(){
        this.setState({
            'player1':0,
            'player1Disbled':true,
            'player2':0,
            'player2Disbled':true,
            'winner':'__________',
            'note':'__________',
        });
    }

    render(){
        return(
            <>
            <p>
                <button disabled={!this.state.player1Disbled} onClick={() => this.playEachBall(1)}>Player 1 Play</button>
                <button disabled={!this.state.player2Disbled} onClick={() => this.playEachBall(2)}>Player 2 Play</button>
            </p>
            <p>Player 1 Score {this.state.player1}</p>
            <p>Player 2 Score {this.state.player2}</p>
            <p>
                <button onClick={this.showWinner}>Show Result</button>
                <button onClick={this.resetMatch}>Reset match</button>
            </p>
            <p>{this.state.note}</p>
            </>
        );    
    }
}

export default PlayButton;