import httpclient from "../commons/httpclient";


const getHello = () => {
    return httpclient.get('/hello');
}

const getEmployees = () => {
    return httpclient.get('/employee');

}

const postEmployee = (data) => {
    return httpclient.post('/employee', data);
}

const putEmployee = (data) => {
    return httpclient.put('/employees', data)
}

const getEmployee = (employeeId) => {
    return httpclient.get('/employee')
}

const deleteEmployee = (employeeId) => {
    return httpclient.delete(`/employee/${employeeId}`)
}


export default {getEmployees, postEmployee, putEmployee, getEmployee, deleteEmployee}