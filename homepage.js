const searchIcon = document.getElementById("search-icon")
const cancelIcon = document.getElementById("cancel-icon")
const homeNoList = document.getElementById("home-no-list")
let lists = []

searchIcon.addEventListener('click', () => {
    const main_nav = document.getElementById("main_nav")
    const other_nav = document.getElementById("other_nav")
    main_nav.style.display = 'none'
    other_nav.style.display = 'flex'
})

cancelIcon.addEventListener('click', () => {
    const main_nav = document.getElementById("main_nav")
    const other_nav = document.getElementById("other_nav")
    main_nav.style.display = 'flex'
    other_nav.style.display = 'none'
})

window.addEventListener('load', async () => {
    const response = await fetch('http://localhost:8080/toDoList/consultar');
    const data = await response.json();

    if (!data || (Array.isArray(data) && data.length === 0)) {
        homeNoList.style.display = 'block';
        console.log('Sem dados ou lista vazia');

        lists = data.map(list => ({
            id: list.id,
            title: list.title,
            classification: list.classification,
            pinned: list.pinned,
            tasks: list.taskList,
            date: list.date
        }));

        displayList();
    }
})


function createListElement(list) {
    try {
        const listItem = document.createElement("div");
        listItem.className = "w-[327px] h-[86px] flex-col justify-start items-start gap-3.5 flex space-y-5 mt-10";
        listItem.style.border = "solid 1px black";
        listItem.style.padding = "2rem";

        const titleDiv = document.createElement("div");
        titleDiv.className = "w-[135px] h-[22px] text-black text-xl font-medium font-['Graphik']";
        titleDiv.textContent = list.title;

        const categoryDiv = document.createElement("div");
        categoryDiv.className = "justify-start items-center gap-4 inline-flex space-x-2";

        const categoryLabelDiv = document.createElement("div");
        categoryLabelDiv.className = "px-[7px] py-[3px] bg-black rounded justify-start items-start gap-2.5 flex";

        const categoryTextDiv = document.createElement("div");
        categoryTextDiv.className = "text-center text-white text-[7.36px] font-medium font-['Graphik']";
        categoryTextDiv.textContent = list.classification;

        const dateDiv = document.createElement("div");
        dateDiv.className = "justify-start items-start gap-[3px] flex";

        const imageElement = document.createElement("img");
        imageElement.src = "./images/iconCalendar.svg";
        imageElement.className = "w-[20px] h-[20px]"; 
        dateDiv.appendChild(imageElement);

        const dateTextDiv = document.createElement("div");
        dateTextDiv.className = "text-center text-black text-[8px] font-normal font-['Graphik']";  
        dateTextDiv.textContent = list.date;

        categoryLabelDiv.appendChild(categoryTextDiv);
        dateDiv.appendChild(dateTextDiv);
        categoryDiv.appendChild(categoryLabelDiv);
        categoryDiv.appendChild(dateDiv);
        listItem.appendChild(titleDiv);
        listItem.appendChild(categoryDiv);

        return listItem;
    } catch (error) {
        console.error("Erro ao criar listItem:", error);
        return null;
    }
}

window.addEventListener('load', async () => {
    const response = await fetch('http://localhost:8080/toDoList/consultar');
    const data = await response.json();

    if (data === null) {
        homeNoList.style.display = 'block';
        return;
    }

    lists = data.map(list => ({
        id: list.id,
        title: list.title,
        classification: list.classification,
        pinned: list.pinned,
        tasks: list.taskList,
        date: list.date
    }));

    displayList();
});

function displayList() {
    const container = document.getElementById("container");

    if (!container) {
        console.error("Elemento de contêiner não encontrado.");
        return;
    }

    for (const list of lists) {
        const listItem = createListElement(list);
        if (listItem) {
            container.appendChild(listItem);
        } else {
            console.error("ListItem é null.");
        }
    }
}
