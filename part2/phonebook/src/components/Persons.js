export const Persons = (props) => (
  <ul>
    {props.persons
      .filter((person) =>
        person.name.toLowerCase().includes(props.searchname.toLowerCase())
      )
      .map((person) => (
        <li key={person.name}>
          {person.name} {person.number}
        </li>
      ))}
  </ul>
);
