const rollButton = document.getElementById("rollButton");

const diceSides = document.getElementById("diceSides");
const diceCount = document.getElementById("diceCount");
const sortOrder = document.getElementById("sortOrder");

const diceResults = document.getElementById("diceResults");
const totalDisplay = document.getElementById("total");

// Store the current dice rolls
let rolls = [];

rollButton.addEventListener("click", function() {

    const sides = Number(diceSides.value);
    let count = Number(diceCount.value);

    if (count < 1) {
        count = 1;
    }


    // Clear old rolls
    rolls = [];

    for (let i = 0; i < count; i++) {
        const roll = Math.floor(Math.random() * sides) + 1;

        rolls.push(roll);
    }

    displayRolls();
});

sortOrder.addEventListener("change", function() {
    displayRolls();
});

function displayRolls() {

    if (rolls.length === 0) {
        return;
    }

    diceResults.innerHTML = "";

    let displayedRolls = [...rolls];

    if (sortOrder.value === "asc") {
        displayedRolls.sort((a, b) => a - b);
    }
    else if (sortOrder.value === "desc") {
        displayedRolls.sort((a, b) => b - a);
    }

    for (let roll of displayedRolls) {
        const die = document.createElement("div");

        die.classList.add("die");
        die.textContent = roll;

        diceResults.appendChild(die);
    }

    let total = 0;

    for (let roll of rolls) {
        total += roll;
    }

    totalDisplay.textContent = "Total: " + total;
}