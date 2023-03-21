
const btn = document.querySelector('button')

const titleh1 = [{
    title: "Ma recette 1",
    image: "https://picsum.photos/200/300",
    content: "Bonjour la piscine blablazblzlbla 1"
  }, {
    title: "Ma recette 2",
    image: "https://picsum.photos/300/300",
    content: "Bonjour la piscine blablazblzlbla 2"
  }, {
    title: "Ma recette 3",
    image: "https://picsum.photos/400/300",
    content: "Bonjour la piscine blablazblzlbla 3"
  }];


btn.addEventListener('click',() => {

const globalChange = document.getElementById("recipe")
globalChange.innerHTML = "";

const randomIndex = Math.floor(Math.random()* titleh1.length)

const randomTitle = document.createElement("h1");
randomTitle.textContent = titleh1[randomIndex].title;


 const para = document.createElement('p');
 para.textContent = titleh1[randomIndex].content;

const imgAm = document.createElement('img')
imgAm.src = "./img/AMEL.jpeg"

recipe.append(randomTitle,para,imgAm);
})

