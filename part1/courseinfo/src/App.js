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
        part={props.contents[0].name}
        exercise={props.contents[0].exercises}
      />
      <Part
        part={props.contents[1].name}
        exercise={props.contents[1].exercises}
      />
      <Part
        part={props.contents[2].name}
        exercise={props.contents[2].exercises}
      />
    </div>
  );
};

const Total = (props) => <p>Number of exercises {props.total}</p>;

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  const total = course.parts.reduce(
    (partialSum, part) => partialSum + part.exercises,
    0
  );
  return (
    <div>
      <Header course={course.name} />
      <Content contents={course.parts} />
      <Total total={total} />
    </div>
  );
};

export default App;
