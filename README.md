# Drag-and-Drop Shape Transformation Application

## Overview
This project is a single-page application built using **React** that allows users to interact with draggable shapes. The shapes change based on the quadrant where they are dropped. The interface is designed to be responsive and visually appealing, working smoothly on different screen sizes.

## Application Features
- **Four Quadrants Layout:** The app is divided into **Top Left, Top Right, Bottom Left, and Bottom Right** quadrants.
- **Initial Setup:** The Top Left quadrant contains five draggable **circle** shapes at the start.
- **Drag-and-Drop Transformation:** Shapes can be dragged into any quadrant, and upon dropping, they change based on the target quadrant:
  - **Top Left:** Shape remains a **circle**.
  - **Bottom Left:** Shape changes into a **square**.
  - **Top Right:** Shape changes into a **hexagon**.
  - **Bottom Right:** Shape changes into a **triangle**.
- **Local Storage:** Saves state of quadrants so it persists after refresh.
- **Reset Button:** User can restore the shapes to the initial setup using this button.
- **Responsive Design:** Hover effects and changing cursor makes app more intuitive.
- **Content Security Policy:** implemented to enhance security by restricting sources for scripts, styles, fonts, and images.
- **Version Control:** Project development is tracked using Git, with frequent commits reflecting progress.

## Technologies Used
- **React**: For building a dynamic and responsive user interface.
- **React DnD**: To enable drag-and-drop functionality.
- **Tailwind CSS**: For responsive and modern styling.
- **Local Storage**: To ensure state persistence across sessions.
- **JavaScript/TypeScript**: For interactive and type-safe development.
- **Git & GitHub**: For version control and collaborative development.

## Setup Instructions

### Prerequisites
- **Node.js** (Ensure you have the latest version installed)
- **Git** for version control

### Steps to Run the Application
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Vidi-M/Drag-and-Drop-App.git
   cd drag-and-drop-app
   ```
2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Run the Application:**
   ```bash
   npm start
   ```
   for development:
   ```bash
   npm start dev
   ```
4. **View the Application:**
   ```
   http://localhost:3000
   ```

## Design Decisions
### Component Based Architecture
  - Divided app into components to keep codebase clean and maintainable
  - Each component handles a specific role:
      - App.tsx: Manages the quadrants and app state
      - Quadrant.tsx: Manages the number of shapes rendered in each quadrant and changes state of the quadrant when shape is dropped
      - Shape.tsx: Manages rendering the shape and the dragging functionality
        
### React DnD
  - Built for React so integrates well
  - React hooks useDrag() and useDrop() allowed smooth dragging and could easily handle the dropping logic
  - Customisable styling for the drag and drop interations
  - Supports complex use cases of having multiple draggable objects and multiple drop targets
  - Has lots of well formatted documentation, making it easy to learn for this project
  - Leverages Redux for efficient state management

### Tailwind CSS
  - Integrates seamlessly with React
  - Eliminates need for a custom CSS file as it can handle styling components diectly in the tsx file
  - Highly customisable styling and can easily make components interactive

### Content Security Policy (CSP)
  - Helps cross-site scripting attacks
  - Policy includes allowing scripts, styles, and images only from the app’s own domain.

## Challenges
### Drag and Drop State Management
  #### Issue:
  > How to make each quadrant render the correct number of shapes inside
  #### Solution:
  > Used react hook useState() to track the shape count in each quadrant and update them when there is a change

  > Used react hook useDrop() to track and update where the dragged shape originated and where it has been dropped.

### useDrag() Default Behaviour:
  #### Issue:
  > When dragging a shape it would screenshot around the shape including the background which looked messy.
  #### Solution:
  > Added a Drag preview image to display instead of the screenshot

### Persist State After Refresh:
  #### Issue:
  > The shapes would reset to their default position when the page is reloaded. I wanted it to persist.
  #### Solution:
  > Used local storage to save the quadrant state when there was a change. A full backend is not required for such a simple use case.

### Reset State:
  #### Issue:
  > Due to the local stoarage there is no way to return the shapes to their original location non-manually.
  #### Solution:
  > Created a button that when clicked will set the state to the deafult state.
