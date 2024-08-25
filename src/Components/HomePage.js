import React, { useState } from 'react';
import './homepage.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
    const [fields, setFields] = useState([{ value: '' }]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    // Add a new input field
    const handleAddField = () => {
        setFields([...fields, { value: '' }]);
    };

    // Remove a specific input field
    const handleRemoveField = (index) => {
        const newFields = fields.filter((_, i) => i !== index);
        setFields(newFields);
    };

    // Handle input change for a specific field
    const handleInputChange = (index, event) => {
        const newFields = [...fields];
        newFields[index].value = event.target.value;
        setFields(newFields);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Convert fields to an array
        const dataArray = fields.map(field => field.value);
        try {
            const response = await fetch('https://practice-zqg6.onrender.com/bfhl', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data: dataArray }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log(result)
            navigate('/results', { state: result });
            // Redirect to results page with response data
        } catch (error) {
            setError('Error submitting form');
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="homepage-container">
            <h1>Enter Data</h1>
            <form onSubmit={handleSubmit}>
                <div className="fields-container">
                    {fields.map((field, index) => (
                        <div key={index} className="field-item">
                            <input
                                type="text"
                                value={field.value}
                                onChange={(event) => handleInputChange(index, event)}
                                placeholder={`Field ${index + 1}`}
                                required
                            />
                            <button
                                type="button"
                                className="remove-field-button"
                                onClick={() => handleRemoveField(index)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
                <button type="button" className="add-field-button" onClick={handleAddField}>Add Field</button>
                <button type="submit" className="submit-button">Submit</button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
};

export default HomePage;
