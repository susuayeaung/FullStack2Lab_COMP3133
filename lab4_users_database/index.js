const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/UserRoutes.js');

const app = express();
app.use(express.json());

//mogodb connection string
mongoose.connect('mongodb+srv://susuayeaung:QsredeVuRQnwuj7R@cluster0.0bylp.mongodb.net/db_w2022_comp3133?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log('Error Mongodb connection: ' + err)
});

app.use(userRouter);

app.listen(3000, () => { console.log('Server is running...') });
