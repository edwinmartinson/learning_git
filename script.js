function toggleTheme() {
    if (document.body.classList.contains("dark"))
        document.body.classList.remove("dark");
    else
        document.body.classList.add("dark");
}

function getCreator() {
    console.log("Creator: Edwin Martinson");
}

function getStack() {
    console.log("Stack: Html, CSS, JavaScript");
}

function logger(message) {
    console.log(message)
}