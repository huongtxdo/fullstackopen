const Header = (props) => {
  return <h2>{props.courseName}</h2>;
};

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};

const Total = (props) => {
  const { parts } = props;
  const numberOfExercises = parts.map((part) => part.exercises);
  return (
    <p>
      <b>total of exercises {numberOfExercises.reduce((a, b) => a + b, 0)}</b>
    </p>
  );
};

const Course = (props) => {
  const { course } = props;
  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
