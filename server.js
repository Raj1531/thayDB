const express = require('express');
const app = express();
const cors = require("cors")
require('express-async-errors'),
bodyparser = require('body-parser');
const db = require('./config/db');
const employeeRoutes = require('./controllers/employeeController');
const rolesRoutes = require('./controllers/roleController');
const holidayRoutes = require('./controllers/holidayController');
const timeRoutes=require('./controllers/timeController');
const sendEmail = require('./contactUs');
const payslipRoutes = require('./controllers/payslipController');

app.use(cors())
app.use(express.json())

app.use('/api/employee', employeeRoutes);
app.use((err,req,res,next) => {
  console.log(err)
  res.status(err.status || 500).send('Something went wrong!')
})

app.use('/api/roles', rolesRoutes);
app.use((err,req,res,next) => {
  console.log(err)
  res.status(err.status || 500).send('Something went wrong!')
})

app.use('/api/holiday', holidayRoutes);
app.use((err,req,res,next) => {
  console.log(err)
  res.status(err.status || 500).send('Something went wrong!')
})

app.use('/api/time',timeRoutes);
app.use((err,req,res,next) => {
  console.log(err)
  res.status(err.status || 500).send('Something went wrong!')
})
app.use(cors())
app.use(express.json())
app.use('/api/payslip', payslipRoutes);
app.use((err,req,res,next) => {
  console.log(err)
  res.status(err.status || 500).send('Something went wrong!')
})



app.get("/email", (req, res) => {
  sendEmail(req.query)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, function(err){
  if (err) console.log("Error in server setup")
  console.log("Server listening on Port", PORT);
})