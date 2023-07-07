const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://eymm:rootroot@cluster0.yzitzp1.mongodb.net/heartbeat",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongo DB Connection Successfull");
});

connection.on("error", () => {
  console.log("Mongo DB Connection Failed");
});

module.exports = mongoose;
