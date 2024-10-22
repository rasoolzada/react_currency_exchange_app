import React from 'react';

const currencySymbols = {
    USD: '$', EUR: '€', GBP: '£', JPY: '¥', INR: '₹', AED: 'د.إ',

};

function Favorites({ favoritePairs, rates }) {
    return (
        <div className="favorites">
            <h2>Favorite Currency Pairs</h2>
            <ul>
                {favoritePairs.map((pair, index) => {
                    const conversionRate = (rates[pair.target] / rates[pair.base]).toFixed(4);
                    return (
                        <li key={index}>
                            {currencySymbols[pair.base]} {pair.base} → {currencySymbols[pair.target]} {pair.target}: {conversionRate}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Favorites;
