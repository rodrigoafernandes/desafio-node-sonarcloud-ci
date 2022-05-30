const express = require("express");
const router = express.Router();

const appDesafio = express();

appDesafio.use(express.json());
appDesafio.use(
  express.urlencoded({
    extended: true,
  })
);

router.get("/", async function (req, res, next){
  res.json({ 'message': 'Full Cycle Rocks!' })
});

appDesafio.use("/", router);

module.exports = appDesafio;