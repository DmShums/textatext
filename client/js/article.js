const parentElement = document.querySelector("#content");//list.html
const BACKEND_URL = "http://localhost:1337/blogs";

function htmlToElement(html) {
  var template = document.createElement('template');
  template.innerHTML = html;
  return template.content.firstChild;
}

function getPageId() {
    let querystring = location.search;
    querystring = querystring.substring(1).split("&");
    for (let i in querystring) {
        if (querystring[i].search("id=") != -1) {
            var pageId = querystring[i].substring(3)
        }
    }
    return pageId-1
}
pageId = getPageId();
//

function getArticleData(pageId) {
    let obj = data.find(function(obj) {//res or data?
        return obj.id == pageId
    })
    return obj
}

async function renderArticle(parent) {
    // getting data from api
    try {
      let data = await fetch(BACKEND_URL).then(data => data.json());
      render(data, parent);
    }
    catch (err) {
      console.log(err);
    }
  
    function render(data, parent) {
      let element = `<div class="newpost"><img src="${data[pageId].picture.formats.large.url}"><div class="text-part"><h1>${data[pageId].title}</h1><p>${data[pageId].text}</p></div></div>`;
        element = htmlToElement(element);
        parent.appendChild(element);
    }
}

renderArticle(parentElement)

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