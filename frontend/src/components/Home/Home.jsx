import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';

const Home = () => {
    const [widgets, setWidgets] = useState([]);

    useEffect(() => {
        axios.get('http://3.14.175.247:8000/api/widgets/')
            .then(response => {
                setWidgets(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the widgets!', error);
            });
    }, []);

    return (
        <div id='home-wrapper'>
            <h1>Welcome to Widgets, Inc.</h1>
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
