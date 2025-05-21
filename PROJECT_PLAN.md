# Grow a Garden Price History Website

## Project Overview
A web application to track and display price history for pets and limited fruits in the Roblox game "Grow a Garden". The site will be hosted on GitHub Pages for easy access by players.

## Core Features
1. Price History Tracking
   - Historical price data for pets and limited fruits
   - Price trends over time
   - Current market values
   - Price alerts for significant changes

2. Item Categories
   - Pets (e.g., Dragonfly, Red Fox, Raccoon, Blood Owl)
   - Limited Fruits
   - Special Items (e.g., Master Sprinklers, Night Staffs)

3. User Features
   - Search functionality
   - Filter by item type
   - Sort by price/date
   - Price comparison tools

## Technical Stack
- Frontend: HTML5, CSS3, JavaScript
- Data Storage: JSON files (for GitHub Pages compatibility)
- Charts: Chart.js for price visualization
- Hosting: GitHub Pages

## Development Phases

### Phase 1: Basic Structure
- Set up project repository
- Create basic HTML/CSS layout
- Implement item listing page
- Set up data structure

### Phase 2: Core Functionality
- Implement price history display
- Add search and filter features
- Create data input system
- Set up GitHub Pages deployment

### Phase 3: Enhanced Features
- Add price charts and graphs
- Implement price alerts
- Add user contribution system
- Optimize for mobile devices

### Phase 4: Polish & Launch
- Add final styling and UI improvements
- Implement data validation
- Add documentation
- Launch on GitHub Pages

## Data Structure
```json
{
  "items": {
    "pets": {
      "dragonfly": {
        "name": "Dragonfly",
        "prices": [
          {
            "date": "2024-03-20",
            "price": 1200,
            "currency": "robux"
          }
        ]
      }
    },
    "fruits": {
      "blood_kiwi": {
        "name": "Blood Kiwi",
        "prices": [
          {
            "date": "2024-03-20",
            "price": 10,
            "currency": "billion"
          }
        ]
      }
    }
  }
}
```

## Next Steps
1. Set up project repository
2. Create basic file structure
3. Implement initial HTML/CSS layout
4. Set up data collection system 