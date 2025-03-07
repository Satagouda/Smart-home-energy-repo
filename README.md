# Smart-home-energy-repo

This project is a Smart Home Energy Monitoring Dashboard built with React.js. It helps users monitor energy consumption from various home devices, compare usage against a set budget, and visualize the data using interactive charts.

FEATURES
1) Real-time Energy Data Fetching from the backend API.
2) Interactive Energy Usage Chart to visualize device consumption trends.
3) Budget Monitoring with Alerts if usage exceeds the set budget.
4) Device-wise Usage Listing with clear, modern UI.
5) Responsive & Modern Design with smooth transitions and clean aesthetics.

TECH STACK
1) Frontend: React.js, Tailwind CSS (optional), and custom CSS.
2) Charting: Recharts (or similar library) for usage visualization.
3) API: Fetches data from a backend endpoint (http://localhost:3000/api/energy).
4) Styling: Custom CSS with gradients, shadows, and modern typography.

PROJECT STRUCTURE

/src
|-- /components
|     |-- EnergyChart.jsx
|     |-- BudgetAlert.jsx
|
|-- /pages
|     |-- EnergyData.jsx
|
|-- /styles
|     |-- App.css
|
|-- App.js
|-- index.js


WORKING
1) The app fetches energy data for devices like AC, Refrigerator, and TV.
2) Energy data is manually inserted into MongoDB using MongoDB Compass.
3) Users can set a custom energy budget (kWh).
4) The system calculates total usage and compares it against the budget.
5) Alerts are shown:
   -> ✅ Under budget → Success message.
   -> ⚠️ Over budget → Warning message.
6) A line chart plots the usage trend across devices.
7) A clean UI displays individual device consumption.
