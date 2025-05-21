// Sample data structure - this will be replaced with actual data from a JSON file
const sampleData = {
    items: {
        pets: {
            dragonfly: {
                name: "Dragonfly",
                prices: [
                    { date: "2024-03-20", price: 1200, currency: "robux" },
                    { date: "2024-03-19", price: 1100, currency: "robux" }
                ]
            },
            red_fox: {
                name: "Red Fox",
                prices: [
                    { date: "2024-03-20", price: 800, currency: "robux" },
                    { date: "2024-03-19", price: 750, currency: "robux" }
                ]
            }
        },
        fruits: {
            blood_kiwi: {
                name: "Blood Kiwi",
                prices: [
                    { date: "2024-03-20", price: 10, currency: "billion" },
                    { date: "2024-03-19", price: 9.5, currency: "billion" }
                ]
            }
        }
    }
};

// DOM Elements
const itemsContainer = document.getElementById('items-container');
const searchInput = document.getElementById('search');
const categoryFilter = document.getElementById('category-filter');
const priceChart = document.getElementById('priceChart');
const lastUpdated = document.getElementById('last-updated');

// Initialize the application
function init() {
    loadItems();
    setupEventListeners();
    updateLastUpdated();
}

// Load items into the grid
function loadItems(filter = '') {
    itemsContainer.innerHTML = '';
    
    Object.entries(sampleData.items).forEach(([category, items]) => {
        Object.entries(items).forEach(([id, item]) => {
            if (filter && !item.name.toLowerCase().includes(filter.toLowerCase())) {
                return;
            }
            
            const card = createItemCard(category, id, item);
            itemsContainer.appendChild(card);
        });
    });
}

// Create an item card
function createItemCard(category, id, item) {
    const card = document.createElement('div');
    card.className = 'item-card';
    
    const latestPrice = item.prices[0];
    const priceChange = calculatePriceChange(item.prices);
    
    card.innerHTML = `
        <h3>${item.name}</h3>
        <p class="price">${latestPrice.price} ${latestPrice.currency}</p>
        <p class="price-change ${priceChange >= 0 ? 'positive' : 'negative'}">
            ${priceChange >= 0 ? '+' : ''}${priceChange}%
        </p>
        <button onclick="showPriceHistory('${category}', '${id}')">View History</button>
    `;
    
    return card;
}

// Calculate price change percentage
function calculatePriceChange(prices) {
    if (prices.length < 2) return 0;
    const latest = prices[0].price;
    const previous = prices[1].price;
    return ((latest - previous) / previous * 100).toFixed(1);
}

// Show price history chart
function showPriceHistory(category, id) {
    const item = sampleData.items[category][id];
    const ctx = priceChart.getContext('2d');
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: item.prices.map(p => p.date),
            datasets: [{
                label: item.name,
                data: item.prices.map(p => p.price),
                borderColor: '#4CAF50',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });
}

// Setup event listeners
function setupEventListeners() {
    searchInput.addEventListener('input', (e) => {
        loadItems(e.target.value);
    });
    
    categoryFilter.addEventListener('change', (e) => {
        // Implement category filtering
    });
}

// Update last updated timestamp
function updateLastUpdated() {
    const now = new Date();
    lastUpdated.textContent = now.toLocaleString();
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', init); 