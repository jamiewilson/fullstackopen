import { useState } from 'react'

const Button = ({ action, text }) => <button onClick={action}>{text}</button>

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td> 
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (all > 0) {
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} />
        </tbody>
      </table>
    )
  } else {
    return <p>No feedback given</p>
  }
}

const App = () => {
  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)
  const all = good + neutral + bad
  const average = all / 3
  const positive = good / all * 100 + '%'

  return (
    <div>
      <h1>Give feedback</h1>
      <Button action={() => setGood(good + 1)} text="good" />
      <Button action={() => setNeutral(neutral + 1)} text="neutral" />
      <Button action={() => setBad(bad + 1)} text="bad" />

      <h1>Statistics</h1>
      <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} 
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  )
}

export default App