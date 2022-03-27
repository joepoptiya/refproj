require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5040;
app.use(cors());

app.get("/api/v1/todos", (req, res) => {
  return res.json({
    todos: [
      {
        title: "Task1",
      },
      {
        title: "Task2",
      },
      {
        title: "Task3",
      },
    ],
  });
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
