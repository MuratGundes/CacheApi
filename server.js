const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 9090;
const router = require('./api/router');
var __dirname = '/';

app.use(__dirname, express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', router);

app.listen(port, () => {
    console.log("Server running on port: " + port);
});
