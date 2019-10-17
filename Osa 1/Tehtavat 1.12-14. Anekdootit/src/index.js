import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
);

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];


const App = (props) => {
    const [selected, setSelected] = useState(0);
    const [anecdoteWithMostVotes, setAnecdoteWithMostVotes] = useState(0);
    const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

    const vote = selected => {
        votes[selected] = votes[selected] + 1;
        setVotes(votes);
        setAnecdoteWithMostVotes(votes.indexOf(Math.max(...votes)))
    };

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <p>{props.anecdotes[selected]}</p>
            <p>Has {votes[selected]} votes</p>
            <Button text="Vote" handleClick={() => vote(selected)}/> <Button text="Next anecdote" handleClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}/>
            <h1>Anecdote with most votes</h1>
            <p>{props.anecdotes[anecdoteWithMostVotes]}</p>
            <p>Has {votes[anecdoteWithMostVotes]} votes</p>
        </div>
    )
};


ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
);
