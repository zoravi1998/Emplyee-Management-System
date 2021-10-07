import axios from 'axios';
const EMPLOYEE_API_BASE_URL="https://alpine-theory-326917.el.r.appspot.com/employees";

class EmployeeService{

    getbaseUrl(){
        return EMPLOYEE_API_BASE_URL;
    }
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL,employee);
    }
    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
    updateEmployee(employee,employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId,employee);
    }
    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL+ '/' + employeeId);
    }
}

export default new EmployeeService();