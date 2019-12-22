const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const PORT = process.env.PORT || 8081;

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.post("/register", (req, res) => {
  res.send({
    message: `Hello ${req.body.email}! Your user was registered! Have fun!`
  });
})

app.listen(PORT, () => console.log(`Server is running at the port ${PORT}`));
