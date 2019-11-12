var express = require("express");
var app = express();
var path = require("path");

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.use(express.static(path.join(__dirname, "public")));

app.listen(process.env.PORT || 4000, function() {
  console.log("Node app is working!");
});