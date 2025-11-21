const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

const dataSchemaObject = {
    username: {type: String},
    password: {type: String},
    created: { type: Date, default: Date.now }, // when was this user record created
};
const mongooseSchema = mongoose.Schema(dataSchemaObject);

//plugin
mongooseSchema.plugin(plm);

module.exports = mongoose.model("User", mongooseSchema);