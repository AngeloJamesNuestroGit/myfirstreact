
import { useEffect, useState } from "react"
import employeeService from "../services/employeeService"
import { Link } from "react-router-dom"
import { Button } from "bootstrap"

const Employee = () => {

    const[employees, setEmployees] = useState([])

    useEffect(
        () => {
                refreshEmployeeTable();
             }
        )

    const refreshEmployeeTable = () => {
        employeeService.getEmployees()
                .then (
                response => {
                    setEmployees(response.data);
                    }
                )
                .catch  (
                    () => {
                        console.log("Sorry, task failed")
                    }
                )   
    }

    const deleteEmployee = (employeeId) => {
        employeeService.deleteEmployee(employeeId)
        .then(
            response => {
                console.log("successfully deleted")
            }
        )
        .catch(
            error => {
                console.log("something went wrong", error)            }
        )

    }

    /*   */

    return (
      <div>
            <h3> List of Employees </h3>
            <div>
                <table className="table table-light table-hover table-striped table-danger">
                <thead>
                    <tr>    
                        <td>Name</td>
                        <td>Location</td>
                        <td>Department</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                    <tbody> 
                        {
                        employees.map   (
                            employee => (
                                <tr key={employee.employeeId}>
                                    <td>{employee.name}</td>
                                    <td>{employee.department}</td>
                                    <td>{employee.location}</td>
                                    <td>
                                        <div  className="d-grid gap-2 d-md-flex justify-content-md-end">
                                            <Link className="btn btn-primary" to={`/edit/${employee.employeeId}`}>Update</Link>
                                            <button className="btn btn-danger" onClick={() => deleteEmployee(employee.employeeId)}>Delete</button>
                                        </div>
                                     </td>
                                </tr>
                                    )
                            )
                    
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Employee;