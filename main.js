var mouseEvent= "";
var last_x,last_y;
var t=Submitted;
canvas = document.getElementById("rose");
ctx = canvas.getContext("2d");
canvas.addEventListener("mouseDown", my_mousedown);
function submit(){
    color = document.getElementById("kill").value;
    width=document.getElementById("this").value;
    radius=document.getElementById("love").value;
}
function my_mousedown(e){
    mouseEvent="mousedown";
}
canvas.addEventListener("mouseMove", my_mousemove);
function my_mousemove(e){
    circle(current_x,current_y);
    function circle(current_x,current_y){       
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.arc(current_x,current_y,radius,0,2*Math.PI);
    ctx.stroke();
    }
if(mouseEvent=="mouseDown"){
   console.log("Current position of x and y coordinates = ");
   console.log("x = " + current_x + "y = " + current_y);
   current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;
}
 
}
    canvas.addEventListener("mouseUp", my_mouseup);
    function my_mouseup(e) {
         mouseEvent = "mouseup";
 }
  canvas.addEventListener("mouseLeave", my_mouseleave);
  function my_mouseleave(e){ 
      mouseEvent = "mouseLeave";
 }
function clear(){
ctx.clearRect(0, 0, canvas.width, canvas.height); 
}