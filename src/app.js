const express = require("express");
const router = express.Router();

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.disable("x-powered-by");

router.get("/", async function (req, res, next){
  res.json({ 'message': 'Full Cycle Rocks!' })
});

app.use("/", router);

module.exports = app;