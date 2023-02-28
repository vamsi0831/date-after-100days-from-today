const express = require("express");
const addDays = require("date-fns/addDays");

const app = express();

app.get("/", (request, response) => {
  const dateTime = new Date();
  const resultDate = addDays(
    new Date(dateTime.getFullYear(), dateTime.getMonth(), dateTime.getDate()),
    100
  );
  response.send(
    `${resultDate.getDate()}/${
      resultDate.getMonth() + 1
    }/${resultDate.getFullYear()}`
  );
});

module.exports = app;
