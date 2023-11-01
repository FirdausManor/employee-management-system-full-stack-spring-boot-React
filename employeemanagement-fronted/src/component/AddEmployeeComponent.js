import React, { useState, useEffect } from 'react'
import EmployeeService from '../service/EmployeeService';
import { Link, useNavigate, useParams } from 'react-router-dom';

const AddEmployeeComponent = () => {
/** Variables and Method to collect and store inputes */    
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [age, setAge] = useState('');
const [gender, setGender] = useState('');
const [department, setDepartment] = useState('');
const [level, setLevel] = useState('');
const [email, setEmail] = useState('');
const navigate = useNavigate();
const {id} = useParams();

const employeeData = {firstName, lastName, age, gender, department, level, email};

/** Send data to api and navigate when successful */
function saveEmployee(e) {
    e.preventDefault();
    if (employeeData.firstName !=="" && employeeData.lastName !==""
    && employeeData.age !=="" && employeeData.gender !==""
    && employeeData.department  !=="" && employeeData.level !==""
    && employeeData.email !=="") {

        if (id) {
            EmployeeService.updateEmployee(id, employeeData)
            .then(navigate("/employee"))
            .catch(e=>console.log(e));
        } else {
            EmployeeService.saveEmployee(employeeData)
            .then(navigate("/employee"))
            .catch(e=>console.log(e));
        }

    } else {
        alert("Please, fill in all inputes");
    }
}

function title() {
    if (id) {
        return "Update Employee";
    } else {
        return "Add Employee";
    }
}

useEffect(()=> {
    if (id) {
        EmployeeService.getEmployeeById(id)
        .then(res=>{
            setFirstName(res.data.firstName);
            setLastName(res.data.lastName);
            setAge(res.data.age);
            setGender(res.data.gender);
            setDepartment(res.data.department);
            setLevel(res.data.level);
            setEmail(res.data.email);
        })
        .catch((e)=>console.log(e));
    }
},[]);

  return (
    <div>
        <div className='container mt-5'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3'>
                    <h2 className='text-center'>{title()}</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <input className='form-control' 
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                type="text" placeholder='Enter First Name' />
                            </div>
                            <div className='form-group mb-2'>
                                <input className='form-control' 
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                type="text" placeholder='Enter Last Name' />
                            </div>
                            <div className='form-group mb-2'>
                                <input className='form-control' 
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                type="text" placeholder='Enter Age' />
                            </div>
                            <div className='form-group mb-2'>
                                <input className='form-control' 
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                type="text" placeholder='Enter Gender' />
                            </div>
                            <div className='form-group mb-2'>
                                <input className='form-control' 
                                value={department}
                                onChange={(e) => setDepartment(e.target.value)}
                                type="text" placeholder='Enter Department' />
                            </div>
                            <div className='form-group mb-2'>
                                <input className='form-control' 
                                value={level}
                                onChange={(e) => setLevel(e.target.value)}
                                type="text" placeholder='Enter Level' />
                            </div>
                            <div className='form-group mb-2'>
                                <input className='form-control' 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email" placeholder='Enter Email' />
                            </div>
                            <button onClick={(e)=>saveEmployee(e)} className='btn btn-success'>Save</button> {" "}
                            <Link to={"/employee"} className='btn btn-danger' href="">Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddEmployeeComponent