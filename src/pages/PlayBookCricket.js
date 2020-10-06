import React, { Component } from 'react';

const staticScore = {
    0:'out',
    1:1,
    2:2,
    3:1,
    4:4,
    5:1,
    6:6,
    7:1,
    8:1,
    9:2,
}

class PlayBookCricket extends Component{

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
            'currentScore':0,
            'winner':'',
            'note':'',
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
            this.setState({
                currentScore:newRun,
            });
            if(player === 1){
                this.setState({
                    player1:this.state.player1+newRun,
                });
            }

            if(player === 2){   //use scope resolution operator
                const player1Score = this.state.player1;
                const player2Score = this.state.player2+newRun;
                console.log(player1Score);
                console.log(player2Score);
                this.setState({
                    player2:player2Score,
                });
                if(player2Score>player1Score){
                    this.showWinner();
                }
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
            'note':'',
        });
    }

    render(){
        return(
            <>
            <div className="container">
            <p>
                <button type="button" class="btn btn-primary" disabled={!this.state.player1Disbled} onClick={() => this.playEachBall(1)}>Player 1 Play</button>
                <button type="button" class="btn btn-secondary" disabled={!this.state.player2Disbled} onClick={() => this.playEachBall(2)}>Player 2 Play</button>
            </p>
            <p>Player 1 Score {this.state.player1}</p>
            <p>Player 2 Score {this.state.player2}</p>
            <p>
                <button  type="button" class="btn btn-success" onClick={this.showWinner}>Show Result</button>
                <button type="button" class="btn btn-warning" onClick={this.resetMatch}>Reset match</button>
            </p>
            
            {this.state.note && 
            <div class="alert alert-primary" role="alert">
                {this.state.note}
            </div>}
            {this.state.currentScore && 
            <div class="alert alert-secondary" role="alert">
                Last Run Scored {this.state.currentScore}
            </div>}
            
            </div>
            </>
        );    
    }
}

export default PlayBookCricket;