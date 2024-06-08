import './update.css';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import React from 'react';
import * as widgetService from '../../../services/WidgetService'

const WidgetUpdate = () => {
    const navigate = useNavigate()
    const { widgetId } = useParams();
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: ''
    })

    useEffect(() => {
        axios
            .get(`http://3.14.175.247:8000/api/widgets/${widgetId}`)
            .then((response) => setFormData(response.data))
            .catch((error) =>
                console.error("There was an error fetching the widget!", error)
            );

    }, [widgetId]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('this is running');
        await widgetService.updateWidget(formData, widgetId);
        navigate('/widgets');
    };



    const { name, price, description } = formData;

    return (
        <div id="update-wrapper" >
            <h1>Edit Widget</h1>
            <div id="update-container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name: </label><br />
                    <input type="text" name='name' id='name' value={name} onChange={handleChange} /><br />
                    <label htmlFor="price">Price: </label><br />
                    <input type="text" name='price' id='price' value={price} onChange={handleChange} /><br />
                    <label htmlFor="description">Description: </label><br />
                    <input type="text" name='description' id='description' value={description} onChange={handleChange} /><br />
                    <div className="button-container">
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default WidgetUpdate;