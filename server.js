const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

let posts = [];

app.get('/api/posts', (req, res) => {
    res.json(posts);
});

app.post('/api/posts', (req, res) => {
    const post = { id: uuidv4(), title: req.body.title, content: req.body.content };
    posts.push(post);
    res.status(201).json(post);
});

app.delete('/api/posts/:id', (req, res) => {
    posts = posts.filter(post => post.id !== req.params.id);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(Server running at http://localhost:${port});
});