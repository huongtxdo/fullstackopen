import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticLine = ({ text, value }) => {
  return (
    <tbody>
      <tr>
        <td>{text}</td>
        <td>
          {value}
          {text === "positive" ? "%" : null}
        </td>
      </tr>
    </tbody>
  );
};

const Statistics = ({ goodValue, neutralValue, badValue }) => {
  const all = goodValue + neutralValue + badValue;
  const totalScore = goodValue - badValue;
  if (all === 0) {
    return <div>No feedback given</div>;
  }
  return (
    <table>
      <StatisticLine text="good" value={goodValue} />
      <StatisticLine text="neutral" value={neutralValue} />
      <StatisticLine text="bad" value={badValue} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={totalScore / all} />
      <StatisticLine text="positive" value={(goodValue * 100) / all} />
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setToGood = () => setGood(good + 1);
  const setToNeutral = () => setNeutral(neutral + 1);
  const setToBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setToGood()} text="Good" />
      <Button handleClick={() => setToNeutral()} text="Neutral" />
      <Button handleClick={() => setToBad()} text="Bad" />
      <h1>statistics</h1>
      <Statistics goodValue={good} neutralValue={neutral} badValue={bad} />
    </div>
  );
};

export default App;
