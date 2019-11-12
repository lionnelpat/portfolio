var express = require("express");
var app = express();
var path = require("path");

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/test", (req, res) => {
  res.status(200).send({
    message: "How do I deploy my code to Heroku using GitLab CI/CD?"
  });
});

app.use(express.static(path.join(__dirname, "public")));

app.listen(process.env.PORT || 3000, function() {
  console.log("Node app is working!");
});
