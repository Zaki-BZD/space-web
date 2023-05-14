let circles =document.querySelector(".circles")
let circle =document.querySelectorAll(".circle")

    let articles =document.querySelectorAll("article")
let pictures =document.querySelectorAll("picture")
console.log()
function check(t) {
    for (let i = 0; i < t.children.length; i++) {
        if(t.children[i].classList.contains("active")){
            t.children[i].classList.remove("active")
        }
        
    }
}
function checkart(t) {
    for (let i = 0; i < t.length; i++) {
        if(!(t[i].hasAttribute("hidden"))){
            t[i].setAttribute("hidden","true")
        }
        
    }
}


for (let i = 0; i < circles.children.length; i++) {
    circles.children[i].onclick=function() {
        check(circles)
        circle[i].classList.add("active")
        checkart(articles)
        articles[i].removeAttribute("hidden")
        checkart(pictures)
        pictures[i].removeAttribute("hidden")}}
// let launch=document.querySelector('[alt="launch-vehicle"]')
// let spaceport=document.querySelector('[alt="spaceport"]')
// let spacecapsule=document.querySelector('[alt="space-capsule"]')
// console.log(launch)
// var x = window.matchMedia("(min-width: 900px)")
// function myFunction(x) {
//             if (x.matches) { // If media query matches
//               launch.src="starter-code/assets/technology/image-launch-vehicle-portrait.jpg";
//               spaceport.src="starter-code/assets/technology/image-spaceport-portrait.jpg";
//               spacecapsule.src="starter-code/assets/technology/image-space-capsule-portrait.jpg";
//               //   alert('Media Query Matched!')
//             } 
//             else{
//                 launch.src="starter-code/assets/technology/image-launch-vehicle-landscape.jpg";
//                 spaceport.src="starter-code/assets/technology/image-spaceport-landscape.jpg";
//                 spacecapsule.src="starter-code/assets/technology/image-space-capsule-landscape.jpg";

//             }
//           }
          
//           myFunction(x) // Call listener function at run time
//           x.addEventListener(myFunction)
