canvas=document.getElementById("myCanvas");

 ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;

background_image="mars.jpg";
rover_image="rover.png";

rover_x=10;
rover_y=10;

function add()
    {
        background_imageTag=new image;
        background_imageTag.onload= uploadbackground;
        background_imageTag.src="mars.jpg";
        
        rover_imageTag=new image;
        rover_imageTag.onload= uploadrover;
        rover_imageTag.src="rover.png";

    }

function uploadbackground()
{
ctx.drawimage(background_imageTag,0,0,canvas.width,canvas.height);

}

function uploadrover()
{
    ctx.drawimage(rover_imageTag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
keyPressed=e.keyCode;
console.log(keyPressed);

if (keyPressed=='38')
{
    up();
    console.log("up");

}

if(keyPressed=='40')
{
    down();
    console.log("down");

}

if(keyPressed=='37')
{
    left();
    console.log("left");

}

if(keyPressed=='39')
{
    right();
    console.log("right");

}

}

function up()
{
   if(rover_y>=0) 
   {
       rover_y=rover_y-10;
       console.log("When up arrow is pressed X="+ rover_x + "Y ="+ rover_y);
       uploadbackground();
        uploadrover();

   }
}

function down()
{
   if(rover_y<=500) 
   {
       rover_y=rover_y+10;
       console.log("When up arrow is pressed X="+ rover_x + "Y ="+ rover_y);
       uploadbackground();
        uploadrover();

   }
}

function left()
{
   if(rover_x>=0) 
   {
       rover_x=rover_x-10;
       console.log("When up arrow is pressed X="+ rover_x + "Y ="+ rover_y);
       uploadbackground();
        uploadrover();

   }
}

function right()
{
   if(rover_x<=700) 
   {
       rover_x=rover_x+10;
       console.log("When up arrow is pressed X="+ rover_x + "Y ="+ rover_y);
       uploadbackground();
        uploadrover();

   }
}
