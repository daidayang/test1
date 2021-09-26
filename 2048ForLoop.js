var squareArray = [];

function Square(x, y) {
    this.id = squareArray.length;
    this.x = x;
    this.y = y;

    this.erase = function() {
        //  Erase
                    c.fillStyle = "azure"
                    c.fillRect(board_x+5 + this.x * square_width, board_y+5 + this.y * square_width, square_width-10, square_width-10);
                    console.log(canvas);
            }
        
    this.draw = function() {
//  Draw
                c.fillStyle = "#8fb6ab"
                c.fillRect(board_x+5 + this.x * square_width, board_y+5 + this.y * square_width, square_width-10, square_width-10);
                console.log(canvas);
                c.fill();
//                c.font = "70px Arial"
                c.font = square_width/2 + "px Arial"
                c.textBaseline = "top";
                c.fillStyle = 'white'
                c.fillText(this.id, board_x+5+35 + this.x * square_width, board_y+5+30 + this.y * square_width, square_width-10, square_width-10);
    }

    this.moveleft = function() {

        //  At the edge.  Can't move.  exit
        if ( this.x <= 0 )
            return;

        this.erase();
        this.x--;

        for(var o=0; o<squareArray.length; o++)
        {             
            var onesq = squareArray[o];
            if ( onesq.id == this.id )
                continue;

            if ( (onesq.x == this.x) && (onesq.y == this.y) )
            {
                this.x++;
                break;
            }
        }    

        this.draw();
    }

    this.moveright = function() {

        //  At the edge.  Can't move.  exit
        if ( this.x >= 3 )
            return;

        this.erase();
        this.x++;

        for(var o=0; o<squareArray.length; o++)
        {             
            var onesq = squareArray[o];
            if ( onesq.id == this.id )
                continue;

            if ( (onesq.x == this.x) && (onesq.y == this.y) )
            {
                this.x--;
                break;
            }
        }    

        this.draw();
    }

    this.showme = function() {
        console.log('id:' + this.id + ', x:' + this.x + ', y:' + this.y)
    }

    this.moveup = function() {

        //  At the edge.  Can't move.  exit
        if ( this.y <= 0 )
            return;

        this.erase();
        this.y--;

        for(var o=0; o<squareArray.length; o++)
        {             
            var onesq = squareArray[o];
            if ( onesq.id == this.id )
                continue;

            if ( (onesq.x == this.x) && (onesq.y == this.y) )
            {
                this.y++;
                break;
            }
        }    

        this.draw();
    }

    this.movedown = function() {

        //  At the edge.  Can't move.  exit
        if ( this.y >= 3 )
            return;

        this.erase();
        this.y++;

        for(var o=0; o<squareArray.length; o++)
        {             
            var onesq = squareArray[o];
            if ( onesq.id == this.id )
                continue;

            if ( (onesq.x == this.x) && (onesq.y == this.y) )
            {
                this.y--;
                break;
            }
        }
        this.draw();
    }
}

var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth - 10     //width
canvas.height = window.innerHeight - 10   //height

var square_width = 120;
var board_x = canvas.width / 2 - 2 * square_width
var board_y = canvas.height / 2 - 2 * square_width

console.log('window.innerWidth' + window.innerWidth)
console.log('canvas.width' + canvas.width)

var c = canvas.getContext('2d');

c.beginPath();
c.moveTo(board_x-10,                board_y-5);
c.lineTo(board_x+4*square_width+10, board_y-5);
c.moveTo(board_x+4*square_width+5,  board_y);
c.lineTo(board_x+4*square_width+5,  board_y+4*square_width+10);
c.moveTo(board_x+4*square_width+10, board_y+4*square_width+5);
c.lineTo(board_x-10,                board_y+4*square_width+5);
c.moveTo(board_x-5,                 board_y+4*square_width+10);
c.lineTo(board_x-5,                 board_y-5);
// c.moveTo(1100, 100);
// c.lineTo(490, 100);
// c.lineTo(490, 700);
// c.lineTo(1100, 700);
// c.lineTo(1100, 90);
c.strokeStyle = "#93c572"
c.lineWidth = 10
c.stroke();

