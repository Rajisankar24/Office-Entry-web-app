const express = require("express");
const app = express();
const cors = require("cors");
const { connectDB } = require("./DataBase/connect");
const projRouter = require("./router/route");
const imgUpload = require("./router/imgRouter");

// Middleware
app.use(express.json());
app.use(cors());

app.use("/app", projRouter);
app.use("/file", imgUpload);
app.use("/images", express.static("images"));

port = "5000";
const start = async () => {
  try {
    await connectDB();
    app.listen(port, console.log(`Server is listening on ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();
