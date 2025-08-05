require('dotenv').config();

const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));

const connection = mysql.createConnection({
    host: `localhost`,
    user: `root`,
    database: `node`,
    password: process.env.DB_PASSWORD
});

const getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password()
  ];
};

app.get("/", (req, res) => {
  let q = `SELECT count(*) FROM user`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("Error");
  }
});

app.get("/user", (req, res) => {
  let q = `SELECT * FROM user`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      res.render("show.ejs", { result });
    });
  } catch (err) {
    console.log(err);
    res.send("Error");
  }
});

app.get("/user/:id/edit", (req,res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id='${ id }'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("Error");
  }
});

app.patch("/user/:id", (req,res) => {
  let { id } = req.params;
  let {password : formPass, name : newName} = req.body;
  let q = `SELECT * FROM user WHERE id='${ id }'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      
      if(formPass != user.password){
        res.send("WRONG password");
      }else {
        let q2 = `UPDATE user SET name='${newName}' WHERE id='${id}'`;
        connection.query(q2, (err, result) => {
          if(err) throw err;
          res.redirect("/user");
        })
      }
    });
  } catch (err) {
    console.log(err);
    res.send("Error");
  }
});

app.listen("8080", () => {
  console.log("server is listiening to post")
});