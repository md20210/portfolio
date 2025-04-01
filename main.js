// Adds an event listener that triggers when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Calls the updateLanguage function to initialize or refresh the page language
    updateLanguage();
});

// Summary of Test Results
// Overall: The main.js script is a simple, syntactically correct initializer that triggers language updates on page load. It’s minimal but functional, assuming updateLanguage() is defined elsewhere.

// Strengths: 
// Lightweight and efficient with proper DOM event timing.

// Compatible with modern browsers and the provided HTML structure.

// Weaknesses: 
// Complete reliance on an external updateLanguage() function without error handling.

// Potential for failure if script dependencies (e.g., language.js) are missing or misordered.

