import express from 'express';
import client from './client.js';

const app = express();

app.get('/', async (req, res) => {
    try {
        const cached = await client.get('todos');
        if (cached) {
            const todos = JSON.parse(cached); // Parse Redis string to object
            return res.json(todos)
        }
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
        const todos = await response.json();

        await client.set('todos', JSON.stringify(todos)); // Store as string
        await client.expire("todos", 30)
        res.json(todos); // Use res.json to send JSON data
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});

app.listen(2000, () => {
    console.log('Server is running on http://localhost:2000');
});