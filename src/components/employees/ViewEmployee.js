import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BsHouseDoor } from 'react-icons/bs'

const ViewEmployee = () => {
    const [employee, setEmployee] = useState({
        eid: "",
        username: "",
        fullName: "",
        salary: ""
    });

    const { id } = useParams();

    useEffect(() => {
        const loadEmployee = async () => {
            const result = await axios.get(`http://localhost:3003/employees/${id}`);
            setEmployee(result.data);
        }
        loadEmployee();
    }, [id]);

    return (
        <div className="container py-4">
            <Link className="btn btn-primary" to="/">
                < BsHouseDoor /> Back to HomePage
            </Link>
            <h1 className="display-4">Employee Id: {id}</h1>
            <hr />
            <ul className="list-group w-50">
                <li className="list-group-item"><strong>Id: </strong>{id}</li>
                <li className="list-group-item"><strong>Username: </strong>{employee.username}</li>
                <li className="list-group-item"><strong>Full Name: </strong>{employee.fullName}</li>
                <li className="list-group-item"><strong>Salary: </strong>{employee.salary}</li>
            </ul>
        </div>
    )
}

export default ViewEmployee
