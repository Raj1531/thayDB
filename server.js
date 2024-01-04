const express = require("express");
const app = express();
const cors = require("cors");
require("express-async-errors"), (bodyparser = require("body-parser"));
const db = require("./config/db");
const employeeRoutes = require("./controllers/employeeController");
const rolesRoutes = require("./controllers/roleController");
const holidayRoutes = require("./controllers/holidayController");
const timeRoutes = require("./controllers/timeController");
const sendEmail = require("./contactUs");

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(cors());
app.use(express.json());
app.use("/api/employee", employeeRoutes);
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send("Something went wrong!");
});

//middleware
app.use(cors());
app.use(express.json());
app.use("/api/roles", rolesRoutes);
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send("Something went wrong!");
});

//middleware
app.use(cors());
app.use(express.json());
app.use("/api/holiday", holidayRoutes);
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send("Something went wrong!");
});

app.use(cors());
app.use(express.json());
app.use("/api/time", timeRoutes);
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send("Something went wrong!");
});

app.get("/email", (req, res) => {
  sendEmail(req.query)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

// db.query("SELECT 1")
//   .then(() => {
//     console.log("db connection succeeded");
//     const PORT = process.env.PORT || 5000;
//     app.listen(PORT, () => console.log(`server started at ${PORT}`));
//   })
//   .catch((err) => console.log(`db connection failed at ${process.env.PORT}.\n ${err}`));

const PORT = process.env.PORT || 5000;
app.listen(PORT, function(err){
  if (err) console.log("Error in server setup")
  console.log("Server listening on Port", PORT);
})
