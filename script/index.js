let randomNumber;
let gameOver = true;

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function checkGuess() {
    console.log("checkGuess function called");
    if (gameOver) {
        return;
    }
    
    const userInput = parseInt(document.getElementById('userInput').value);

    if (isNaN(userInput) || userInput < 1 || userInput > 100) {
        document.getElementById('result').textContent = "Please enter a valid number between 1 and 100.";
        return;
    }

    if (userInput > randomNumber) {
        document.getElementById('result').textContent = "Ohhhhh....!the number is too high, Try to guess smaller number..";
    } else if (userInput < randomNumber) {
        document.getElementById('result').textContent = "Entered number is too smaller,Try to guess bigger number..";
    } else {
        document.getElementById('result').textContent = "Wow congratulations, You guessed the number correctly...!";
        gameOver = true;
        createStars();
    }
}

function startNewGame() {
    gameOver = false;
    randomNumber = generateRandomNumber();
    document.getElementById('result').textContent = "";
    document.getElementById('userInput').value = "";
    const stars = document.getElementById('stars');
    stars.innerHTML = "";
}

function createStars() {
    const stars = document.getElementById('stars');
    for (let i = 0; i < 100; i++) { 
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = Math.random() * 100 + 'vw';
        star.style.animationDelay = Math.random() * 2 + 's';
        // Generate random HSL color
        const hue = Math.random() * 360;
        const saturation = '100%';
        const lightness = '50%';
        star.style.backgroundColor = `hsl(${hue}, ${saturation}, ${lightness})`;
        stars.appendChild(star);
    }
}

document.getElementById('submitBtn').addEventListener('click', function() {
    console.log("Submit button clicked");
    checkGuess();
});

document.getElementById('newGameBtn').addEventListener('click', function() {
    console.log("New Game button clicked");
    startNewGame();
});

document.getElementById('themeToggleBtn').addEventListener('click', function() {
    console.log("Theme Toggle button clicked");
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

startNewGame();

 // Retrieve user's name from local storage
 const userName = localStorage.getItem('userName');

 // Update the welcome message with the user's name
 const welcomeMsg = document.getElementById('welcomeMsg');
 welcomeMsg.textContent = userName ? `Hii..!, ${userName} welcome to the game, Guessing Number`: "";

