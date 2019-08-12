const express = require("express");
const contacts = require("./routes");
const morgan = require("morgan");
const mongoose = require("mongoose");
const ejs = require('ejs');
const time_check= require("./check-time");

const app = express();
app.set('view engine','ejs')
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/contacts", contacts);
let greetings = time_check();



PORT = process.env.PORT || 5050;

mongoose
  .connect(`mongodb://testadmin:pass123@ds149947.mlab.com:49947/test-db`, {
    useNewUrlParser: true
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("app is listening in PORT", PORT);
    });
  })
  .catch(err => {
    console.log(err);
  });
