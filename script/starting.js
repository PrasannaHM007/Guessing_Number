document.getElementById('submitNameBtn').addEventListener('click', function() {
    const userName = document.getElementById('userNameInput').value;
    localStorage.setItem('userName', userName);
    window.location.href = "game.html"; 
});

document.getElementById('themeToggleBtn').addEventListener('click', function() {
    toggleTheme();
});

function toggleTheme() {
    const body = document.querySelector('body');
    const container = document.querySelector('.container');
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');
    container.classList.toggle('light-theme');
    container.classList.toggle('dark-theme');
}
