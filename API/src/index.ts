import * as express from "express";

const app = express();

app.get("/", function(req, res) {
  res.send("hello world, this is the new version");
});

app.listen(8080);
