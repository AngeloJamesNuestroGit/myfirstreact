

import employeeService from "../services/employeeService"
import {useEffect, useState} from "react"

const Employee = () => {
    const[employees, setEmployees] = useState([])

    useEffect(
        () => {
                employeeService.getEmployees()
                .then (
                        response => {
                            setEmployees(response.data)
                    }
                )
                .catch  (
                    () => {
                        console.log("Sorry, task failed")
                    }
                )
            
        }
    )

    return(
        <div>
            <h3> List of Employees </h3>
            <div>
                <table border = "1">
                <tr>
                        <td>Name</td>
                        <td>Location</td>
                        <td>Department</td>
                </tr>
                {
                    employees.map   (
                        employee => (
                        <tr>

                        <td>{employee.name}</td>
                        <td>{employee.department}</td>
                        <td>{employee.location}</td>

                        </tr>
                        )
                    )
                }
                </table>
            </div>
        </div>
    )
}

export default Employee