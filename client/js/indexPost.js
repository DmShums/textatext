const BACKEND_URL = "http://localhost:1337/blogs";
const articlesDiv = document.querySelector(".all-newposts");//index.html

//index
async function renderNewPostsIndexHtml(parent) {
    // getting data from api
    try {
      let res = await fetch(BACKEND_URL).then(res => res.json());
      render(res, parent);
    }
    catch (err) {
      console.log(err);
    }
  
    function render(data, parent) {
      for (let i in data) {
        let element = `<div class="newpost"><img src="${data[i].picture.formats.large.url}"><div class="text-part"><h1>${data[i].title}</h1><button onclick="location.href='article.html?id=${data[i].id}'">Переглянути текст</button></div></div>`;
        element = htmlToElement(element);
        parent.appendChild(element)
        //shows only 5 posts
        if (i>5){
            break
        }
      }
    }
}
renderNewPostsIndexHtml(articlesDiv)

function htmlToElement(html) {
    var template = document.createElement('template');
    template.innerHTML = html;
    return template.content.firstChild;
  }