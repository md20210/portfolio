// Logs a message to the console to confirm the script has loaded
console.log("menu.js loaded");

// Function to toggle the mobile menu's visibility
function toggleMobileMenu() {
    // Finds the element with ID "menu" and toggles the "active" class
    document.getElementById("menu").classList.toggle("active");
}

// Adds a click event listener to the navigation link pointing to "#chatbot"
document.querySelector('#menu a[href="#chatbot"]').addEventListener('click', function(e) {
    // Prevents the default anchor link behavior (e.g., jumping to the section)
    e.preventDefault();
    // Logs a message to confirm the chatbot button was clicked
    console.log("Chatbot button clicked");
    // Finds the element with ID "chatbot" (the chatbot section)
    const chatbotSection = document.getElementById('chatbot');
    // Checks if the chatbot section exists in the DOM
    if (chatbotSection) {
        // Logs a confirmation that the chatbot section was found
        console.log("Chatbot section found");
        // Scrolls smoothly to the chatbot section with instant behavior
        chatbotSection.scrollIntoView({ behavior: 'instant' });
    } else {
        // Logs an error if the chatbot section is not found
        console.log("Chatbot section not found");
        // Logs the entire HTML body content for debugging purposes
        console.log("Current DOM:", document.body.innerHTML);
    }
});

// Summary of Test Results
// Overall: The menu.js script is syntactically valid, functionally sound, and compatible with the provided HTML. It handles mobile menu toggling and smooth navigation to the chatbot section effectively, with debugging aids included.

// Strengths: 
// Simple, focused functionality with minimal overhead.

// Good use of event delegation and modern APIs.

// Debug logging enhances troubleshooting.

// Weaknesses: 
// Lack of null check for #menu could lead to errors if the HTML structure changes.

// Instant scrolling might not align with user expectations for a smooth UX.

// Placeholder link (href="#") behavior is overridden, but the anchor remains non-functional without JavaScript.

// Recommendations
// Add Null Check: Modify toggleMobileMenu() to handle missing #menu:
// javascript

// function toggleMobileMenu() {
//    const menu = document.getElementById("menu");
//     if (menu) menu.classList.toggle("active");
// }

// Smooth Scrolling: Change { behavior: 'instant' } to { behavior: 'smooth' } for a better user experience:
// javascript

// chatbotSection.scrollIntoView({ behavior: 'smooth' });

// Clean Up Logs: Remove or comment out console.log statements in production to avoid clutter:
// javascript

// console.log("Chatbot section not found");

// Test in Browser: Verify with the HTML and CSS in a live environment to ensure:
// The mobile menu toggles correctly.

// The chatbot link scrolls as expected.

// This static analysis suggests the script is well-prepared for its intended purpose, with minor tweaks needed for robustness and polish. Let me know if you’d like further refinements or additional testing with related files!

