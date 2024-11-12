# Currency Converter App

A responsive React application for real-time currency conversion. This app provides a user-friendly interface, customizable options, and allows users to save their favorite currency pairs for easy access.

## Features

- **Real-Time Exchange Rates**: Fetches the latest exchange rates to ensure accurate conversions.
- **Customizable Options**: Supports a wide range of currencies for conversion and allows users to adjust settings to their preference.
- **Favorite Pairs**: Users can save frequently used currency pairs for quick access.
- **Responsive Design**: Optimized for all screen sizes, making it accessible on desktop, tablet, and mobile devices.

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **Vite**: Build tool for fast development and optimized production builds.
- **ExchangeRate-API**: Reliable API for fetching up-to-date exchange rates.
- **Axios**: Promise-based HTTP client used for making API requests.
- **CSS**: Custom styling for responsive design and user interface enhancements.


## Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed. You can download them [here](https://nodejs.org/).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/reac_exchange_rate_app.git

### API Configuration
The app uses ExchangeRate-API to fetch the latest currency exchange rates. Set up the API key and endpoint in the project’s environment variables:


```bash
REACT_APP_API_KEY=your_api_key
REACT_APP_API_URL=https://v6.exchangerate-api.com/v6/
```
