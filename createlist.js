const btnAddMore = document.getElementById("addMore");
const taskElement = document.getElementById("taskElement");
let quantityTasks = 0

btnAddMore.addEventListener('click',()=>{
    if(quantityTasks > 3){
        btnAddMore.style.display = 'none'
        return;
    }
    const newTask = createTask();
    taskElement.insertAdjacentElement('beforebegin', newTask);
    quantityTasks += 1;
})

function createSvg() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "7");
    svg.setAttribute("height", "12");
    svg.setAttribute("viewBox", "0 0 7 12");
    svg.setAttribute("fill", "none");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("fill-rule", "evenodd");
    path.setAttribute("clip-rule", "evenodd");
    path.setAttribute("d", "M1.16667 2.49996C1.811 2.49996 2.33333 1.97762 2.33333 1.33329C2.33333 0.68896 1.811 0.166626 1.16667 0.166626C0.522334 0.166626 0 0.68896 0 1.33329C0 1.97762 0.522334 2.49996 1.16667 2.49996ZM1.16667 7.16663C1.811 7.16663 2.33333 6.6443 2.33333 5.99996C2.33333 5.35563 1.811 4.8333 1.16667 4.8333C0.522334 4.8333 0 5.35563 0 5.99996C0 6.6443 0.522334 7.16663 1.16667 7.16663ZM2.33333 10.6666C2.33333 11.311 1.811 11.8333 1.16667 11.8333C0.522334 11.8333 0 11.311 0 10.6666C0 10.0223 0.522334 9.49995 1.16667 9.49995C1.811 9.49995 2.33333 10.0223 2.33333 10.6666ZM5.83334 2.49996C6.47767 2.49996 7 1.97762 7 1.33329C7 0.68896 6.47767 0.166626 5.83334 0.166626C5.18901 0.166626 4.66667 0.68896 4.66667 1.33329C4.66667 1.97762 5.18901 2.49996 5.83334 2.49996ZM7 5.99996C7 6.6443 6.47767 7.16663 5.83334 7.16663C5.18901 7.16663 4.66667 6.6443 4.66667 5.99996C4.66667 5.35563 5.18901 4.8333 5.83334 4.8333C6.47767 4.8333 7 5.35563 7 5.99996ZM5.83334 11.8333C6.47767 11.8333 7 11.311 7 10.6666C7 10.0223 6.47767 9.49995 5.83334 9.49995C5.18901 9.49995 4.66667 10.0223 4.66667 10.6666C4.66667 11.311 5.18901 11.8333 5.83334 11.8333Z");
    path.setAttribute("fill", "black");

    svg.appendChild(path);
    return svg;
}

function createCheckbox() {
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.className = 'w-5 h-5 relative';
    return checkbox;
}

function createInputText() {
    const inputText = document.createElement('input');
    inputText.setAttribute('type', 'text');
    inputText.setAttribute('placeholder', 'To-do');
    inputText.className = 'text-neutral-400 text-sm font-normal font-["Graphik"] leading-[18.20px] ml-2 outline-none';
    return inputText;
}

function createTask() {
    const task = document.createElement('div');
    task.className = 'h-5 justify-start items-center inline-flex space-x-2';
    task.style.marginBottom = '2rem'
    task.appendChild(createSvg());
    task.appendChild(createCheckbox());
    task.appendChild(createInputText());
    return task;
}
