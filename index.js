let casa = 0 
let visitante = 0 

let home = document.getElementById("home-score")
let guest = document.getElementById("guest-score")

home.textContent = casa
guest.textContent = visitante

function home1(){
    casa+= 1
    home.textContent = casa
    console.log("Un punto para Home")
}

function home2(){
    casa+= 2
    home.textContent = casa
    console.log("Dos puntos para Home")
}

function home3(){
    casa+= 3
    home.textContent = casa
    console.log("Tres puntos para Home")
}

function guest1(){
    visitante+= 1
    guest.textContent = visitante
    console.log("Un punto para Guest")
}

function guest2(){
    visitante+= 2
    guest.textContent = visitante
    console.log("Dos puntos para Guest")
}

function guest3(){
    visitante+= 3
    guest.textContent = visitante
    console.log("Tres puntos para Guest")
}

function reset(){
    visitante = 0
    casa = 0
    home.textContent = casa
    guest.textContent = visitante
}
