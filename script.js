// Je recupere le bouton dans mon HTML est en crée une constante afin de pouvoir la reutiliser dans ma fonction.
const btn = document.querySelector('button')

// J'ajoute un element d'ecoute a ma constante "btn" pour lui signifier que a chaque click, une action devra se realiser
// cette acttion est placée dans une fonction dite anonyme car elle est stipule que pour un seul BTN
btn.addEventListener('click',() => {
// J'indique la création d'un titre à inserer dans mon HTML et stocker cette information dans une constante
 const title = document.createElement("h1");
//  Je stipule que la contstante title devra incorperer du texte "Mes recettes"
 title.textContent = "Mes recettes";
//  Afin d'inserer les elements precedant je dois recuperer la div ou article dans lequel il se situe
// ici on recupere l'emplacement de l'id recipe
// Une fois l'infomration d'emplacement recuperé on la stock dans un variable
 const recipeContainer = document.getElementById("recipe");
//  JS est assez nourrit d'inforamtion, c'est pour cela qu'on lui demande d'ajouter à recipeContainer en enfant la constante title
 recipeContainer.appendChild(title);

})