const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

const db = require("./models");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.use(express.static("public"));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/exercise.html'));
});

app.get('/stats', function (req, res) {
  res.sendFile(path.join(_dirname, '/public/stats.html'));
})

require('./routes')(app);

app.listen(PORT, () => {
  console.log(`APP IS RUNNING ON http://localhost:${PORT}`);
});
