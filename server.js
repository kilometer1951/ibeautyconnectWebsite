const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  ejs = require("ejs");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//const config = require("./config/secret");

mongoose.connect(
  "mongodb://root:louis1951@ds127490.mlab.com:27490/mailinglist",
  {
    socketTimeoutMS: 0,
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

require("./models/MailingList");

const MailingList = mongoose.model("mailinglists");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/api/subscribe", (req, res) => {
  new MailingList({ email: req.body.email }).save();
  res.redirect("/");
});

const port = process.env.PORT || 5002;
app.listen(port, () => {
  console.log("website server connected successfully at port:", port);
});
