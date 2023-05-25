import React, { createContext, useState } from 'react'

export const addEmpData = createContext()
export const updateEmpData = createContext()
export const deleteEmpData = createContext()

const ContextProvider = ({ children }) => {
    const [addData, setData] = useState("")
    const [updateData, setUpdateData] = useState("")
    const [deleteData, setDeleteData] = useState("")
    return (
        <addEmpData.Provider value={{ addData, setData }}>
            <updateEmpData.Provider value={{ updateData, setUpdateData }}>
                <deleteEmpData.Provider value={{ deleteData, setDeleteData }}>
                    {children}
                </deleteEmpData.Provider>
            </updateEmpData.Provider>
        </addEmpData.Provider>
    )
}

export default ContextProvider