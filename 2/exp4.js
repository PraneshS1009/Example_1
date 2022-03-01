
var a1=document.createElement(`p`);
a1.textContent=`Hi I am HTML`;
a1.classList.add(`first`)
console.log(a1);
a1.classList.remove(`first`)
console.log(a1);

a2= document.createElement(`img`);
a2.src=`https://picsum.photos/200`;
a2.width=500
console.log(a2);

a3=document.createElement(`div`);
a3.classList.add(`a3`);
console.log(a3);

a3.appendChild(a2);


document.body.appendChild(a3)

var h1=document.createElement(`h1`);
h1.textContent=`This is HTML`
h1.classList.add(`heading`);


a3.insertAdjacentElement('afterbegin',h1);