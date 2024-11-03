
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
    requestAnimationFrame(() => {
      let currentScrollTop = window.scrollY || document.documentElement.scrollTop;
      let scrollDelta = currentScrollTop - lastScrollTop;

      if (Math.abs(scrollDelta) > suddenJumpThreshold) {
        // Sudden jump, hide the navbar
        navbar.style.top = -navbarHeight + 'px';
        settingsPanel.classList.remove('visible');
      } else if (currentScrollTop < topHideThreshold) {
        // Near the top, hide the navbar
        navbar.style.top = -navbarHeight + 'px';
        settingsPanel.classList.remove('visible');
      } else if (scrollDelta > 0) {
        // Scrolling down, hide navbar immediately
        navbar.style.top = -navbarHeight + 'px';
        settingsPanel.classList.remove('visible');
      } else if (scrollDelta < -showThreshold) {
        // Scrolling up beyond the threshold, show navbar
        navbar.style.top = '0';
      }

      lastScrollTop = currentScrollTop;
    });
  });

  // Initialize the settings panel
  intialiseSettingsPanel('navbar-settings-button', 'navbar'); // Settings panel for the navbar
}