for(var i=0 ; i<5; i++)
{
    c.beginPath();

    c.moveTo(board_x,  board_y + i * square_width);
    c.lineTo(board_x + 4 * square_width, board_y + i * square_width);

    c.moveTo(board_x + i * square_width, board_y);
    c.lineTo(board_x + i * square_width, board_y + 4 * square_width);

    c.strokeStyle = "#93c572"
    c.lineWidth = 10
    c.stroke();
}

var old_x = 0;
var old_y = 0;

var sq = new Square(0, 0)
sq.draw();
squareArray.push(sq);
console.log('array length:' + squareArray.length)

document.addEventListener('keydown', event => {
    var buttonPressed = event.keyCode;
    console.log(buttonPressed);
    if (buttonPressed == 37) {  //  Left
        console.log("Left");

        for (var i = 0; i < squareArray.length; i++) {
            if (squareArray[i].x == 1) 
            squareArray[i].moveleft();
        }
        for (var i = 0; i < squareArray.length; i++) {
            if (squareArray[i].x == 2) 
            squareArray[i].moveleft();
        }
        for (var i = 0; i < squareArray.length; i++) {
            if (squareArray[i].x == 3) 
            squareArray[i].moveleft();
        }
    }
    if (buttonPressed == 39) {
        console.log("Right");

        for (var i = 0; i < squareArray.length; i++) {
            if (squareArray[i].x == 2) 
                squareArray[i].moveright();
        }
        for (var i = 0; i < squareArray.length; i++) {
            if (squareArray[i].x == 1)  
                squareArray[i].moveright();
        }
        for (var i = 0; i < squareArray.length; i++) {
            if (squareArray[i].x == 0)
                squareArray[i].moveright();
        }
    }

    if (buttonPressed == 38) {  //  Up
        console.log("Up");
        for (var i = 0; i < squareArray.length; i++) {
            if (squareArray[i].y == 1)
                squareArray[i].moveup();
        }
        for (var i = 0; i < squareArray.length; i++) {
            if (squareArray[i].y == 2)
                squareArray[i].moveup();
        }
        for (var i = 0; i < squareArray.length; i++) {
            if (squareArray[i].y == 3)
                squareArray[i].moveup();
        }
    }

    if (buttonPressed == 40) {
        console.log("down");
        for (var i = 0; i < squareArray.length; i++) {
            if (squareArray[i].y == 2)
                squareArray[i].movedown();
        }
        for (var i = 0; i < squareArray.length; i++) {
            if (squareArray[i].y == 1)
                squareArray[i].movedown();
        }
        for (var i = 0; i < squareArray.length; i++) {
            if (squareArray[i].y == 0)
                squareArray[i].movedown();
        }
    }

    if (buttonPressed == 187) {
        console.log("haha")

        var sq1 = new Square(0, 0)
        sq1.draw();
        squareArray.push(sq1);
        console.log('array length:' + squareArray.length)
    }    
});

// for(var uwu=0 ; uwu<3; uwu++) {
// c.beginPath();
// c.moveTo(1100, 250 + uwu * 150);
// c.lineTo(500, 250 + uwu * 150 );
// c.strokeStyle = "red"
// c.lineWidth = 20
// c.stroke();
// }

function drawsquare(x, y)
{
    c.fillStyle = "#8fb6ab"
    c.fillRect(515 + x * 120, 125 + y * 120, 110, 110);
    console.log(canvas);
}

function erasesquare(x, y)
{
    c.fillStyle = "azure"
    c.fillRect(515 + x * 120, 125 + y * 120, 110, 110);
    console.log(canvas);
}

c.fillStyle = "#8fb6ab"
c.font = "30PX Comic Sans MS"
c.fillText ("Who's epic? ME", 700, 50)

var ary1 = []

var t1 = {}
t1.Type = "Id"
t1.Name = "no_availability_msg"
ary1.push(t1);

var t2 = {}
t2.Type = "ClassName"
t2.Name = "non-bookable-container"
t2.CheckNotEmpty = true;
ary1.push(t2);

var t3 = {}
t3.Type = "TagAndClassnamePrefix"
t3.Name = "div"
t3.Name2 = "notification_"
ary1.push(t3);

var myJson = JSON.stringify(ary1)
console.log(myJson)

const ary2 = JSON.parse(myJson);
console.log(ary2)
for(var i=0; i<ary2.length;i++){
    console.log('Type:' + ary2[i].Type)
    console.log('Name:' + ary2[i].Name)
}

