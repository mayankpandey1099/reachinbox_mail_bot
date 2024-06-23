require("dotenv").config();

const express = require("express");
const session = require("express-session");
const cors = require("cors");

const app = express();


app.use(cors());
app.use(
  session({
    secret: "session",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());




const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`server is listening on port ${port}`);
});