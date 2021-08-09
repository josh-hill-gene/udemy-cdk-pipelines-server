const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('howdy earth');
});

const port = 8080;
app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`);
});

module.exports = app;
