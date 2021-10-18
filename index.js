const express = require("express");
const app = express();
var serviceroutes = require('./routes/services');
var userroutes = require('./routes/users');
var locationroutes = require('./routes/partnerLocations');
var partnerroutes = require('./routes/partners');
const port = process.env.PORT || 2020;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Configuring the database
const dbConfig = require('./utils/db.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// Connecting to the database
mongoose.connect(dbConfig.url, {
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true
    }).then(() => {
    }).catch(err => {
      process.exit();
});

app.use('/services',serviceroutes);
app.use('/users',userroutes);
app.use('/partners',partnerroutes);
app.use('/partnerLocations',locationroutes);

app.listen(port, () => {
});
