const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send("I'm alive");
});

app.listen(port, function () {
    console.log(`app running on port ${port}`);
});
