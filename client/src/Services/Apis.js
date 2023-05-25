import { commonRequest } from "./ApiCall";
import { BASE_URL } from './Helper'

export const employeeRegisterFunction = async (data, header) => {
    return await commonRequest("POST", `${BASE_URL}/employee/register`, data, header)
}
export const employeeLoginFunction = async (data) => {
    return await commonRequest("POST", `${BASE_URL}/employee/login`, data)
}
export const getEmployeeFunction = async (search, gender, relocate, position, sort, page) => {
    return await commonRequest("GET", `${BASE_URL}/employee/employeeGet?search=${search}&gender=${gender}&relocate=${relocate}&position=${position}&sort=${sort}&page=${page}`, "")
}
export const singleEmployeeFunction = async (id, data, header) => {
    return await commonRequest("GET", `${BASE_URL}/employee/singleEmployee/${id}`, data, header)
}
export const updateEmployeeFunction = async (id, data, header) => {
    return await commonRequest("PATCH", `${BASE_URL}/employee/updateEmployee/${id}`, data, header)
}

export const deleteEmployeeFunction = async (id) => {
    return await commonRequest("DELETE", `${BASE_URL}/employee/deleteEmployee/${id}`, {})
}

