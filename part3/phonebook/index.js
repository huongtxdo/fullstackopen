const express = require("express")
const app = express()

app.use(express.json())

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/', (request, response) => {
    response.send('<h1>Hello</h1>')
})

app.get('/info', (request, response) => {
    const count = persons.length
    const dateTime = new Date()
    response.send(
        `<p>Phonebook has info for ${count} people<p>
        <p>${dateTime}</p>`
)})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if (person)
        response.json(person)
    else 
        response.status(404).end()
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    
    response.status(204).end()
})

const generateId = () => {
    return Math.floor(Math.random()*5000)
}

app.post('/api/persons', (request, response) => {
    const body = request.body
    //missing name or number
    if (!body.name || !body.number) {
        return response.status(400).json({
            error: 'name and number must not be empty'
        })
    }
    //name already exists
    const alreadyExist = persons.find(person => person.name === body.name)
    if (alreadyExist) {
        return response.status(400).json({
            error: 'name must be unique'
        })
    }
    //successful
    const person = {
        name: body.name,
        number: body.number,
        id: generateId()
    }
    persons = persons.concat(person)
    response.json(person)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})