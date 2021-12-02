const section = document.querySelector("section")
const colors = ["#235E6FCE", "#165b33CE", "#146B3ACE", "#FBB229CE", "#EA4630CE", "#BB2528CE", "#FF7423CE"]

let numeros = Array.from({length: 24}, (k, v) => v+1)
let shuffle = numeros.sort(() => Math.random() - 0.5)

for(let index =1; index <= 24; index++){

    let randomColor = Math.floor(Math.random() * colors.length)
    let randomNumber = shuffle[index - 1]

    let window = document.createElement("div");
    window.classList.add("window")
    let content = document.createElement("div")
    content.classList.add("content")
    let front = document.createElement("div")
    front.classList.add("front")
    let back = document.createElement("div")
    back.classList.add("back")
    let number = document.createElement("span")
    number.classList.add("number")
    let img = document.createElement("div")
    img.classList.add("img")

    window.appendChild(content)
    content.appendChild(front)
    content.appendChild(back)
    front.appendChild(number)
    number.innerHTML = randomNumber
    back.appendChild(img)

    img.style.backgroundImage = "url('./img/image" + randomNumber + ".jpg')"
    window.querySelector('.front').style.background = colors[randomColor]

    // if(randomNumber < day){
    //     window.querySelector('.front').style.
    // }

    section.appendChild(window)

    window.addEventListener("click", function(){
        window.classList.toggle("flipCard")
    })
}

const discover = document.querySelector(".discover")
const windows = document.querySelectorAll(".window")
discover.addEventListener("click", function(){
    windows.forEach(w => w.classList.toggle("flipCard"))
    discover.innerHTML = (discover.innerHTML == "Discover All") ? "Cover All" : "Discover All"
})