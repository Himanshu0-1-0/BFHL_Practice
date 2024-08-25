import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation hook for accessing state
import "./ResultsPage.css";

const ResultsPage = () => {
    const location = useLocation();
    const [data, setData] = useState({
        numbers: [],
        alphabets: [],
        highest_lowercase_alphabet: [],
    });
    const [selectedOptions, setSelectedOptions] = useState({
        numbers: false,
        alphabets: false,
        highest_lowercase_alphabet: false,
    });

    useEffect(() => {
        if (location.state) {
            setData(location.state);
        }
    }, [location.state]);

    const handleOptionChange = (event) => {
        const { name, checked } = event.target;
        setSelectedOptions((prev) => ({ ...prev, [name]: checked }));
    };

    return (
        <div className="results-container">
            <div className="navbar">
                <div className="navbar-item">Roll Number: {data.roll_no}</div>
                <div className="navbar-item">Email: {data.email}</div>
                <div className="navbar-item">User ID: {data.user_id}</div>
            </div>
            <div className="multiselect-container">
                <label className="select-label">
                    <input
                        type="checkbox"
                        name="numbers"
                        checked={selectedOptions.numbers}
                        onChange={handleOptionChange}
                    />
                    <span className="custom-checkbox">Numbers</span>
                </label>
                <label className="select-label">
                    <input
                        type="checkbox"
                        name="alphabets"
                        checked={selectedOptions.alphabets}
                        onChange={handleOptionChange}
                    />
                    <span className="custom-checkbox">Alphabets</span>
                </label>
                <label className="select-label">
                    <input
                        type="checkbox"
                        name="highest_lowercase_alphabet"
                        checked={selectedOptions.highest_lowercase_alphabet}
                        onChange={handleOptionChange}
                    />
                    <span className="custom-checkbox">Highest Lowercase Alphabet</span>
                </label>
            </div>
            <div className="results-display">
                {selectedOptions.numbers && (
                    <div className="result-section">
                        <h3>Numbers:</h3>
                        <ul>
                            {data.numbers.map((item, index) => (
                                <li key={index} className="result-item">{item}</li>
                            ))}
                        </ul>
                    </div>
                )}
                {selectedOptions.alphabets && (
                    <div className="result-section">
                        <h3>Alphabets:</h3>
                        <ul>
                            {data.alphabets.map((item, index) => (
                                <li key={index} className="result-item">{item}</li>
                            ))}
                        </ul>
                    </div>
                )}
                {selectedOptions.highest_lowercase_alphabet && (
                    <div className="result-section">
                        <h3>Highest Lowercase Alphabet:</h3>
                        <ul>
                            {data.highest_lowercase_alphabet.map((item, index) => (
                                <li key={index} className="result-item">{item}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ResultsPage;
