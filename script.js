const container = document.querySelector(".container");
const sizeBtn = document.querySelector(".size-btn");

function createGrid(n){
    container.innerHTML = "";
    if(n>100) n = 100;
    const boxSize = 760 / n;
    for(let i = 0; i < n; i++) {

        const row = document.createElement("div");
        row.classList.add("row");

        for(let j = 0; j < n; j++) {

            const box = document.createElement("div");
            box.classList.add("box");
            box.style.width = `${boxSize}px`;
            box.style.height = `${boxSize}px`;

            box.addEventListener("mouseover", () => {

                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);

                box.style.backgroundColor =
                `rgb(${r}, ${g}, ${b})`;
            });

            row.appendChild(box);
        }

        container.appendChild(row);
    }


}
createGrid(16);

sizeBtn.addEventListener('click', () => {
    const userInput = Number(prompt("Enter size of grid:"));
    createGrid(userInput);
})

const resetBtn = document.querySelector(".reset");

resetBtn.addEventListener("click", () => {

    const boxes = document.querySelectorAll(".box");

    boxes.forEach((box) => {
        box.style.backgroundColor = "";
    });
});


