import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = ({widgetsArray}) => {

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
