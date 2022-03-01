var canvas = document.querySelector('.draw');
var butt = document.querySelector(`button`);

var pen = canvas.getContext('2d');

var {width, height}= canvas;

var x = Math.floor(Math.random() * width);
var y = Math.floor(Math.random() * height);
var col =0;


pen.lineJoin = 'round';
pen.lineCap = 'round';
pen.lineWidth = 2;

pen.strokeStyle = `hsl(${col}, 100%, 50%)`;
pen.beginPath();
pen.moveTo(x, y);
pen.lineTo(x, y);
pen.stroke();


function drawLine(event){
    if(event.key.includes('Arrow')){
        event.preventDefault();
    }
    col+=10;
    pen.beginPath();
    pen.moveTo(x, y);
    if(event.key=='ArrowUp'){
        y-=1;
    }
    if(event.key=='ArrowDown'){
        y+=1;
    }
    if(event.key=='ArrowLeft'){
        x-=1;
    }
    if(event.key=='ArrowRight'){
        x+=1;
    }
    pen.strokeStyle = `hsl(${col}, 100%, 50%)`;
    pen.lineTo(x, y);
    pen.stroke();
}

window.addEventListener('keydown', drawLine);

