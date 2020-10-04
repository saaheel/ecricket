import React, { Component } from 'react';



class PlayButton extends Component{

    constructor(props){
        super(props);
        this.playEachBall = this.playEachBall.bind(this);
        this.showWinner = this.showWinner.bind(this);
        this.state={
            'player1':0,
            'player2':0,
            'winner':''
        }
    }

    generateRandomRuns(){

        return Math.floor(Math.random() * 10);
    }
    playEachBall(player){

        const newRun = this.generateRandomRuns();

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
        
    }

    showWinner(){
        if(this.state.player1 > this.state.player2){
            this.setState({winner:'player 1'})
        }

        if(this.state.player1 < this.state.player2){
            this.setState({winner:'player 2'})
        }
    }

    render(){
        return(
            <>
            <button onClick={() => this.playEachBall(1)}>Player 1 Play</button>
            <button onClick={() => this.playEachBall(2)}>Player 2 Play</button>
            <p>Player 1 Score {this.state.player1}</p>
            <p>Player 2 Score {this.state.player2}</p>
            <p><button onClick={this.showWinner}>Show Result</button></p>
            <p>winner is {this.state.winner}</p>
            </>
        );    
    }
}

export default PlayButton;