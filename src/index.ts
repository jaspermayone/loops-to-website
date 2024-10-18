import express from "express";

const app = express();

app.post("/", (req, res) => {
  console.log("Received POST request");
  res.status(200);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
