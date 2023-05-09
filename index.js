require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const {
  imagesRoute,
  sortRoute,
  paginationRoute,
} = require("./Routers/router.js");

// app.use(cors({ credentials: true, origin: "http://127.0.0.1:5173/" })) - usually, this parameter is filled for security
app.use(cors());
app.use(express.json());

//routes
app.use("/api/init", imagesRoute);
app.use("/api/sort", sortRoute);
app.use("/api/images", paginationRoute);

// const PORT = process.env.PORT || 3001; - usually, put secret variables in env file
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
