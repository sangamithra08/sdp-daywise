import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const MaterialForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [material, setMaterial] = useState({
        title: '',
        type: '',
        url: ''
    });

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8080/instructor/getmaterialbyid/${id}`)
                .then(response => setMaterial(response.data))
                .catch(error => console.error('Error fetching material:', error));
        }
    }, [id]);

    const handleChange = (e) => {
        setMaterial({ ...material, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            axios.put(`http://localhost:8080/instructor/updatematerial/${id}`, material)
                .then(() => navigate('/materials'))
                .catch(error => console.error('Error updating material:', error));
        } else {
            axios.post('http://localhost:8080/instructor/addmaterial', material)
                .then(() => navigate('/materials'))
                .catch(error => console.error('Error adding material:', error));
        }
    };

    return (
        <div>
            <h1>{id ? 'Edit Material' : 'Add Material'}</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" value={material.title} onChange={handleChange} placeholder="Title" required />
                <input type="text" name="type" value={material.type} onChange={handleChange} placeholder="Type" required />
                <input type="text" name="url" value={material.url} onChange={handleChange} placeholder="URL" required />
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default MaterialForm;
