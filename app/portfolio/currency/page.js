'use client';

import { useState } from 'react';
import styles from './currency.module.css';

export default function CurrencyConverter() {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = '71c2455fdc96b626b6dc1c09';
  const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/`;

  const handleConversion = async () => {
    setLoading(true);
    setError(null);
    try {
      // Fetch exchange rates for the selected base currency
      const response = await fetch(`${API_URL}${fromCurrency}`);
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error:', errorText);
        throw new Error(`Error fetching exchange rates: ${errorText}`);
      }

      const data = await response.json();
      const exchangeRate = data.conversion_rates[toCurrency];

      if (!exchangeRate) {
        throw new Error('Invalid target currency or exchange rate not found.');
      }

      // Perform conversion
      const convertedAmount = (amount * exchangeRate).toFixed(2);
      setResult(convertedAmount);
    } catch (err) {
      console.error('Error fetching conversion rates:', err);
      setError(err.message || 'An error occurred while fetching conversion rates.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Currency Converter</h1>
      <div className={styles.form}>
        <label className={styles.label} htmlFor="fromCurrency">From Currency:</label>
        <select
          className={styles.select}
          id="fromCurrency"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="INR">INR</option>
        </select>

        <label className={styles.label} htmlFor="toCurrency">To Currency:</label>
        <select
          className={styles.select}
          id="toCurrency"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="INR">INR</option>
        </select>

        <label className={styles.label} htmlFor="amount">Amount:</label>
        <input
          className={styles.input}
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />

        <button
          className={styles.button}
          onClick={handleConversion}
          disabled={loading}
        >
          {loading ? 'Converting...' : 'Convert'}
        </button>
      </div>

      {error && <div className={styles.error}>{error}</div>}
      {result && (
        <div className={styles.result}>
          <p>
            {amount} {fromCurrency} = {result} {toCurrency}
          </p>
        </div>
      )}
    </div>
  );
}
