const Header = (props) => <h1>{props.course}</h1>;

const Part = (props) => (
  <p>
    {props.part} {props.exercise}
  </p>
);

const Content = (props) => {
  return (
    <div>
      <Part
        part={props.contents[0].part}
        exercise={props.contents[0].exercise}
      />
      <Part
        part={props.contents[1].part}
        exercise={props.contents[1].exercise}
      />
      <Part
        part={props.contents[2].part}
        exercise={props.contents[2].exercise}
      />
    </div>
  );
};

const Total = (props) => <p>Number of exercises {props.total}</p>;

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    { part: "Fundamentals of React", exercise: 10 },
    { part: "Using props to pass data", exercise: 7 },
    { part: "State of a component", exercise: 14 },
  ];
  const total = parts.reduce(
    (partialSum, part) => partialSum + part.exercise,
    0
  );
  return (
    <div>
      <Header course={course} />
      <Content contents={parts} />
      <Total total={total} />
    </div>
  );
};

export default App;
