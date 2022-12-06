const express = require('express');
const routes = require('./controllers');

const sequelize = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 3001;
//app.use(session(sess));


// Inform Express.js on which template engine to use
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.listen(PORT, () => {
  console.log(`Now listening to ${PORT}!`);
 });