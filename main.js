var mouseEvent= "";
var last_x,last_y;
canvas = document.getElementById("rose");
ctx = canvas.getContext("2d");
function submit(){
    color = document.getElementById("kill").value;
    width=document.getElementById("this").value;
    radius=document.getElementById("love").value;
}
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    mouseEvent="mousedown";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mousedown"){
        console.log("Current position of x and y coordinates = x = " + current_x + "y = " + current_y);
        ctx.moveTo(last_x,last_y);
        ctx.lineTo(current_x,current_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(current_x,current_y,radius,0,2*Math.PI);
        ctx.stroke();
    }
    last_x = current_x;
     last_y = current_y;
}
    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e) {
         mouseEvent = "mouseup";
 }
  canvas.addEventListener("mouseleave", my_mouseleave);
  function my_mouseleave(e){ 
      mouseEvent = "mouseleave";
 }
function clear(){
ctx.clearRect(0, 0, canvas.width, canvas.height); 
}