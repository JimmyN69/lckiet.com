const rollButton = document.getElementById("rollButton");
const diceSides = document.getElementById("diceSides");
const diceCount = document.getElementById("diceCount");

const result = document.getElementById("result");
const total = document.getElementById("total");

rollButton.addEventListener("click", function() {

    const sides = Number(diceSides.value);
    const count = Number(diceCount.value);

    let rolls = [];
    let sum = 0;

    for (let i = 0; i < count; i++) {

        const roll = Math.floor(Math.random() * sides) + 1;

        rolls.push(roll);
        sum += roll;
    }

    result.textContent = "Rolls: " + rolls.join(", ");
    total.textContent = "Total: " + sum;
});