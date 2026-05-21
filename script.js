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

