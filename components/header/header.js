let burgerContent = document.getElementsByClassName("burger__content")[0];
let listLink = document.querySelectorAll(".header__item-menu");
const burgerButton = document.getElementsByClassName("burger__button")[0];

burgerButton.addEventListener("click", (e) => {
    activeMenuBurger(e)
})

burgerButton.addEventListener("keydown", (e) => {
    e.stopPropagation()
    if (e.keyCode == 13) {
        activeMenuBurger(e)
    }
})

function activeMenuBurger(e) {
    let timeLock = 0
    let timeVisible = 0

    if (!document.body.classList.contains("body-lock")) {
        timeLock = 300
    }
    if (burgerContent.classList.contains("burger__content_visible")) {
        timeVisible = 300
    }

    setTimeout(() => {
        document.body.classList.toggle("body-lock")
    }, timeLock)

    setTimeout(() => {
        burgerContent.classList.toggle("burger__content_visible")
    }, timeVisible)

    burgerContent.classList.toggle("burger__content_active")
    e.currentTarget.classList.toggle("burger__button_active")
}

function clickLogo() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        burgerContent.classList.remove("burger__content_active")
        document.body.classList.remove("body-lock")
    }
})

listLink.forEach(value => {
    value.addEventListener("click", (event) => {
        event.preventDefault()

        let el = document.querySelector(value.getAttribute("data-scroll"))
        let y = el.offsetTop - 110;

        burgerContent.classList.remove("burger__content_active")
        document.body.classList.remove("body-lock")

        window.scrollTo({
            top: y,
            behavior: "smooth"
        })
    })
})