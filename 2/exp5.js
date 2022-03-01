var div= document.createElement(`div`);
div.classList.add(`wrapper`);
document.body.appendChild(div);

var list = `
<ul>
<li>one</li>
<li>two</li>
<li>three</li>
</ul>`;

div.innerHTML=list;


var image= document.createElement(`img`);
image.src=`https://picsum.photos/200`;
image.width=250;
image.classList.add(`cute`);
image.alt=`Cute Puppy`;
div.appendChild(image);


var htmlstring=`
<div class="mydiv">
    <p>First para</p>
    <p>Second para</p>
</div>
`;
var div1 = div.querySelector(`ul`);
var div2 = document.createElement(`div`);
div2.innerHTML=htmlstring;
div1.insertAdjacentElement('beforebegin',div2);

var mydiv=document.querySelector(`.mydiv`);
mydiv.firstElementChild.remove();

var html1
function generatePlayerCard(name, age, height){
    html1=`
    <div>
        <h2>${name} - ${age}</h2>
        <p>They are ${height} and ${age} years old, In dog years this person whould be ${age*7} years old. It would be a tall dog</p>
    </div>`;
    return html1
}

var cards = document.createElement(`div`);
cards.classList.add(`cards`);
var cardshtml = generatePlayerCard(`Pranesh`, 22, 200);
cardshtml+=generatePlayerCard(`Kumar`, 20, 150);
cardshtml+=generatePlayerCard(`Prabhu`, 36, 240);
cardshtml+=generatePlayerCard(`Ram`, 18, 180);
console.log(cardshtml);

cards.innerHTML=cardshtml;

document.body.insertAdjacentElement(`afterbegin`,cards);