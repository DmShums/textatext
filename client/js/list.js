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


// //form validation
// const form = document.querySelector(".form-block")
// const name = document.querySelector(".input-name")
// const email = document.querySelector(".input-email")
// const message = document.querySelector(".input-message")

// form.addEventListener('submit', (e) => {
//   let messages = []
//   if (name.value === '' || name.value === null){
//     messages.push('Name is required')
//   }
//   if (email.value.length <= 10){
//     messages.push('Email is required')
//   }
//   if (email.validity.typeMismatch){
//     messages.push('Write email adress please')
//   }
//   if (messages.length > 0) {
//     e.preventDefault()
//     errorElement.innerText = messages.join(', ')
//   }
// })

//slider
// var multiItemSlider = (function () {
//   return function (selector) {
//     var
//       _mainElement = document.querySelector(selector), // основный элемент блока
//       _sliderWrapper = _mainElement.querySelector('.slider__wrapper'), // обертка для .slider-item
//       _sliderItems = _mainElement.querySelectorAll('.slider__item'), // элементы (.slider-item)
//       _sliderControls = _mainElement.querySelectorAll('.slider__control'), // элементы управления
//       _sliderControlLeft = _mainElement.querySelector('.slider__control_left'), // кнопка "LEFT"
//       _sliderControlRight = _mainElement.querySelector('.slider__control_right'), // кнопка "RIGHT"
//       _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
//       _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента  


// var slider = multiItemSlider('.slider')