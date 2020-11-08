//bringing mongoose into the file so you can work with MongoDB
const mongoose = require('mongoose');


// here we are going into our database we created on MongoDB
try {
  mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log('MongoDB has been connected!') // this is the messahe you will receiver mDB connects
} catch (error) {
  console.log(error)
}