// const Employees = require('../Models/EmployeeSchema')
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcryptjs')

// export const register = async (req, res) => {
//     const salt = bcrypt.genSaltSync(10)
//     const hash = bcrypt.hashSync(req.body.password, salt)

//     try {
//         const newEmployee = new Employees({
//             ...req.body,
//             password: hash
//         })
//         await newEmployee.save()
//         res.status(200).json(newEmployee)
//     } catch (error) {
//         res.status(400).json(error)
//     }
// }

// export const login = async (req, res) => {
//     try {
//         const employee = await Employees.findOne({ email: req.body.email })
//         if (!employee) return res.status(404).json("employee not found")
//     } catch (error) {
//         res.status(400).json(error)
//     }
// }