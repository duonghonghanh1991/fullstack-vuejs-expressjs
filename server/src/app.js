const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const { sequelize } = require('./models')
const config = require('./config/config');
const routes = require('./routes');

const app = express();

app.use(morgan('combined'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(cors())

routes(app)

sequelize.sync()
  .then(() => {
    app.listen(config.PORT, () => console.log(`Server is running at the port ${config.PORT}`));
  })

