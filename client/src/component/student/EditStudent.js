import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditStudent = () => {
    let navigate = useNavigate();
    const{id} = useParams();
    
    const [student, setStudent] = useState({
        firstName: '',
        lastName: '',
        email: '',
        department: ''
    })
    
    const{firstName, lastName, email, department} = student;

    useEffect(()=>{loadStudent();}, []);

    const loadStudent = async()=>{
        const result = await axios.get(`http://localhost:9192/students/student/${id}`);
        setStudent(result.data);
    };
    
    const handleInputChange = (e)=>{
        setStudent({...student, [e.target.name] : e.target.value});
    };
    
    const updateStudent = async(e) => {
        e.preventDefault();
        await axios.put(`http://localhost:9192/students/update/${id}`, student);
        navigate("/view-students");
    };
    
      return (
        <div className='col-sm-8 py-5 px-5 offset-2 shadow'>
            <h2 className='mb-4'>Edit student profile</h2>
            <form onSubmit={(e) => updateStudent(e)}>
    
                <div className='form-group row mb-4'>
                    <label htmlFor='firstName' className='col-sm-2 col-form-label text-right'>First Name</label>
                    <div className='col-sm-8'>
                        <input
                            type='text'
                            className='form-control'
                            id='firstName'
                            name='firstName'
                            value={firstName}
                            onChange={(e) => handleInputChange(e)}
                            required
                        />
                    </div>
                </div>
    
                <div className='form-group row mb-4'>
                    <label htmlFor='lastName' className='col-sm-2 col-form-label text-right'>Last Name</label>
                    <div className='col-sm-8'>
                        <input
                            type='text'
                            className='form-control'
                            id='lastName'
                            name='lastName'
                            value={lastName}
                            onChange={(e) => handleInputChange(e)}
                            required
                        />
                    </div>
                </div>
    
                <div className='form-group row mb-4'>
                    <label htmlFor='email' className='col-sm-2 col-form-label text-right'>Email</label>
                    <div className='col-sm-8'>
                        <input
                            type='email'
                            className='form-control'
                            id='email'
                            name='email'
                            value={email}
                            onChange={(e) => handleInputChange(e)}
                            required
                        />
                    </div>
                </div>
    
        
    
                <div className='form-group row mb-4'>
                    <label htmlFor='department' className='col-sm-2 col-form-label text-right'>Department</label>
                    <div className='col-sm-8'>
                        <input
                            type='text'
                            className='form-control'
                            id='department'
                            name='department'
                            value={department}
                            onChange={(e) => handleInputChange(e)}
                            required
                        />  
                    </div>
                </div>
    
                <div className='row mt-4'>
                    <div className='col-sm-8 offset-sm-2'>
                        <button type='submit' className='btn btn-outline-success btn-lg' style={{ marginRight: '15px' }}>
                            Save
                        </button>
                        <Link to='/view-students' type='submit' className='btn btn-outline-warning btn-lg'>
                            Cancel
                        </Link>
                    </div>
                </div>
    
            </form>
        </div>
    )
}

export default EditStudent