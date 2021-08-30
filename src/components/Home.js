import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BsTrash, BsPencil, BsEye } from 'react-icons/bs'

const Home = () => {
    const [employees, setEmployee] = useState([]);

    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = async () => {
        const result = await axios.get("http://localhost:3003/employees");
        setEmployee(result.data.reverse());
    }

    const deleteEmployee = async id => {
        await axios.delete(`http://localhost:3003/employees/${id}`);
        loadEmployees();
    }


    return (
        <div className="container">
            <div className="py-4">
                <h1 className="text-center">Home Page</h1>
                <table className="table border shadow table-striped">
                <caption>List of employees</caption>
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Employee Id</th>
                            <th scope="col">Login</th>
                            <th scope="col">Name</th>
                            <th scope="col">Salary</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map((employee) => (
                                <tr>
                                <th scope="col">{employee.id}</th>
                                <td>{employee.username}</td>
                                <td>{employee.fullName}</td>
                                <td>{employee.salary}</td>
                                <td>
                                    <Link className="btn btn-primary me-2" to={`/employees/${employee.id}`}>< BsEye /></Link>
                                    <Link className="btn btn-outline-primary me-2" to={`/employees/edit/${employee.id}`}><BsPencil /></Link>
                                    <Link className="btn btn-danger" onClick={() => deleteEmployee(employee.id)}>< BsTrash /></Link>
                                </td>
                                </tr>    
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home
