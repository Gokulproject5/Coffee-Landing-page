

const hamburgerEl = document.getElementById("hamBurger");
   let show =document.getElementById("show");
   console.log(show)

hamburgerEl.addEventListener("button",(event) => {
     event.preventDefault();
     
    if (show.style.display === "flex") {
        show.style.display = "none";
    } else {
        show.style.display = "flex";
    }
    
})
console.log(show)