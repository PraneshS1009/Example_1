var butt = document.querySelector('#style-2');
var button = document.querySelector('.accept');
console.log(butt);

butt.addEventListener('scroll', function(){
    var term = event.target.scrollTop;
    console.log(event.target.scrollTop);
    if(term >=3000){
        button.classList.add('show1');
    }
});