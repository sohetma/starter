const express = require('express');
const bodyParser = require('body-parser');
var logger = require('morgan');

var Sequelize = require('sequelize');
require('dotenv').config();

require("./config/config.js");

const app = express();
const port = 5000;
const router = express.Router();

app.use(logger('dev'));

// Support JSON-encoded bodies
app.use(bodyParser.json());
// Support URL-encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use(function (req, res, next) {
   // Website you wish to allow to connect
   res.setHeader('Access-Control-Allow-Origin', '*');
   // Request methods you wish to allow
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
   // Request headers you wish to allow
   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
   // Set to true if you need the website to include cookies in the requests sent
   // to the API (e.g. in case you use sessions)
   next();
});

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.use('/api', router);


// require("./stores/connections.js");
// require("./models/clients.model.js")();
// const db = require("./models/connections.js");
// db.sequelize.sync();



require("./routes/clients.routes.js")(router);


app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});


module.exports = app;
