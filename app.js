const express = require("express");
const morgan = require('morgan');
const app = express()
const { db, Page, User } = require('./models')
const path = require('path')
const layout = require('./views/layout');

// const wikiRouter = require('./routes/wiki');
// const userRouter = require('./routes/user');

// app.use('/wiki', wikiRouter)

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname + "/public")));
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res, next) =>{
  try{
    res.send(layout('hello world'));
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
