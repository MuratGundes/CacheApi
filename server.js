const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const connection = mongoose.connection;

const app = express();
const port = process.env.PORT || 9090;
const router = require('./api/Routers/CacheRouter');
const config = require('./api/config.json');
var __dirname = '/';

mongoose.connect(config.database.host + config.database.name, { useUnifiedTopology: true, useNewUrlParser: true });

connection.once("open", function() {
    console.log("MongoDB database connection established successfully.");
});
  
app.use(__dirname, express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', router);

app.listen(port, () => {
    console.log("Server running on port: " + port);
});