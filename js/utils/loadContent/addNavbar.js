
import { intialiseSettingsPanel } from "../misc/settingsPanel.js";
export function addNavbar() {
  // Add the navbar to the page
  const navbar = document.createElement('div');
  navbar.id = 'suttanav'; // Added ID
  // navbar.innerHTML = document.title;

  // Create a container for the navbar contents to allow flexibility for positioning
  const navbarContent = document.createElement('div');
  navbarContent.style.display = 'flex';
  navbarContent.style.justifyContent = 'space-between';
  navbarContent.style.width = '100%';

  // Create a div for the title to stay on the left side
  const navbarTitle = document.createElement('div');
  navbarTitle.innerText = document.title;

  // Create the settings button
  const settingsButton = document.createElement('button');
  settingsButton.id = 'navbar-settings-button';
  settingsButton.className = 'icon-button';
  settingsButton.innerHTML = '⚙️'; // Using an icon inside the button

  // Append title and settings button to the navbar content container
  navbarContent.appendChild(navbarTitle);
  navbarContent.appendChild(settingsButton);

  // Append the content container to the navbar
  navbar.appendChild(navbarContent);
  document.body.appendChild(navbar);

  // After appending, get the navbar's height
  const navbarHeight = 50;

  let lastScrollTop = window.scrollY || document.documentElement.scrollTop;
  const showThreshold = 1; // Threshold for showing the navbar when scrolling up
  const suddenJumpThreshold = 100; // Threshold for sudden jumps
  const topHideThreshold = 170; // Threshold for hiding navbar near the top

  // Get the settings panel to control its visibility
  const settingsPanel = document.getElementById('settings-panel');
  window.addEventListener('scroll', () => {
    if (scrollTimer !== null) {
        clearTimeout(scrollTimer);
    }

    const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
    
    // Show navbar when scrolling up beyond threshold
    if (currentScrollTop < lastScrollTop && currentScrollTop > 170) {
        if (!isVisible) {
            navbar.style.top = '0';
            isVisible = true;
        }
    } 
    // Hide navbar when at top or scrolling down
    else if (currentScrollTop <= 170 || currentScrollTop > lastScrollTop) {
        if (isVisible) {
            navbar.style.top = '-50px';
            isVisible = false;
        }
    }
    
    lastScrollTop = currentScrollTop;
    
    // Reset scroll state after scrolling stops
    scrollTimer = setTimeout(() => {
        scrollTimer = null;
    }, 150);
}, { passive: true });

  // Initialize the settings panel
  intialiseSettingsPanel('navbar-settings-button', 'navbar'); // Settings panel for the navbar
}
