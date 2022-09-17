require("colors");
require("dotenv").config();
const morgan = require("morgan");
const express = require("express");
const dbConnect = require("./config/dbConnect");
const { errorHandler, notFound } = require("./middleware/errorHandler");
const cors = require("cors");
const categoryRoutes = require("./routes/category.route");
const userRoutes = require("./routes/user.route");

const app = express();
app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/category", categoryRoutes);
app.use("/user", userRoutes);

app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 6000;
dbConnect();
app.listen(PORT, console.log(`Server running on ${PORT}`.yellow.inverse));
