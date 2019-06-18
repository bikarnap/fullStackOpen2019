import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({handleClick, text}) => 
    <button onClick={handleClick}>{text}</button>

const Statistic = ({feedback, value, unit}) => {
    if(isNaN(value)) {
        return (
            <table>
                <tbody>
                    <tr>
                        <td width="70">{feedback}</td>
                        <td>0 {unit}</td>
                    </tr>
                </tbody>
            </table>
        )
    }
    
    return (
        <table>
            <tbody>
                <tr>
                    <td width="70">{feedback}</td>
                    <td>{value} {unit}</td>
                </tr>
            </tbody>
        </table>
    )
} 

const App = () => {
    const [good, setGood] = useState(0)
    const [bad, setBad] = useState(0)
    const [neutral, setNeutral] = useState(0)

    const handleGoodClick = () => setGood(good + 1)
    const handleNeutralClick = () => setNeutral(neutral + 1)
    const handleBadClick = () => setBad(bad + 1)

    return (
        <>
            <h1>give feedback</h1>
            
                <Button handleClick={handleGoodClick} text='good' />
                <Button handleClick={handleNeutralClick} text='neutral' />
                <Button handleClick={handleBadClick} text='bad' />
            
            <h1>statistics</h1>

                <Statistic 
                    feedback='good' 
                    value={good} 
                    unit='' 
                />
                <Statistic 
                    feedback='neutral' 
                    value={neutral} 
                    unit='' 
                />
                <Statistic 
                    feedback='bad' 
                    value={bad} 
                    unit='' 
                />
                <Statistic 
                    feedback='all' 
                    value={good + neutral + bad} 
                    unit='' 
                />
                <Statistic 
                    feedback='average' 
                    value={(good-bad)/(good + neutral + bad)} 
                    unit='' 
                />
                <Statistic 
                    feedback='positive' 
                    value={((good/(good + neutral + bad))*100)} 
                    unit=" %"
                />
            
        </>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

