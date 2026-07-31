const mainLink = document.querySelectorAll(".main-link");

mainLink.forEach(link => {

    link.addEventListener("click", () => activeLink(link));

});

function activeLink(link) {

    removeAllActiveLink();

    handleDataTitle(link.id);

    link.classList.add("active");

}

function removeAllActiveLink () {

    mainLink.forEach(link => link.classList.remove("active"));

}

function handleDataTitle (title) {

    const body = document.querySelector("body");

    body.setAttribute("data-title", `${title}`);

}