import React, { useState } from 'react';

const currencySymbols = {
    USD: '$', EUR: '€', GBP: '£', JPY: '¥', INR: '₹', AED: 'د.إ',
};

function CurrencyConverter({ rates, onAddFavorite }) {
    const [baseCurrency, setBaseCurrency] = useState('USD');
    const [targetCurrency, setTargetCurrency] = useState('EUR');
    const [amount, setAmount] = useState(1);

    const handleAmountChange = (e) => setAmount(e.target.value);
    const handleBaseCurrencyChange = (e) => setBaseCurrency(e.target.value);
    const handleTargetCurrencyChange = (e) => setTargetCurrency(e.target.value);

    const convertedAmount = (amount * rates[targetCurrency] / rates[baseCurrency]).toFixed(2);

    const handleReverseCurrencies = () => {
        setBaseCurrency(targetCurrency);
        setTargetCurrency(baseCurrency);
    };

    const handleAddFavorite = () => {
        onAddFavorite(baseCurrency, targetCurrency);
    };

    return (
        <div>
            <div className="converter">
                <div className="currency-input">
                    <input
                        type="number"
                        value={amount}
                        onChange={handleAmountChange}
                        min="1"
                    />
                    <select value={baseCurrency} onChange={handleBaseCurrencyChange}>
                        {Object.keys(rates).map((currency) => (
                            <option key={currency} value={currency}>
                                {currencySymbols[currency] ? `${currencySymbols[currency]} ${currency}` : currency}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="equals">
                    =
                </div>

                <div className="currency-output">
                    <input
                        type="text"
                        value={convertedAmount}
                        readOnly
                    />
                    <select value={targetCurrency} onChange={handleTargetCurrencyChange}>
                        {Object.keys(rates).map((currency) => (
                            <option key={currency} value={currency}>
                                {currencySymbols[currency] ? `${currencySymbols[currency]} ${currency}` : currency}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <button className="reverse-btn" onClick={handleReverseCurrencies}>
                Reverse Currencies
            </button>

            <button className="favorite-btn" onClick={handleAddFavorite}>
                Add to Favorites
            </button>

            <p className="conversion-rate">
                1 {baseCurrency} = {convertedAmount} {targetCurrency}
            </p>
        </div>
    );
}

export default CurrencyConverter;
