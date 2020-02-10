const mongoose = require("mongoose");
const { Schema } = mongoose;

const mailinglistSchema = new Schema({
  email: String
});
mongoose.model("mailinglists", mailinglistSchema);
