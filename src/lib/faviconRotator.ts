// Windows XP favicon rotation utility
const XP_FAVICONS = [
  '/icons/xp-favicons/user1.ico',
  '/icons/xp-favicons/user2.ico',
  '/icons/xp-favicons/user3.ico',
  '/icons/xp-favicons/user4.ico',
  '/icons/xp-favicons/user5.ico',
  '/icons/xp-favicons/user6.ico',
  '/icons/xp-favicons/user7.ico',
  '/icons/xp-favicons/user8.ico',
];

export const rotateFavicon = () => {
  // Get a random favicon from the array
  const randomIndex = Math.floor(Math.random() * XP_FAVICONS.length);
  const faviconPath = XP_FAVICONS[randomIndex];
  
  // Update the favicon
  const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = faviconPath;
  document.getElementsByTagName('head')[0].appendChild(link);
};

// Initialize favicon rotation on page load
export const initFaviconRotation = () => {
  // Rotate favicon on page load
  rotateFavicon();
  
  // Also rotate on page refresh (beforeunload event)
  window.addEventListener('beforeunload', rotateFavicon);
}; 