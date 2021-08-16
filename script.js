var  canvas= document.getElementById('Canvas');
var ctx = canvas.getContext('2d');

var background=new Image();
background.src="b2.png";

var road=new Image();
road.src="road.jpg";

var img= new Image();
var cor=new Image();


var i=0;
var x=0;
var x2=2320;
var x3=2300;
var b=800;
var score=0;
var c=0;

var inc=1;
var inc2=11;


function newgame(){
    location.reload();
}

function collision(){
 var sumx=650;
if(sumx==x3){
c=1;
}

}

function bullets(){
     i=1;
     
}


function player()
{
  
ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.drawImage(background,x,0,2350,900);
ctx.drawImage(background,x2,0,2350,900);
ctx.drawImage(road,x,730,2350,180);
ctx.drawImage(road,x2,730,2350,180);

ctx.font=" bold 60px Arial";
ctx.fillStyle=' #990099';
ctx.fillText('The Corona Warrior',130,80);
  
ctx.font=" bold 60px Arial";
ctx.fillStyle='#4d004d';
ctx.fillText('Score: '+score+'',130,180);
  
collision();

if(c==0){
if(i==1){
    ctx.fillStyle='#b32400';
    ctx.fillRect(b,470,70,25);
    
    b=b+100;
    if(b>2280){
        b=800;
        i=0;
    }
    if( b>x3+100){
        b=800;
        i=0;
        x3=2800;
        score=score+10;
        console.log('shooted');
    }

}



if (x<=-2320) 
{
   x=2320;
}
else{
     x-=10;
}

if (x2<=-2320) 
{
   x2=2320;
}
else{
     x2-=10;
}

ctx.drawImage(img,300,300,500,500);

     if(inc== 12) inc = 1;
     img.src = +inc+'.PNG';
     inc++;

ctx.drawImage(cor,x3,200,380,380);

 if(inc2== 29) inc2 = 11;
    cor.src="cor"+inc2+".png";
     inc2++;
   if(x3<-400)
     {
     x3=2800;
     }
    else
   {
   x3-=25;  
   }

}


else
{ 
    ctx.font=" bold 100px Arial";
    ctx.fillStyle='#4d004d';
    ctx.fillText('Game Over',800,150);
  
    ctx.fillStyle='#990000';
    ctx.fillText('Score:-'+score+'',800,280);

    ctx.font=" bold 50px Arial";
    ctx.fillStyle=' #010e0b';
    ctx.fillText('Click below (Start New Game) to play again',550,380);

     ctx.font=" bold 60px Arial";
    ctx.fillStyle=' #010e0b';
    ctx.fillText('(or)',1000,450);

     ctx.font=" bold 50px Arial";
    ctx.fillStyle=' #010e0b';
    ctx.fillText('Reload page to play again',750,520);
       
}

}

setInterval(player,60);



