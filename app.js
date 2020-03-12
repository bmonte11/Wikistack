const express = require("express");
const morgan = require('morgan');
const app = express()
const { db, Page, User } = require('./models')

app.use(morgan('dev'))
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res, next) =>{
  try{
    res.send('hello world');
  }
  catch(err){
    next(err)
  }
})

db.authenticate().then(() => {
  console.log('connected to the database');
})


const PORT = 3000


const init = async () => {
  await User.sync();
  await Page.sync();
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`)
    })
}
init();

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
