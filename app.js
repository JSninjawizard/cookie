const btn = document.querySelector(".btn")
const footer = document.querySelector(".footer")

validate ()
btn.addEventListener("click", function () {
    localStorage.setItem("cookie was saved", "true")
    footer.style.display = "none"
})

function validate () {
    if (!localStorage.getItem("cookie was saved")) {
        footer.style.display = "flex"
    } else {
        footer.style.display = "none"
    }
}
