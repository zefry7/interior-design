const listLinkFooter = document.querySelectorAll(".footer-section__link")

listLinkFooter.forEach(value => {
    value.addEventListener("click", (event) => {
        event.preventDefault()

        let el = document.querySelector(value.getAttribute("data-scroll"))
        let y = el.offsetTop - 110;

        window.scrollTo({
            top: y,
            behavior: "smooth"
        })
    })
})