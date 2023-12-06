

function changeColor() {
    // Get the div elements
    var y1 = document.getElementById('y1');
    var y2 = document.getElementById('y2');
    var y3 = document.getElementById('y3');

    // Generate a random color
    var Color = '#37E007'; 
    var Color2 = 'Gold'

    // Apply the new color to the divs
    y1.style.backgroundColor = Color;
    y2.style.backgroundColor = Color2;
    y3.style.backgroundColor = Color;
}

function changeColorback() {
    // Get the div elements
    var y1 = document.getElementById('y1');
    var y2 = document.getElementById('y2');
    var y3 = document.getElementById('y3');

    // Generate a random color
    var Color = 'Gold'; 
    var Color2 = '#37E007'

    // Apply the new color to the divs
    y1.style.backgroundColor = Color;
    y2.style.backgroundColor = Color2;
    y3.style.backgroundColor = Color;
}
var count = 0;
function like()
{
    var x = document.getElementById('x');
    var Color = '#37E007'; 
    count++;
    x.style.backgroundColor = Color;
    console.log(count);
    window.alert(count)
}
var count1 = 0;
function like1()
{
    var x1 = document.getElementById('x1');
    var Color = '#37E007'; 
    count1++;
    x1.style.backgroundColor = Color;
    console.log(count1);
    window.alert(count1)
}