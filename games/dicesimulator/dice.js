const rollButton = document.getElementById("rollButton");
const diceSides = document.getElementById("diceSides");
const diceCount = document.getElementById("diceCount");
const diceResults = document.getElementById("diceResults");
const totalDisplay = document.getElementById("total");

rollButton.addEventListener("click", function() {

    const sides = Number(diceSides.value);
    const count = Number(diceCount.value);

    let total = 0;

    // remove old dice before showing new ones
    diceResults.innerHTML = "";

    for (let i = 0; i < count; i++) {

        const roll = Math.floor(Math.random() * sides) + 1;

        total += roll;

        const die = document.createElement("div");

        die.classList.add("die");

        die.textContent = roll;

        diceResults.appendChild(die);
    }

    totalDisplay.textContent = "Total: " + total;
});