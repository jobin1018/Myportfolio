const toggleButton = document.getElementsByClassName("hamburger")[0]
const navbarlinks = document.getElementsByClassName("nav-links")[0]
// const navcontainer = document.getElementsByClassName("without-hamburger")[0]

toggleButton.addEventListener("click", () => {
    navbarlinks.classList.toggle("active")
    // navcontainer.classList.toggle("active")
})
