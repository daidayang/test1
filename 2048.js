var canvas = document.querySelector('canvas')
        ;

canvas.width = window.innerWidth - 200   
canvas.height = window.innerHeight - 200  

var c = canvas.getContext('2d');

c.beginPath();
c.moveTo(1100, 100);
c.lineTo(500, 100);
c.lineTo(500, 700);
c.lineTo(1100, 700);
c.lineTo(1100, 90)
c.strokeStyle = "#B48395"
c.lineWidth = 20
c.stroke();

c.beginPath();
c.moveTo(650, 700);
c.lineTo(650, 100);
c.lineTo(800, 100);
c.lineTo(800, 700);
c.lineTo(950, 700);
c.lineTo(950, 100);
c.strokeStyle = "#B48395"
c.lineWdith = 20
c.stroke();

c.beginPath();
c.moveTo(1100, 250);
c.lineTo(500, 250 );
c.lineTo(500, 400);
c.lineTo(1100, 400);
c.lineTo(1100, 550);
c.lineTo(500, 550);
c.strokeStyle = "#B48395"
c.lineWdith = 20
c.stroke();