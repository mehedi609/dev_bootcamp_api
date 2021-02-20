const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");

const { bootcampRoutes } = require("./routes/bootcamps.routes");

// Load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/bootcamps", bootcampRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
