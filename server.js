require('dotenv').config();
//this is where the export goes, so back out of a folder, then back out of the server folder and go into app.js
const app = require('./server/app');

//creates the port we will be working in
const PORT = process.env.PORT || 7000; //creates the port we will be working in

//listen takes in the PORT parameter in a callback function, this is used to tell the developer what PORT its listening on
app.listen(PORT, () => {
  console.log(`Express is listening on port ${PORT}`)
});