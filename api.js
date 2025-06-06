import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var data = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(data);
  console.log(data[0]);
});

app.post("/", (req, res) => {
  const ans = req.body;
  data.push(ans);
  console.log(typeof req.body.index);
  res.send("added");
});

app.delete("/", (req, res) => {
  const index = req.body.index;
  data = data.filter((emp, ind) => index != ind);
  res.send("deleted");
});

app.listen(port, () => {
  console.log(`the server is running on port: ${port}`);
});
