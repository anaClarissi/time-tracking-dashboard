const mainLink = document.querySelectorAll(".main-link");

mainLink.forEach(link => {

    link.addEventListener("click", () => activeLink(link));

});

function activeLink(link) {

    removeAllActiveLink();

    handleDataTitle(link.id);

    link.classList.add("active");

    renderCards();

}

function removeAllActiveLink () {

    mainLink.forEach(link => link.classList.remove("active"));

}

function handleDataTitle (title) {

    const body = document.querySelector("body");

    body.setAttribute("data-title", `${title}`);

}


function renderCards() {

    const cards = document.querySelectorAll(".card:not(.main-card)");

    cards.forEach(card => {

        handleTitle(card);

        handleCurrentData(card);

        handlePreviousData(card);

    });

}

function handleTitle(card) {

    const title = card.title;

    const titleElement = card.querySelector(".title");

    titleElement.textContent = title;

}

async function handleCurrentData(card) {

    const title = card.title;

    const currrentData = card.querySelector(".current-data");

    const current = await getData(title, "current");

    currrentData.textContent = `${current}hrs`;

}

async function handlePreviousData(card) {
    
    const title = card.title;

    const previousData = card.querySelector(".previous-data");

    const previous = await getData(title, "previous");

    const titlePage = document.querySelector("body").getAttribute("data-title");

    const titlePageText = titlePage === "daily" ? "Day": titlePage === "weekly" ? "Week" : "Month";

    previousData.textContent = `Last ${titlePageText} - ${previous}hrs`;

}

async function getData(title, type) {

    const dataTitlePage = document.querySelector("body").getAttribute("data-title");

    try {

        const dataJson = await fetch("/data.json").then(answer => answer.json());

        const elementFinding = dataJson.find(data => data.title === title);

        if (elementFinding) return elementFinding["timeframes"][dataTitlePage][type];


    } catch (err) {

        console.error(`Error to get the ${type} data: `, err);

    }
    
}


renderCards();