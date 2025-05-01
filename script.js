// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Task 1: Change text content dynamically
    const changeTextBtn = document.getElementById('change-text-btn');
    const dynamicText = document.getElementById('dynamic-text');
    
    changeTextBtn.addEventListener('click', function() {
        dynamicText.textContent = 'Text changed dynamically with JavaScript!';
    });

    // Task 2: Modify CSS styles via JavaScript
    const styleBtn = document.getElementById('style-btn');
    const description = document.querySelector('.description');
    
    styleBtn.addEventListener('click', function() {
        description.classList.toggle('highlight');
        
        // Change button text based on state
        if (description.classList.contains('highlight')) {
            styleBtn.textContent = 'Remove Highlight';
        } else {
            styleBtn.textContent = 'Change Styles';
        }
    });

    // Task 3: Add or remove an element when a button is clicked
    const toggleElementBtn = document.getElementById('toggle-element-btn');
    const toggleElement = document.getElementById('toggle-element');
    
    toggleElementBtn.addEventListener('click', function() {
        toggleElement.classList.toggle('hidden');
        
        // Change button text based on visibility
        if (toggleElement.classList.contains('hidden')) {
            toggleElementBtn.textContent = 'Show Element';
        } else {
            toggleElementBtn.textContent = 'Hide Element';
        }
    });
});