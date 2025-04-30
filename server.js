require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const moviesRoutes = require("./src/routes/movies");
const showtimesRoutes = require("./src/routes/showtimes");
const errorHandler = require("./src/middlewares/error");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use("/api/v1/movies", moviesRoutes);
app.use("/api/v1/showtimes", showtimesRoutes);

app.use(errorHandler);

app.listen(port, () => console.log(`Server on port ${port}`));