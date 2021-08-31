import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

const EditUser = () => {
    let history = useHistory();
    const { id } = useParams();
    //alert(id);
    const [employee, setEmployee] = useState({
        username: "",
        fullName: "",
        salary: ""
    })

    const { username, fullName, salary } = employee;

    const onInputChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        const loadUser = async () => {
            const result = await axios.get(`https://my-json-server.typicode.com/sirishasattupilli/employee-dashboard/employees/${id}`);
            setEmployee(result.data);
        }
        loadUser();
    }, [id]);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`https://my-json-server.typicode.com/sirishasattupilli/employee-dashboard/employees/${id}`, employee);
        history.push("/");
    }

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5 row justify-content-center">
                <h2 className="text-center mb-4">Edit Employee</h2>
                <form onSubmit={e => onSubmit(e)}>
                        <div className="form-group row">
                            <label label htmlFor="exampleEmployeeId" class="col-lg-2 col-form-label">Employee Id</label>
                            <div class="col-lg-5">
                                <input type="text" className="form-control-plaintext form-control-lg mb-3" placeholder="Enter Employee ID" name="id" value={id} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label label htmlFor="exampleUserName" class="col-lg-2 col-form-label">UserName</label>
                            <div class="col-lg-5">
                                <input type="text" className="form-control form-control-lg mb-3" placeholder="Enter UserName" name="username" value={username} onChange={e => onInputChange(e)} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label label htmlFor="exampleFullName" class="col-lg-2 col-form-label">FullName</label>
                            <div class="col-lg-5">
                                <input type="text" className="form-control form-control-lg mb-3" placeholder="Enter FullName" name="fullName" value={fullName} onChange={e => onInputChange(e)} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label label htmlFor="exampleSalary" class="col-lg-2 col-form-label">Salary</label>
                            <div class="col-lg-5">
                                <input type="text" className="form-control form-control-lg mb-3" placeholder="Enter Salary" name="salary" value={salary} onChange={e => onInputChange(e)} />
                            </div>
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-warning btn-block" placeholder="Another input placeholder" type="submit">Update Employee</button>
                        </div>
                </form>
            </div>
        </div>
    )
}

export default EditUser
