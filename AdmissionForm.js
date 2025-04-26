import React, { UseState } from 'react';
import './AdmissionFrom.css';

function AdmissionFrom() {
    const [formData, setFormData] = UseState({
        firstName: '',
        lastname:'',
        email:'',
        dob:'',
       grade:'',
           });

           const handleChange = (event) => {
            const { name, value } = event.target;
            setFormData((prevData) => ({
                ...prevData,
                {name}:value
            }));
           };

           const handleSubmit = (event) => {
            event.preventDefault();
            console.log("Submit Form Data:", formData);
            // Here you can add API calls or further processing logic
           };

return (
    <div className='form-container'>
        <h2>University Admisssion Form</h2>
        <form onSubmit={handleSubmit}>
            <label>
                First Name:
                <input
                type='text'
                name='firstname'
                value={formData.firstName}
                onChange={handleChange}
                required
                />
            </label>

            <label>
                Last name:
                <input
                type='text'
                name='lastName'
                value={formData.lastname}
                onChange={handleChange}
                required
                />
            </label>

            <label>
                Email:
                <input
                type='email'
                name='email'
                value={formData.email}
            </label>
        </form>
    </div>
)