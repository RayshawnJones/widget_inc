// frontend/src/components/home/Home.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [widgets, setWidgets] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/widgets/')
            .then(response => {
                setWidgets(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the widgets!', error);
            });
    }, []);

    return (
        <div>
            <h1>Welcome to Widget Inc.</h1>
            <ul>
                {widgets.map(widget => (
                    <li key={widget.id}>
                        <Link to={`/widgets/${widget.id}`}>{widget.name} - ${widget.price}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
