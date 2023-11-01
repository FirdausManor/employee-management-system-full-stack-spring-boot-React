import axios from "axios";

const BASE_URL = "http://localhost:8080/employee";
class EmployeeService {
    //** Method to get all employee from our api to database */
    getAllEmployee() {
        return axios.get(BASE_URL);
    }

    getEmployeeById(id) {
        return axios.get(`${BASE_URL}/${id}`);
    }

    //** Method to save employee from our api to database */
    saveEmployee(employeeData) {
        return axios.post(BASE_URL, employeeData);
    }

    updateEmployee(id, employeeData) {
        return axios.put(`${BASE_URL}/${id}`, employeeData)
    }

    deleteEmployee(id) {
        return axios.delete(BASE_URL + "/" + id)
    }
}
export default new EmployeeService();