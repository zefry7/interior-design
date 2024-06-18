let burgerContent = document.getElementsByClassName("burger__content")[0];
let listLink = document.querySelectorAll(".header__item-menu");

function burgerMenuOpen() {
    burgerContent.classList.toggle("burger__content_active")
    document.body.classList.toggle("body-lock")
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
        let y = el.getBoundingClientRect().top + window.scrollY - 140;
        burgerContent.classList.remove("burger__content_active")
        document.body.classList.remove("body-lock")
        window.scrollTo({
            top: y,
            behavior: "smooth"
        })
    })
})