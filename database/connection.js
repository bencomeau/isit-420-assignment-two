const mongoose = require('mongoose');

const dbURI =
  'mongodb+srv://xxxxxxxxxx:xxxxxxxxxx@cluster0.vyteg.mongodb.net/Order?retryWrites=true&w=majority';

const options = {
  poolSize: 10,
  // These settings help reduce deprecation warnings in the console
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log('Database connection established!');
  },
  (err) => {
    console.error('Error connecting Database instance due to: ', err);
  }
);
