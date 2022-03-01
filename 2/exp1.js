console.log(`Hi`)

const main = document.querySelector('.style1');
var n1=document.querySelector(`.main1`);
n1.innerHTML= `<h1>Hi JavaScript</h1>`;


var newhtml= `
    <div class="main3"> 
        <h1 class="done">New one</h1>
    </div>
`;


main.classList.add(`mystyle`);

const n2= document.createRange()
.createContextualFragment(newhtml);

console.log(n2.querySelector(`div`));

document.body.appendChild(n2);