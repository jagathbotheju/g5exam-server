require("colors");
require("dotenv").config();
const morgan = require("morgan");
const express = require("express");
const dbConnect = require("./config/dbConnect");
const { errorHandler, notFound } = require("./middleware/errorHandler");
const cors = require("cors");
const categoryRoutes = require("./routes/category.route");

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/category", categoryRoutes);

app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 6000;
dbConnect();
app.listen(PORT, console.log(`Server running on ${PORT}`.yellow.inverse));
