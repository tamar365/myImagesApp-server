const express = require("express");
const router = express.Router();
const axios = require("axios").default;

//get image object by id
router.get("/:category/:id", async (req, res) => {
  const category = req.params.category;
  const id = req.params.id;
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${category}`
    );
    const data = response?.data?.hits;
    const imageByID = data.filter((item) => item.id === id);
    res.send(imageByID[0]);
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
