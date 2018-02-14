
window.onload = function () {
    let divs = document.body.getElementsByTagName("div");
    for (let div of divs) {
        if (div.innerText == "Jón") {
            div.className = "active";
        }
        if (div.innerText == "Karen") {
            div.parentElement.removeChild(div);
        }
    }
}