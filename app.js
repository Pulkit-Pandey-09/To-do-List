const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));     // new way to use body-parser This should not introduce any breaking changes into your applications since the code in express.json() is based on bodyparser.json().
app.use(express.json());

app.use(express.static("static"));

const date = require(__dirname + '/date.js');

const listItems = [];
const workItems = [];

app.set('view engine', 'ejs');


app.get("/", function(req, res) {

  const day = date.getDate();

  res.render("list", {
    listTitle: day,
    listItems: listItems
  });
});

app.get("/work", function(req, res){
  res.render("list", {
    listTitle: "Work List",
    listItems: workItems});
});

app.post("/", function(req, res){

  if(req.body.listSubmit === "Work"){
    workItems.push(req.body.newTodo);
    //console.log(workItems[0]);
    res.redirect("/work");
  }else{
    listItems.push(req.body.newTodo);
    res.redirect("/");
  }
});

app.listen(3000, function() {
  console.log("Server running on port 3000.");
});