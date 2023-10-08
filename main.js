var mouseEvent = "empty";
canvas = document.getElementById("myCaanvas");
ctx= canvas.getContext("2d");
color="black";
width="5";
radius="5";

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";

}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";

    
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";
    
}

function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if(mouseEvent == "mouseDown") {
        console.log("Current position of x and y coorinates = ");
        console.log("x =" + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokesStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius ,0 ,2 * Math.PI);
        ctx.stroke();


    }
    

}

last_position_of_x = current_position_of_mouse_x; 
last_position_of_y = current_position_of_mouse_y; 
    
        
        
        
    

    


    