// strapi part
const BACKEND_URL = "http://localhost:1337/blogs";
const articlesDiv2 = document.querySelector(".glide__slides");//list.html


//list
async function renderNewPosts(parent) {
  // getting data from api
  try {
    let res = await fetch(BACKEND_URL).then(res => res.json());
    render(res, parent);
  }
  catch (err) {
    console.log(err);
  }

  

  function render(data, parent) {
    for (let i=0; i<data.length; i+=3) {
      let element = `<li class="glide__slide"><div class="newpost"><img src="${data[i].picture.formats.small.url}"><div class="text-part"><h1>${data[i].title}</h1><button onclick="location.href='article.html?id=${data[i].id}'">Переглянути текст</button></div></div> <div class="newpost"><img src="${data[i+1].picture.formats.small.url}"><div class="text-part"><h1>${data[i+1].title}</h1><button onclick="location.href='article.html?id=${data[i+1].id}'">Переглянути текст</button></div></div> <div class="newpost"><img src="${data[i+2].picture.formats.small.url}"><div class="text-part"><h1>${data[i+2].title}</h1><button onclick="location.href='article.html?id=${data[i+2].id}'">Переглянути текст</button></div></div></li>`;
      element = htmlToElement(element);
      parent.appendChild(element)
    }
  }
}

try {
  renderNewPosts(articlesDiv2)
} catch (err) {
  console.log(err);
  // expected output: ReferenceError: nonExistentFunction is not defined
  // Note - error messages will vary depending on browser
}


function htmlToElement(html) {
  var template = document.createElement('template');
  template.innerHTML = html;
  return template.content.firstChild;
}
/* <div class="newPost">
<img src="img/flowers.jpg" alt="">
<div class="text-part">
    <h1>Hello world</h1>
    <p>Lorem ipsum dolor sit amet</p>
</div>
</div> */














// function render(data, parent) {
  //   let secondElement = `<li class="glide__slide"></li> `;//list.html
  //   secondElement = htmlToElement(secondElement);
  //   let n = 1;
  //   while (n < 3) {
  //     for (let i in data) {
  //       let element = `<div class="newpost"><img src="${data[i].picture.formats.small.url}"><div class="text-part"><h1>${data[i].title}</h1><button onclick="location.href='article.html?id=${data[i].id}'">Переглянути текст</button></div></div>`;
  //       element = htmlToElement(element);
  //       element = element + element
  //       //i=i+1;
  //     }
  //     n=n+1;
  //   }
  //   secondElement.appendChild(element)
  //   parent.appendChild(element)
  // }












//
// strapi part
// const BACKEND_URL = "http://localhost:1337";
// const articlesDiv = document.querySelector(".all-newposts");//index.html
// const articlesDiv2 = document.querySelector(".newposts");//list.html

// async function renderNewPosts(parent) {
//     // getting data from api
//     try {
//       let res = await fetch(BACKEND_URL).then(res => res.json());
//       render(res, parent);
//     }
//     catch (err) {
//       console.log(err);
//     }
  
//     function render(data, parent) {
//       for (let i in data) {
//         let element = `<div class="newpost"><img src="${data[i].picture.formats.small.url}"><div class="text-part"><h1>${data[i].title}</h1><p>${data[i].text}</p></div></div>`;
//         element = htmlToElement(element);
//         parent.appendChild(element)
//       }
//     }
// }

// async function renderNewPostsIndexHtml(parent) {
//     // getting data from api
//     try {
//       let res = await fetch(BACKEND_URL).then(res => res.json());
//       render(res, parent);
//     }
//     catch (err) {
//       console.log(err);
//     }
  
//     function render(data, parent) {
//       for (let i in data) {
//         let element = `<div class="newpost"><img src="${data[i].picture.formats.small.url}"><div class="text-part"><h1>${data[i].title}</h1><p>${data[i].text}</p></div></div>`;
//         element = htmlToElement(element);
//         parent.appendChild(element)
//         if (i>5){
//             break
//         }
//       }
//     }
// }
// renderNewPosts(articlesDiv)
// renderNewPostsIndexHtml(articlesDiv2)

// /* <div class="newPost">
// <img src="img/flowers.jpg" alt="">
// <div class="text-part">
//     <h1>Hello world</h1>
//     <p>Lorem ipsum dolor sit amet</p>
// </div>
// </div> */




