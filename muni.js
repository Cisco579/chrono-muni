let timer; // Variable pour stocker l'intervalle
let totalTime; // Temps total en secondes

function updateDisplay(minutes, seconds) {
    const timeDisplay = document.getElementById('time');
    timeDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    const minutesInput = document.getElementById('minutes').value;
    totalTime = minutesInput * 60; // Convertir en secondes

    // Vérifier si l'entrée est valide
    if (isNaN(totalTime) || totalTime <= 0) {
        alert("Veuillez entrer un nombre de minutes valide.");
        return;
    }

    // Réinitialiser l'affichage
    updateDisplay(Math.floor(totalTime / 60), totalTime % 60);

    // Démarrer le minuteur
    timer = setInterval(() => {
        if (totalTime <= 0) {
            clearInterval(timer);
            alert("Temps écoulé !");
        } else {
            totalTime--;
            updateDisplay(Math.floor(totalTime / 60), totalTime % 60);
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    totalTime = 0;
    updateDisplay(0, 0);
    clearTimeout(minutes)
}

// Ajouter des événements aux boutons
document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('reset').addEventListener('click', resetTimer);


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let form = document.querySelector(".container")

document.getElementById('changeColor').addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor();
});

document.getElementById('changeColor').addEventListener('click', () => {
    document.form.style.backgroundColor = getRandomColor();
});