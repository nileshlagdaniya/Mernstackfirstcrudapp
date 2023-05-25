const mongoose = require('mongoose');
// const validator = require('validator');
const jwt = require("jsonwebtoken")
const joi = require('joi');
const passwordComplexity = require('joi-password-complexity')

const employeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // validate(value) {
        //     if (!validator.isEmail(value)) {
        //         throw newError("not valid email")
        //     }
        // }
    },
    password: {
        type: String,
        required: true,
        // maxLength: 15,
        // minLength: 8
    },
    mobile: {
        type: String,
        required: true,
        maxLength: 10,
        unique: true
    },
    gender: {
        type: String,
        required: true,
    },
    relocate: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    zip: {
        type: Number,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },

    profile: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    dateCreated: Date,
    dateUpdated: Date,
})

const SECRET_KEY = "hjbhjvhvgcfgvghhvhghvgh"

employeeSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ id: this._id }, SECRET_KEY, { expiresIn: "1d" })
    return token
}

const employees = new mongoose.model("employees", employeeSchema)

const validate = (data) => {
    const schema = joi.object({
        firstName: joi.string().required().label("First Name"),
        lastName: joi.string().required().label("Last Name"),
        email: joi.string().email().required().label("Email"),
        password: passwordComplexity().required().label("Password"),
        mobile: joi.string().required().label("Mobile Number"),
        gender: joi.string().required().label("Gender "),
        relocate: joi.string().required().label("Relocate"),
        position: joi.string().required().label("Position"),
        dob: joi.string().required().label("DOB"),
        address: joi.string().required().label("Address"),
        city: joi.string().required().label("City"),
        state: joi.string().required().label("State"),
        zip: joi.string().required().label("Zip Code"),
        country: joi.string().required().label("Country"),
    })

    return schema.validate(data)
}

module.exports = { employees, validate }

