import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => 
    <button 
        onClick={props.handleClick}>
                {props.text}
    </button>

 
const App = (props) => {
    const getRandom = () => {
        const min = 0
        const max = anecdotes.length
        let randomNumber = Math.floor(Math.random() * (max - min)) + min
        return randomNumber
    }
    const points = Array.from(Array(anecdotes.length), () => 0)
    const copy = [...points]
   
    const [selected, setSelected] = useState(getRandom())
   
    const [votes, setVotes] = useState(copy)
    

    const handleAnecdote = () => {
        setSelected(getRandom())
    }

  
    const handleVote = () => {
        setVotes(votes.map(
            (vote, anec) => {
                if(anec === selected) {
                    return vote + 1
                }

                return vote
            }
        ))
        
    }

    return(
        <div>
            <h1>Anecdote of the day</h1>
            <p>{props.anecdotes[selected]}</p>
            <p>has {votes[selected]} votes</p>
            <Button handleClick={handleVote} text='vote' />
            <Button handleClick={handleAnecdote} text='next anecdote' />
            
            
            <h1>Anecdote with most votes</h1>
            <p>{props.anecdotes[votes.indexOf(Math.max(...votes))]}</p>
            <p>has {votes[votes.indexOf(Math.max(...votes))]} votes</p>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often', 
    'Adding manpower to a late software project makes it later!', 
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', 
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', 
    'Premature optimization is the root of all evil.', 
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
