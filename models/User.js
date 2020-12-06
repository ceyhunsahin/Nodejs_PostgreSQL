const { Sequelize } = require('sequelize');
// connect to db
/* const sequelize = new Sequelize(
  'postgres://user:pass@example.com:5432/dbname') 
  // Example for postgres
  DB_USERNAME
  DB_PASSWORD
  DB_HOSTNAME
  DB_PORT
  DB_NAME*/

const  { DB_USERNAME, DB_PASSWORD, DB_HOSTNAME, DB_PORT, DB_NAME } = process.env

const sequelize = new Sequelize(`postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}:${DB_PORT}/${DB_NAME}`);


sequelize
.authenticate()
.then(() => console.log("succesfully connected to db"))
.catch((err) => console.log("uanbled connected to db",err))


//ORM Table

sequelize.define(recruiter, {

},{
    
});
//modelName (tablo), attr,options
