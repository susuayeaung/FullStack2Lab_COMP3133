const express = require('express');
const mongoose = require('mongoose');
const employeeRouter = require('./routes/RestaurantRoutes.js');

const app = express();
app.use(express.json()); // Make sure it comes back as json

//TODO - Replace you Connection String here
mongoose.connect('mongodb+srv://susuayeaung:QsredeVuRQnwuj7R@cluster0.0bylp.mongodb.net/db_w2022_comp3133?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log('Error Mongodb connection: ' + err)
});

app.use(employeeRouter);

app.listen(3000, () => { console.log('Server is running...') });
