const data = [
    {
        srcF: "img/display/project-1.webp",
        srcS: "img/display/project-2.webp"
    },
    {
        srcF: "img/display/project-3.webp",
        srcS: "img/display/project-4.webp"
    },
    {
        srcF: "img/display/project-5.webp",
        srcS: "img/display/project-6.webp"
    },
    {
        srcF: "img/display/project-7.webp",
        srcS: "img/display/project-8.webp"
    },
]

const container = document.getElementsByClassName("project-section__list-project")[0]
const listInput = document.getElementsByClassName("project-section__item-input")
const parser = new DOMParser()
let sizeWindow = false
let typeProject = 0

function updateContentProjects() {
    container.innerHTML = null

    let list = data.map((v) => {
        return parser.parseFromString(`<div class="project-section__list-column">
              <div class="project-section__project"> <img src=${v.srcF} alt="Пример проекта" loading="lazy"/></div>
              <div class="project-section__project"> <img src=${v.srcS} alt="Пример проекта" loading="lazy"/></div>
            </div>`, 'text/html').body.firstChild
    })

    if(sizeWindow) {
        list = list.filter((_, i) => i % 2 == typeProject)
    } else {
        if(typeProject == 1)
            list = list.reverse()
    }

    for (let x of list)
        container.append(x)
}

[...listInput].forEach((v) => v.addEventListener("change", (e) => { 
    typeProject = e.target.getAttribute("data-type")
    updateContentProjects()
}))

window.addEventListener("load", () => {
    showContent()
})

window.addEventListener("resize", () => {
    showContent()
})
 
function showContent() {
    if(window.innerWidth > 1024) {
        sizeWindow = false
    } else {
        sizeWindow = true
    }
    updateContentProjects()
}