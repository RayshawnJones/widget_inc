import { useState } from "react";
import * as WidgetServices from 'frontend/src/services/WidgetService.js'
import './Create.css'

const CreateWidget = ({ addWidget }) => {
    const [inputWidget, setInputWidget] = useState('');

    // Updates the input field with the current Input state
    const handleInputChange = (event) => {
        setInputWidget(event.target.value)
    };

    // Creates a new list and resets the input
    const handleSubmit = async (event) => {
        event.preventDefault()


        // Store new widget data return from the service page routes
        const newWidget = await WidgetServices.create(inputWidget)

        if (newWidget) {
            addWidget(newWidget); // Updates state in App.jsx
        }

        setInputWidget('') // Resets inputWidget to empty string
    }

    return <>
        <div className='add-widget-container'>
            <form className='add-widget' onSubmit={handleSubmit}>
                <input type="text" required placeholder='Create New Widget'
                    value={inputWidget} onChange={handleInputChange} />
                <button type="submit">+</button>
            </form>
        </div>
    </>
};


export default CreateWidget

