const express = require("express");
const router = express.Router();

const pages = [
  "home", "about", "services", "gallery", "contact",
  "blog", "team", "faqs", "testimonials", "settings"
];

pages.forEach((page) => {
  router.get(`/${page === "home" ? "" : page}`, (req, res) => {
    res.render(`pages/${page}`, { title: page });
  });
});

module.exports = router;
