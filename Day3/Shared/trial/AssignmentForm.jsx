import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const AssignmentForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [assignment, setAssignment] = useState({
        title: '',
        description: '',
        dueDate: ''
    });

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8080/instructor/getassignmentbyid/${id}`)
                .then(response => setAssignment(response.data))
                .catch(error => console.error('Error fetching assignment:', error));
        }
    }, [id]);

    const handleChange = (e) => {
        setAssignment({ ...assignment, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            axios.put(`http://localhost:8080/instructor/updateassignment/${id}`, assignment)
                .then(() => navigate('/assignments'))
                .catch(error => console.error('Error updating assignment:', error));
        } else {
            axios.post('http://localhost:8080/instructor/addassignment', assignment)
                .then(() => navigate('/assignments'))
                .catch(error => console.error('Error adding assignment:', error));
        }
    };

    return (
        <div>
            <h1>{id ? 'Edit Assignment' : 'Add Assignment'}</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" value={assignment.title} onChange={handleChange} placeholder="Title" required />
                <textarea name="description" value={assignment.description} onChange={handleChange} placeholder="Description" required />
                <input type="date" name="dueDate" value={assignment.dueDate} onChange={handleChange} required />
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default AssignmentForm;
