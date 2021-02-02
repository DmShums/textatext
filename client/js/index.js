//menu
const a = document.getElementById("mySidenav"),
      b = document.getElementById("main"),
      c = document.querySelector('.toggle'),
      burgerSpan = document.getElementById('burgerSpan'),
      btn = document.getElementById("closeButton");
   
if (burgerSpan.hasAttribute( "onClick", "closeNav()")){
  c.addEventListener("click", function(){c.classList.add("active")})
}

if (burgerSpan.hasAttribute( "onClick", "openNav()")){
  btn.addEventListener("click", function(){c.classList.remove("active")})
}

function openNav() {
  a.style.transform = "translate(0px)";
  burgerSpan.setAttribute( "onClick", "closeNav()");
  c.addEventListener("click", function(){
    c.classList.remove("active")
  })
}

function closeNav() {
  a.style.transform = "translate(-250px)";
  burgerSpan.setAttribute( "onClick", "openNav()")
  c.addEventListener("click", function(){
    c.classList.add("active")
  })
}

