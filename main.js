let textfragment = document.querySelector("#love1");
let image1 = document.querySelector("#mittelalter");

textfragment.addEventListener("mouseenter", (e) => {
    image1.classList.remove("invisible")
    image1.classList.add("visible")
})

textfragment.addEventListener("mouseout", (e) => {
    image1.classList.remove("visible")
    image1.classList.add("invisible")
})


let textfragment2 = document.querySelector("#love2");
let image2 = document.querySelector("#heute");

textfragment2.addEventListener("mouseenter", (e) => {
    image2.classList.remove("invisible")
    image2.classList.add("visible")
})

textfragment2.addEventListener("mouseout", (e) => {
    image2.classList.remove("visible")
    image2.classList.add("invisible")
})



