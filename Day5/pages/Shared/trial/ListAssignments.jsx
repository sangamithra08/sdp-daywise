import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListAssignments = () => {
    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/instructor/getallassignments')
            .then(response => setAssignments(response.data))
            .catch(error => console.error('Error fetching assignments:', error));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/instructor/deleteassignment/${id}`)
            .then(() => setAssignments(assignments.filter(assignment => assignment.id !== id)))
            .catch(error => console.error('Error deleting assignment:', error));
    };

    return (
        <div>
            <h1>Assignments</h1>
            <Link to="/assignments/add">Add Assignment</Link>
            <ul>
                {assignments.map(assignment => (
                    <li key={assignment.id}>
                        {assignment.title}
                        <button onClick={() => handleDelete(assignment.id)}>Delete</button>
                        <Link to={`/assignments/edit/${assignment.id}`}>Edit</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListAssignments;
