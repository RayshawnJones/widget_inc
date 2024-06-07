import { useState } from "react";
import * as WidgetServices from '../../services/WidgetService';
import './Create.css';

const CreateWidget = ({ addWidget }) => {
    const [inputWidget, setInputWidget] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    // Updates the input fields with the current state
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'widget':
                setInputWidget(value);
                break;
            case 'name':
                setName(value);
                break;
            case 'price':
                setPrice(value);
                break;
            case 'description':
                setDescription(value);
                break;
            default:
                break;
        }
    };

    // Creates a new widget and resets the inputs
    const handleSubmit = async (event) => {
        event.preventDefault();

        const newWidgetData = {
            widget: inputWidget,
            name: name,
            price: price,
            description: description
        };

        // Store new widget data returned from the service page routes
        const newWidget = await WidgetServices.create(newWidgetData);

        if (newWidget) {
            addWidget(newWidget); // Updates state in App.jsx
        }

        // Reset input fields
        setInputWidget('');
        setName('');
        setPrice('');
        setDescription('');
    };

    return <>
        <h1 className = 'create-header'>Create a New Widget</h1>
        <div className='add-widget-container'>
            <form className='add-widget' onSubmit={handleSubmit}>
                <input
                    type="text"
                    required
                    placeholder='Name'
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    required
                    placeholder='Price'
                    name="price"
                    value={price}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    required
                    placeholder='Description'
                    name="description"
                    value={description}
                    onChange={handleInputChange}
                />
                <button type="submit">+</button>
            </form>
        </div>
    </>
};

export default CreateWidget;
