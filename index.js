require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000

const mongoose = require("mongoose");
const cors = require("cors");
const taskRouter = require("./routes/taskRouter")

app.use(express.json())
app.use(cors());

app.use("/api/tasks", taskRouter);

const startPort = () => {
 try {
  mongoose.connect(process.env.MONGO_URI)
  app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
  });
 } catch (error) {
  console.log(error);
 }
};

startPort();

app.use((req, res) => {
 res.status(404).send("Resource Not Found");
});