import './update.css';

const WidgetUpdate = () => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        //TODO
    }



    const { name, price, description } = formData;

    return (
        <>
            <div className="update-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" name='name' id='name' value={name} onChange={handleChange} />
                <label htmlFor="price">Price: </label>
                <input type="text" name='price' id='price' value={price} onChange={handleChange} />
                <label htmlFor="description">Description: </label>
                <input type="text" name='description' id='description' value={description} onChange={handleChange} />
                <button>Submit</button>
            </div>
        </>
    )
}


export default WidgetUpdate;