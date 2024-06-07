//It imports necessary modules and hooks from React, axios for making HTTP requests, and some components from react-router-dom for routing.
import React, { useEffect, useState } from "react"; 
import axios from "axios";
import { useParams, Link } from "react-router-dom";

//ShowWidget is a functional component that displays details about a specific widget. A widget could be any item or product.Uses the useState hook to create a state variable widget and a function setWidget to update it. Initially, widget is set to null.
const ShowWidget = () => {
  const [widget, setWidget] = useState(null);
  const { widgetId } = useParams();
  
  //useEffect hook is used to perform side effects in the component. In this case, it makes an HTTP GET request to fetch data about the widget with the id widgetId from a server running on localhost:8000. If the request is successful, it updates the widget state with the data received. If there's an error, it logs the error message.

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/widgets/${widgetId}`)
      .then((response) => setWidget(response.data))
      .catch((error) =>
        console.error("There was an error fetching the widget!", error)
      );
  }, [widgetId]);

  // widget is null (which means the data is not yet fetched), it returns a div with the text "Loading...".
  if (!widget) {
    return <div>Loading...</div>;
  }
// the data is fetched and widget is updated, it returns a div that displays the widget's details: name, price, and description. It also includes a link to go back to the list of widgets.
  return (
    <div>
      <h1>Widget Details</h1>
      <p>Name: {widget.name}</p>
      <p>Price: ${widget.price}</p>
      <p>Description: {widget.description}</p>
      <Link to="/widgets">Back to List</Link>
    </div>
  );
};

export default ShowWidget;
