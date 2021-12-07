let elementBurger = document.querySelector(".element-burger").addEventListener('click', function(){
    document.body.classList.remove("activeToggle");
    document.querySelector(".div-button .element-x").style.display = "block";
    document.querySelector(".div-button .element-burger").style.display = "none"; 
})

let elementX = document.querySelector(".element-x").addEventListener('click', function(){
    document.body.classList.add("activeToggle");
    document.querySelector(".div-button .element-x").style.display = "none";
    document.querySelector(".div-button .element-burger").style.display = "block";
})

document.querySelector('.li1').addEventListener('mouseenter', function(){
    tirar();
    document.querySelector('.li1 div').classList.add("text-white");
    document.querySelector('.li1 div').classList.add("active");
})

document.querySelector('.li2').addEventListener('mouseenter', function(){
    tirar();
    document.querySelector('.li2 div').classList.add("text-white");
    document.querySelector('.li2 div').classList.add("active");
})

document.querySelector('.li3').addEventListener('mouseenter', function(){
    tirar();
    document.querySelector('.li3 div').classList.add("text-white");
    document.querySelector('.li3 div').classList.add("active");
})

document.querySelector('.li4').addEventListener('mouseenter', function(){
    tirar();
    document.querySelector('.li4 div').classList.add("text-white");
    document.querySelector('.li4 div').classList.add("active");
})

document.querySelector(".li5").addEventListener('mouseenter', function(){
    tirar();
    document.querySelector('.li5 div').classList.add("text-white");
    document.querySelector('.li5 div').classList.add("active");

})

function tirar() {
    document.querySelector('.li1 div').classList.remove("active");
    document.querySelector('.li2 div').classList.remove("active");
    document.querySelector('.li3 div').classList.remove("active");
    document.querySelector('.li4 div').classList.remove("active");
    document.querySelector('.li5 div').classList.remove("active");

    document.querySelector('.li1 div').classList.remove("text-white");
    document.querySelector('.li2 div').classList.remove("text-white");
    document.querySelector('.li3 div').classList.remove("text-white");
    document.querySelector('.li4 div').classList.remove("text-white");
    document.querySelector('.li5 div').classList.remove("text-white");
    
    document.querySelector('.li1').classList.add("nav-item");
    document.querySelector('.li2').classList.add("nav-item");
    document.querySelector('.li3').classList.add("nav-item");
    document.querySelector('.li4').classList.add("nav-item");
    document.querySelector('.li5').classList.add("nav-item"); 
}

document.querySelector('.li1').addEventListener("mouseenter", function () {
    tirar2();   
    document.querySelector("#i-1").classList.add("act");
})



document.querySelector('.li1').addEventListener("mouseleave", function () {
    document.querySelector("#i-1").classList.remove("act");
})

document.querySelector('#i-1').addEventListener("mouseenter", function () {
    document.querySelector("#i-1").classList.add("act");
    document.querySelector(".main").addEventListener("mouseenter", function () {
        document.querySelector("#i-1").classList.remove("act");
    })
    
})

document.querySelector('.li2').addEventListener("mouseenter", function () {
    tirar2();
    document.querySelector("#i-2").classList.add("act");
})

document.querySelector('.li2').addEventListener("mouseleave", function () {
    document.querySelector("#i-2").classList.remove("act");
})

document.querySelector('#i-2').addEventListener("mouseenter", function () {
    document.querySelector("#i-2").classList.add("act");
    document.querySelector(".main").addEventListener("mouseenter", function () {
        document.querySelector("#i-2").classList.remove("act");
    })
    
})

document.querySelector('.li3').addEventListener("mouseenter", function () {
    tirar2();
    document.querySelector("#i-3").classList.add("act");
})

document.querySelector('.li3').addEventListener("mouseleave", function () {
    document.querySelector("#i-3").classList.remove("act");
})

document.querySelector('#i-3').addEventListener("mouseenter", function () {
    document.querySelector("#i-3").classList.add("act");
    document.querySelector(".main").addEventListener("mouseenter", function () {
        document.querySelector("#i-3").classList.remove("act");
    })
    
})

document.querySelector('.li4').addEventListener("mouseenter", function () {
    tirar2();
    document.querySelector("#i-4").classList.add("act");
})

document.querySelector('.li4').addEventListener("mouseleave", function () {
    document.querySelector("#i-4").classList.remove("act");
})

document.querySelector('#i-4').addEventListener("mouseenter", function () {
    document.querySelector("#i-4").classList.add("act");
    document.querySelector(".main").addEventListener("mouseenter", function () {
        document.querySelector("#i-4").classList.remove("act");
    })
    
})

document.querySelector('.li5').addEventListener("mouseenter", function () {
    tirar2();
    document.querySelector("#i-5").classList.add("act");
})

document.querySelector('.li5').addEventListener("mouseleave", function () {
    document.querySelector("#i-5").classList.remove("act");
})

document.querySelector('#i-5').addEventListener("mouseenter", function () {
    document.querySelector("#i-5").classList.add("act");
    document.querySelector(".main").addEventListener("mouseenter", function () {
        document.querySelector("#i-5").classList.remove("act");
    })
    
})

function tirar2() {
    document.querySelector("#i-1").classList.remove("act");
    document.querySelector("#i-2").classList.remove("act");
    document.querySelector("#i-3").classList.remove("act");
    document.querySelector("#i-4").classList.remove("act");
    document.querySelector("#i-5").classList.remove("act");
}

let largura = window.innerWidth;

if(largura < 950) {
    document.body.classList.add("activeToggle");   
}

window.addEventListener("resize", function() {
    let largura = window.innerWidth;
    if(largura < 950) {
        document.body.classList.add("activeToggle");   
    }
})