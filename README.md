# Grow a Garden Price History

A web application that tracks and displays price history for pets and limited fruits in the Roblox game "Grow a Garden". This tool helps players make informed trading decisions by providing historical price data and trends.

## Features

- Real-time price tracking for pets and limited fruits
- Historical price charts and trends
- Search and filter functionality
- Mobile-responsive design
- Price change indicators
- Last updated timestamps

## Getting Started

### Prerequisites

- A modern web browser
- Basic understanding of HTML, CSS, and JavaScript (for contributors)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/grow-garden-price-history.git
```

2. Navigate to the project directory:
```bash
cd grow-garden-price-history
```

3. Open `index.html` in your web browser to view the application.

## Contributing

We welcome contributions to improve the price history tracking system! Here's how you can help:

1. Fork the repository
2. Create a new branch for your feature
3. Make your changes
4. Submit a pull request

### Data Contribution

To contribute price data:

1. Ensure the data is accurate and verified
2. Follow the data structure format in `data/items.json`
3. Include the date and currency type
4. Submit through a pull request or issue

## Data Structure

The price data is stored in JSON format with the following structure:

```json
{
  "items": {
    "pets": {
      "item_id": {
        "name": "Item Name",
        "prices": [
          {
            "date": "YYYY-MM-DD",
            "price": number,
            "currency": "robux|billion"
          }
        ]
      }
    }
  }
}
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- The Roblox Grow a Garden community for their support
- Contributors who help maintain price data accuracy
- Chart.js for the visualization library

## Contact

For questions or suggestions, please open an issue in the repository. 