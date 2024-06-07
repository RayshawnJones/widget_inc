// Base url: VITE_BACK_END_SERVER_URL in .env file
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}api/widgets/`;


// Fetch all widgets
const index = async () => {
    try {
        const res = await fetch(BASE_URL);
        return res.json();
    } catch (err) {
        console.log(err);
    }
};

// "Show" data for specific widget
const show = async (widgetId) => {
    // Defines proper URL for the request
    const REQ_URL = BASE_URL + widgetId

    try {
        const res = await fetch(REQ_URL)
        const data = await res.json()
        return data
    } catch (err) {
        console.log(err)
    }
}

// Create a new widget
const create = async (widget) => {
	try {
		const res = await fetch(BASE_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(widget),
		});
		return res.json();
	} catch (err) {
		console.log(err);
	}
};

// Update a widget
const updateWidget = async (widget, widgetId) => {

    const REQ_URL = BASE_URL + widgetId
    try {
        await fetch(REQ_URL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(widget),
        });
    } catch (err) {
        console.log(err);
    }

};

// Delete a widget
const deleteWidget = async (widgetId) => {

    const REQ_URL = BASE_URL + widgetId
    try {
        const res = await fetch(REQ_URL, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const deletedWidget = await res.json();
        return deletedWidget;
    } catch (err) {
        console.log(err);
    }
}

// Export the functions
export { index, show, create, updateWidget, deleteWidget };

