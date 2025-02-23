# Drag-and-Drop Shape Transformation Application

## Overview
This project is a **single-page application (SPA)** built using either **React** or **Angular** that allows users to interact with draggable shapes. The shapes change based on the quadrant where they are dropped. The interface is designed to be **responsive** and visually appealing, working smoothly on different screen sizes.

## Application Features
- **Four Quadrants Layout:** The app is divided into **Top Left, Top Right, Bottom Left, and Bottom Right** quadrants.
- **Initial Setup:** The Top Left quadrant contains five draggable **circle** shapes at the start.
- **Drag-and-Drop Transformation:** Shapes can be dragged into any quadrant, and upon dropping, they change based on the target quadrant:
  - **Top Left:** Shape remains a **circle**.
  - **Bottom Left:** Shape changes into a **square**.
  - **Top Right:** Shape changes into a **hexagon**.
  - **Bottom Right:** Shape changes into a **triangle**.
- **Version Control:** Project development is tracked using Git, with frequent commits reflecting progress.

## Technologies Used
- **React** (or **Angular**) for building the SPA
- **HTML5 & CSS3** for styling and layout
- **JavaScript** or **TypeScript** for interactive behavior
- **Git** for version control

## Setup Instructions

### Prerequisites
- **Node.js** (Ensure you have the latest version installed)
- **Git** for version control

### Steps to Run the Application
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/drag-drop-shape-transformation.git
   cd drag-drop-shape-transformation
   ```
2. **Install Dependencies:**
   ```bash
   npm install
   ```
4. **Run the Application:**
   ```bash
   npm start
   ```
   for development:
   ```bash
   npm run build
   ```
6. **View the Application:**
   ```
   http://localhost:3000
   ```

## Design Descions
