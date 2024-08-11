import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListLearningMaterials = () => {
    const [materials, setMaterials] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/instructor/getallmaterial')
            .then(response => setMaterials(response.data))
            .catch(error => console.error('Error fetching materials:', error));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/instructor/deletematerial/${id}`)
            .then(() => setMaterials(materials.filter(material => material.id !== id)))
            .catch(error => console.error('Error deleting material:', error));
    };

    return (
        <div>
            <h1>Learning Materials</h1>
            <Link to="/materials/add">Add Material</Link>
            <ul>
                {materials.map(material => (
                    <li key={material.id}>
                        {material.title}
                        <button onClick={() => handleDelete(material.id)}>Delete</button>
                        <Link to={`/materials/edit/${material.id}`}>Edit</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListLearningMaterials;
