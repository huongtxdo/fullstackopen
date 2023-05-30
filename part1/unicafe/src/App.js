import { useState } from "react";

const Button = ({ name, clickAction }) => (
  <button onClick={clickAction}>{name}</button>
);

const StatisticLine = ({ text, value }) => {
  if (text === "positive") {
    return (
      <p>
        {text} {value} %
      </p>
    );
  } else {
    return (
      <p>
        {text} {value}
      </p>
    );
  }
};

const Statistic = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  if (all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  } else {
    return (
      <div>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={(good - bad) / all} />
        <StatisticLine text="positive" value={(good * 100) / all} />
      </div>
    );
  }
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const clickGood = () => {
    setGood(good + 1);
  };
  const clickNeutral = () => {
    setNeutral(neutral + 1);
  };
  const clickBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button name="good" clickAction={clickGood} />
      <Button name="neutral" clickAction={clickNeutral} />
      <Button name="bad" clickAction={clickBad} />
      <h1>statistics</h1>
      <Statistic good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
