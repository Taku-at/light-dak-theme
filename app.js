/**
 * * Memo 
 * Btn grab the local strage
 * current thme is key value
 * local storage is this file 
 */
let body = document.body;
let toggleBtn = document.querySelector('.toggle-btn');
let currentTheme = localStorage.getItem('currentTheme');


if(currentTheme) {
    body.classList.add('dark-theme');
}

 toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    /**
     * if body has dark theme to add the active and current theme
     * if not remove
     */
    if(body.classList.contains('dark-theme')) {
        localStorage.setItem('currentTheme', 'themeActive');
    } else {
        localStorage.removeItem('currentTheme');
    }
 })