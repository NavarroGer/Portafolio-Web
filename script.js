const toTop = document.querySelector(".back-top")

addEventListener("scroll", () => {
    if(pageYOffset > 75){
        toTop.classList.add("active")
    } else {
        toTop.classList.remove("active")
    }
})