import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
);

const Statistic = ({text, value}) => {
        return (
            <tr>
                <td>{text}</td><td>{value}</td>
            </tr>
        )
};
const Statistics =  ({good, neutral, bad}) => {
    const sum = (a,b,c) => a + b + c;
    const average =(a,b,c) => (a-b)/sum(a,b,c);
    const percentageOfPositive =(a,b,c) => (a/sum(a,b,c)) * 100;
    if (sum(good, neutral, bad)) {
        return (
            <table>
                <tbody>
                <Statistic text="Good" value={good}/>
                <Statistic text="Neutral" value={neutral}/>
                <Statistic text="Bad" value={bad}/>
                <Statistic text="All" value={sum(good, neutral, bad)}/>
                <Statistic text="Average" value={average(good, neutral, bad)}/>
                <Statistic text="Positive" value={percentageOfPositive(good, neutral, bad) + " %"}/>
                </tbody>
            </table>
        )} else {
        return <div>No feedback given</div>
    }
};

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    return (
        <div>
            <h1>Give feedback</h1>
            <Button text="Good" handleClick={() => setGood(good + 1)}/>
            <Button text="Neutral" handleClick={() => setNeutral(neutral + 1)} />
            <Button text="Bad" handleClick={() => setBad(bad + 1)}/>
            <h1>Statistics</h1>
            <Statistics good={good} bad={bad} neutral={neutral}/>
        </div>
    )
};

ReactDOM.render(<App />,
    document.getElementById('root')
);
