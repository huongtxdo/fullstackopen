import { useState, useEffect } from "react";
import { Filter } from "./components/Filter";
import { PersonForm } from "./components/PersonForm";
import { Persons } from "./components/Persons";
import personService from "./services/persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchname, setSearchName] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const addToPersons = (event) => {
    event.preventDefault();
    if (persons.filter((person) => person.name === newName).length > 0) {
      const updatedPerson = persons.find((person) => person.name === newName);
      const changedPerson = { ...updatedPerson, number: newNumber };
      if (
        window.confirm(
          `${updatedPerson.name} is already added to phone book, replace the old number with a new one?`
        )
      ) {
        personService
          .update(updatedPerson.id, changedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id === returnedPerson.id ? changedPerson : person
              )
            );
            setErrorMessage(`Number changed for ${returnedPerson.name}`);
          });
      }
    } else {
      const personObject = { name: newName, number: newNumber };
      personService.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
      });
      setErrorMessage(`Added ${personObject.name}`);
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  const handleDeletePerson = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .deleteFromDB(person)
        .then(() => {
          setPersons(persons.filter((p) => p.id !== person.id));
          setErrorMessage(`Information of ${person.name} removed`);
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
        })
        .catch((error) => {
          setErrorMessage(
            `Information of ${person.name} has already been removed from server`
          );
        });
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
      setPersons(persons.filter((p) => p.id !== person.id));
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
      <h1>Phonebook</h1>
      <Notification message={errorMessage} />
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
      <Persons
        persons={persons}
        searchname={searchname}
        handleDeletePerson={handleDeletePerson}
      />
    </div>
  );
};

export default App;
