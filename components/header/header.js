let burgerContent = document.getElementsByClassName("burger__content")[0];
let listLink = document.querySelectorAll(".header__item-menu");
const burgerButton = document.getElementsByClassName("burger__button")[0];

burgerButton.addEventListener("click", (e) => {
    e.stopPropagation()
    burgerContent.classList.toggle("burger__content_active")
    document.body.classList.toggle("body-lock")
    e.currentTarget.classList.toggle("burger__button_active")
})


function clickLogo() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

window.addEventListener("resize", () => {
    if(window.innerWidth > 768) {
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