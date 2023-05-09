const express = require("express");
const router = express.Router();
const axios = require("axios").default;
const paginationFun = require("../Utils/paginationFun");

//get image array by pagination
router.get("/:category/:page", async (req, res) => {
  const category = req.params.category;
  const page = req.params.page;
  if (!category) {
    category = "pasta";
  }
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${category}`
    );
    const data = response?.data?.hits;
    const result = paginationFun(data, page);
    res.send(result);
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
