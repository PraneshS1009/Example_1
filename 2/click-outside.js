var card = document.querySelectorAll('.inner');
var inner = document.querySelector('.modal-inner');
var outer = document.querySelector('.modal-outer');


function handleButton(event){
    var button = event.currentTarget;
    var cards = button.closest('.inner')
    var imgsrc = button.querySelector('img').src;
    var desc = button.dataset.description
    inner.innerHTML=`
    <img src="${imgsrc.replace('200','500')}"/>
    <p>${desc}</p>
    `;
    console.log(desc);
    outer.classList.add('open');
}

outer.addEventListener('click', function(){
    var outside = event.target.closest('.modal-inner');
    if(!outside){
        outer.classList.remove('open');
    }
});

card.forEach(button => button.addEventListener('click', handleButton));