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
        <>
            <div className="update-form" >
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name='name' id='name' value={name} onChange={handleChange} />
                    <label htmlFor="price">Price: </label>
                    <input type="text" name='price' id='price' value={price} onChange={handleChange} />
                    <label htmlFor="description">Description: </label>
                    <input type="text" name='description' id='description' value={description} onChange={handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}


export default WidgetUpdate;