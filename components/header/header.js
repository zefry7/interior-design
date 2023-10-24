window.addEventListener("scroll", () => {
    let el = document.getElementsByClassName("header")[0]
    if(window.scrollY > 0) {
        el.style.zIndex = "100";
        el.style.backgroundColor = "#1A1D26"
    } else if(window.scrollY < 1){
        el.style.zIndex = "2";
        el.style.backgroundColor = "initial"
    }
})

let burgerContent = document.getElementsByClassName("burger__content")[0]

function burgerMenuOpen() {
    burgerContent.classList.toggle("burger__content_active")
    document.body.classList.toggle("body-lock")
}

let listLink = document.querySelectorAll(".header__item-menu");

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