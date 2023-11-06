let items = document.querySelector(".spec-section__items")
let listItem = document.querySelectorAll(".spec-section__item")
let restartListItem = listItem
let bo = false
var stopT

if(window.innerWidth <= 1300) {
    items.style.left = "-160px";
}

window.addEventListener("resize", () => {
    if(window.innerWidth <= 1300 && bo == false) {
        bo = true
        listItem.forEach(value => {
            let a = value.cloneNode(true)
            items.append(a)
        })
        items.style.left = "-160px";
        stopT = setInterval(() => {
            items.append(listItem[0])
            listItem = document.querySelectorAll(".spec-section__item")
        }, 5000)
    } else if(window.innerWidth > 1300 && bo == true) {
        bo = false
        clearInterval(stopT)
        items.innerHTML = ""
        listItem = restartListItem
        restartListItem.forEach(value => {
            items.append(value)
        })
    }
})