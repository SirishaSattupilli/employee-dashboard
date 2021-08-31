import axios from 'axios';
import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

const AddUser = () => {
    let history = useHistory();
    const [employee, setEmployee] = useState({
        id:"",
        username:"",
        fullName:"",
        salary:""
    })

    const onInputChange = (e) => {
        setEmployee({...employee, [e.target.name]:e.target.value});
    }

    const {username, fullName, salary} = employee;

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("https://my-json-server.typicode.com/sirishasattupilli/employee-dashboard/employees", employee);
        history.push("/");
    }

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add Employee</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg mb-3" placeholder="Enter Employee ID" name="id" onChange={e => onInputChange(e)}/>
                    </div>                    
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg mb-3" placeholder="Enter UserName" name="username" value={username} onChange={e => onInputChange(e)}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg mb-3" placeholder="Enter FullName" name="fullName" value={fullName} onChange={e => onInputChange(e)}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg mb-3" placeholder="Enter Salary" name="salary" value={salary} onChange={e => onInputChange(e)}/>
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-primary btn-block" placeholder="Another input placeholder" type="submit">Add Employee</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddUser
