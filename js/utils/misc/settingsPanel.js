
import getDocumentAreas from "../getDocumentAreas.js";

export function intialiseSettingsPanel(location = 'settings-button', panelLocation = 'top') 
{   
    const {bodyTag} = getDocumentAreas();
    // Get the settings button based on the argument (default is 'settings-button')
    const settingsButton = document.getElementById(location);
    
    // Depending on the panel location, position the settings panel accordingly
    const settingsPanel = document.getElementById('settings-panel');
    
    // Add click event listener to the settings button
    settingsButton.addEventListener('click', () => {
        settingsPanel.classList.toggle('visible');
    });

    // Get the increase and decrease text size buttons
    const increaseTextSizeButton = document.getElementById('increase-text-size');
    const decreaseTextSizeButton = document.getElementById('decrease-text-size');

    // Function to change text size
    const changeTextSize = (increment) => {
        const body = document.body;
        const currentSize = parseFloat(window.getComputedStyle(body, null).getPropertyValue('font-size'));
        body.style.fontSize = (currentSize + increment) + 'px';
    };

    // Add event listeners to the buttons
    increaseTextSizeButton.addEventListener('click', () => changeTextSize(1));
    decreaseTextSizeButton.addEventListener('click', () => changeTextSize(-1));
}
