var n1 = document.querySelector(`.image1`);
console.log(n1.dataset)

n1.addEventListener('click' ,function(){
    alert(`You clicked ${n1.dataset.name} image`)
});

var n2 = document.querySelector(`.image2`);


n2.addEventListener('click' ,function(){
    alert(`You clicked ${n2.dataset.name} image`)
});

var n3 = document.querySelector(`.image3`);


n3.addEventListener('click' ,function(){
    alert(`You clicked ${n3.dataset.name} image`)
})