import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import './Home.css'





const Home = ({ widgetsArray }) => {

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
                {widgetsArray.map(widget => (
                    <li key={widget.id}>
                        <Link to={`/widgets/${widget.id}`}>{widget.name} - ${widget.price}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
