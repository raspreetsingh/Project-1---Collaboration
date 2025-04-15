const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use("/", require("./routes/index"));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
