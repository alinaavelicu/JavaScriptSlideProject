const arrowleft = document.querySelector(".arrowleft")
const arrowright = document.querySelector(".arrowright")
const slider = document.querySelector(".slider")
const images = document.querySelectorAll(".image")
const bottom = document.querySelector(".bottom")

let slideNumber = 1;

const length = images.length

for( let i = 0; i < length; i++){
    const div = document.createElement("div")
    div.className = "button";
    bottom.appendChild(div)
}

const buttons = document.querySelectorAll(".button");

buttons[0].style.backgroundColor = "White"

buttons.forEach((button, i) =>{
    button.addEventListener("click", () => {
    resetBg()
    slider.style.transform = `translateX(-${i * 800}px)`
    button.style.backgroundColor = "White"
    });
});

const changeColor = () => {
    resetBg()
    buttons[slideNumber-1].style.backgroundColor = "White"
}

const resetBg = () => {
    buttons.forEach(button=>{
        button.style.backgroundColor = "transparent"
    })
}


const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber * 800}px)`;
    slideNumber++;
}

const firstSlide = () => {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
}

arrowright.addEventListener("click", () => {
    slideNumber < length ? nextSlide() : firstSlide();   
    changeColor()
});

const lastSlide = () => {
    slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
    slideNumber = length;
}

const prevSlide = () => {
    slider.style.transform = `translateX(-${(slideNumber-2) * 800}px)`;
    slideNumber--;
}

arrowleft.addEventListener("click", () => {
    slideNumber > 1 ? prevSlide() : lastSlide();
    changeColor()
});


