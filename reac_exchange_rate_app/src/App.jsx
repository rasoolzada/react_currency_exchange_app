import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CurrencyConverter from './Components/CurrencyConverter';
import Favorites from './Components/Favorites';
import './App.css';

function App() {
    const [rates, setRates] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [favoritePairs, setFavoritePairs] = useState([]);

    useEffect(() => {
        fetchRates();
        const interval = setInterval(fetchRates, 60000); 
        return () => clearInterval(interval);
    }, []);

    const fetchRates = () => {
        axios.get('https://v6.exchangerate-api.com/v6/51e5de80de1e65048923d5dd/latest/USD')
            .then(response => {
                setRates(response.data.conversion_rates);
                setLoading(false);
            })
            .catch(error => {
                setError('Error fetching exchange rates');
                setLoading(false);
            });
    };

    const addFavoritePair = (base, target) => {
        setFavoritePairs([...favoritePairs, { base, target }]);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="app">
            <h1>Currency Exchange</h1>
            <CurrencyConverter rates={rates} onAddFavorite={addFavoritePair} />
            <Favorites favoritePairs={favoritePairs} rates={rates} />
        </div>
    );
}

export default App;
