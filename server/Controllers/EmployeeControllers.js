const { employees, validate } = require('../Models/EmployeeSchema')
const bcrypt = require("bcrypt")
const moment = require('moment');


// register employee
exports.employeePost = async (req, res) => {
    const file = req.file.filename;
    console.log(file)
    const { firstName, lastName, email, password, mobile, gender, relocate, position, dob, address, city, state, zip, country, error } = req.body

    if (error)
        return res.status(400).json({ message: error.details[0].message })

    if (!firstName || !lastName || !email || !password || !mobile || !gender || !relocate || !position || !dob || !address || !city || !state || !zip || !country || !file) {
        res.status(401).json("All fields are required!!!")
    }

    try {
        const preEmployee = await employees.findOne({ email: email })

        if (preEmployee) {
            res.status(401).json("This employee has already been assigned in the database!!!")
        } else {

            const SALT = 10
            const dateCreated = moment(new Date()).format("YYYY-MM-DD hh:mm:ss")

            const salt = await bcrypt.genSalt(Number(SALT))
            const hashPassword = await bcrypt.hash(req.body.password, salt)

            const newEmployee = new employees({
                firstName, lastName, email, password: hashPassword, mobile, gender, relocate, position, dob, address, city, state, zip, country, profile: file, dateCreated
            })
            await newEmployee.save()
            res.status(200).json(newEmployee)
        }
    } catch (error) {
        res.status(401).json(error)
        console.log("catch block error")
    }
}

// login employee
exports.employeeLogin = async (req, res) => {
    try {
        const { error } = validate(req.body)

        if (error)
            return res.status(400).send({ message: error.details[0].message })

        const employee = await employees.findOne({ email: req.body.email })
        if (!employee)
            return res.status(401).send({ message: "Invalid Email or Password" })

        const validPassword = await bcrypt.compare(req.body.password, employee.password)
        if (!validPassword)
            return res.status(401).send({ message: "Invalid Email or Password" })

        const token = employee.generateAuthToken()
        res.status(200).send({ data: token, message: "Login successful" })

        const validate = (data) => {
            const schema = joi.object({
                email: joi.string().email().required().label("Email"),
                password: joi.string().required().label("Email")
            })
            return schema.validate(data)
        }

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" })
    }
}


exports.employeeGet = async (req, res) => {

    const search = req.query.search || ""
    const gender = req.query.gender || ""
    const relocate = req.query.relocate || ""
    const position = req.query.position || ""
    const sort = req.query.sort || ""
    const page = req.query.page || 1
    const EMPLOYEE_PER_PAGE = 5

    const query = {
        firstName: { $regex: search, $options: "i" }
    }
    if (gender !== "All") {
        query.gender = gender
    }
    if (relocate !== "All") {
        query.relocate = relocate
    }
    if (position !== "All") {
        query.position = position
    }


    try {
        const skip = (page - 1) * EMPLOYEE_PER_PAGE
        const count = await employees.countDocuments(query)

        const getEmployeeData = await employees.find(query).sort({ dateCreated: sort == "new" ? -1 : 1 }).limit(EMPLOYEE_PER_PAGE).skip(skip)
        const pageCount = Math.ceil(count / EMPLOYEE_PER_PAGE)

        res.status(200).json({
            Pagination: { count, pageCount }
            , getEmployeeData
        })
    } catch (error) {
        res.status(401).json(error)
    }
}

exports.singleEmployee = async (req, res) => {
    const { id } = req.params
    try {
        const singleEmployeeData = await employees.findById({ _id: id })
        res.status(200).json(singleEmployeeData)
    } catch (error) {
        res.status(401).json(error)
    }
}

// update
exports.updateEmployee = async (req, res) => {
    // console.log(req.file.filename)
    const { id } = req.params
    const { firstName, lastName, email, password, mobile, gender, relocate, position, dob, address, city, state, zip, country } = req.body
    // const file = req.file.filename
    const file = req.file.filename
    const dateUpdated = moment(new Date()).format("YYYY-MM-DD hh:mm:ss")
    try {
        const updateEmployeeData = await employees.findByIdAndUpdate({ _id: id }, {
            firstName, lastName, email, password, mobile, gender, relocate, position, dob, address, city, state, zip, country, profile: file, dateUpdated
        }, { new: true })
        await updateEmployeeData.save()
        res.status(200).json(updateEmployeeData)
    } catch (error) {
        res.status(401).json(error)
    }
}

// delete 

exports.deleteEmployee = async (req, res) => {
    const { id } = req.params
    try {
        const deletedEmployeeData = await employees.findByIdAndDelete(id)
        res.status(200).json(deletedEmployeeData)
    } catch (error) {
        res.status(401).json(error)
    }
}
