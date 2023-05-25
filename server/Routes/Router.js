const express = require('express');
const router = new express.Router();
const controllers = require('../Controllers/EmployeeControllers')
const upload = require('../MulterConfig/StorageConfig')

router.post("/employee/register", upload.single("employee_profile"), controllers.employeePost)
router.post("/employee/login", controllers.employeeLogin)
router.get("/employee/employeeGet", controllers.employeeGet)
router.get("/employee/singleEmployee/:id", controllers.singleEmployee)
router.patch("/employee/updateEmployee/:id", upload.single("employee_profile"), controllers.updateEmployee)
router.delete("/employee/deleteEmployee/:id", controllers.deleteEmployee)

module.exports = router
