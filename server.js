const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001;

const routes = require('./routes/index');

app.use(routes);

app.listen(PORT, () => {
    console.log( 'running at http://localhost:' + PORT)
})