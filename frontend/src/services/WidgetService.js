// Base url: VITE_BACK_END_SERVER_URL in .env file
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/widgets/`;


// Fetch all widgets
const index = async () => {
	try {
		const res = await fetch(BASE_URL);
		return res.json();
	} catch (err) {
		console.log(err);
	}
};

// Create a new widget
const create = async (widget) => {
	try {
		const res = await fetch(BASE_URL, {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(widget),
		});
		return res.json();
	} catch (err) {
		console.log(err);
	}
};

// Update a widget
const updateWidget = async (widget, widgetId) => {
	try {
		const res = await fetch(`${BASE_URL}/${widgetId}`, {
			method: 'PUT',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(widget),
		});
		return res.json();
	} catch (err) {
		console.log(err);
	}
};

// Delete a widget
const deleteWidget = async (widgetId) => {
	try {
		const deletedPet = await fetch(`${BASE_URL}/${widgetId}`, {
			method: 'DELETE',
			headers: {'Content-Type': 'application/json'},
		});
		return deletedPet;
	} catch (err) {
		console.log(err);
	}
}

// Export the functions
export { index, create, updateWidget, deleteWidget};