import React, { useState } from 'react';
import axios from 'axios';

const CourseForm = () => {
    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
    const [durationHrs, setDurationHrs] = useState('');
    const [durationMins, setDurationMins] = useState('');
    const [reviews, setReviews] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        axios.post('http://localhost:8080/instructor/addcourse', {
            title, img, durationHrs, durationMins, reviews
        }, {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => {
            // Handle success
            console.log('Course added:', response.data);
        })
        .catch(error => {
            console.error('Error adding course:', error);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Course</h2>
            <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>Image URL:</label>
                <input type="text" value={img} onChange={(e) => setImg(e.target.value)} required />
            </div>
            <div>
                <label>Duration Hours:</label>
                <input type="number" value={durationHrs} onChange={(e) => setDurationHrs(e.target.value)} required />
            </div>
            <div>
                <label>Duration Minutes:</label>
                <input type="number" value={durationMins} onChange={(e) => setDurationMins(e.target.value)} required />
            </div>
            <div>
                <label>Reviews:</label>
                <input type="number" value={reviews} onChange={(e) => setReviews(e.target.value)} required />
            </div>
            <button type="submit">Add Course</button>
        </form>
    );
};

export default CourseForm;
