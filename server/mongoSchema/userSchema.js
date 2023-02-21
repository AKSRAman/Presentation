const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
        trim: true,
    },

    lastName: {
        type: String,
        trim: true,
    },

    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
        trim: true,
    },

    isDeleted: {
        type: Boolean,
        default: false
    }
},
    { timestamps: true }
);
module.exports = mongoose.model("Registered User", userSchema);