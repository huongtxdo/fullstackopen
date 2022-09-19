import { useState, useEffect } from "react";
import axios from 'axios'
import { Filter } from "./components/Filter";
import { PersonForm } from "./components/PersonForm";
import { Persons } from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchname, setSearchName] = useState("");

  useEffect(() => {
    console.log('effect');
    axios.get('http://localhost:3001/persons').then(response => {
      console.log('promise fulfilled');
      setPersons(response.data)
    })
  }, [])

  const addToPersons = (event) => {
    event.preventDefault();
    if (persons.filter((person) => person.name === newName).length > 0) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      const personObject = { name: newName, number: newNumber };
      setPersons(persons.concat(personObject));
      setNewName("");
      setNewNumber("");
    } 
  }; 

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchName = (event) => {
    setSearchName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchname={searchname} handle={handleSearchName} />
      <h2>add a new</h2>
      <PersonForm
        add={addToPersons}
        newName={newName}
        newNumber={newNumber}
        handleName={handleNewName}
        handleNumber={handleNewNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} searchname={searchname} />
    </div>
  );
};

export default App;
