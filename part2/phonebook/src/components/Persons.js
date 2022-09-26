export const Persons = ({ persons, searchname, handleDeletePerson }) => (
  <ul>
    {persons
      .filter((person) =>
        person.name.toLowerCase().includes(searchname.toLowerCase())
      )
      .map((person) => (
        <li key={person.id}>
          {person.name} {person.number}
          <button onClick={() => handleDeletePerson(person)}>delete</button>
        </li>
      ))}
  </ul>
);
