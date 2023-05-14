let dots =document.querySelector(".dots")
let dot =document.querySelectorAll(".dot")
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

for (let i = 0; i < dots.children.length; i++) {
    dots.children[i].onclick=function() {
        check(dots)
        dot[i].classList.add("active")
        checkart(articles)
        articles[i].removeAttribute("hidden")
        checkart(pictures)
        pictures[i].removeAttribute("hidden")
    }
    
}