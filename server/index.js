const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const catalogRouter = require("./routes/catalog");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const PASSWORD = process.env.PASSWORD || "0000";

const url = `mongodb+srv://deandre25:${PASSWORD}@cluster0.d1taaii.mongodb.net/affordable-flooring`;

mongoose
  .connect(url)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.use("/catalog", catalogRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
