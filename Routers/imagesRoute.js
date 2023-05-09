const express = require("express");
const router = express.Router();
const axios = require("axios").default;

//get initial images
router.get("/", async (req, res) => {
  const category = "pasta";

  try {
    const response = await axios.get(
      `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${category}`
    );
    const data = response?.data?.hits.slice(0, 9);
    res.send(data);
  } catch (e) {
    console.error(e);
  }
});

//get images by category
router.get("/:category", async (req, res) => {
  let category = req.params.category;

  try {
    const response = await axios.get(
      `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${category}`
    );
    const data = response?.data?.hits.slice(0, 9);
    res.send(data);
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
