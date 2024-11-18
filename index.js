const express = require('express');
const app = express();
const port = 3000;

const posts = require('./posts');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('Server del mio blog');
});

app.get('/bacheca', function (req, res) {
    const response = {
        postsNumber: posts.length,
        postsList: posts,
    };
    res.json(response);
});

app.listen(port, function () {
    console.log(`app running on port ${port}`);
});
