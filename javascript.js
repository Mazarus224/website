function changeColor()
{
    var y1 = document.getElementById('y1');
    var y2 = document.getElementById('y2');
    var y3 = document.getElementById('y3');
    var Color = '#37E007'; 
    var Color2 = 'Gold'
    y1.style.backgroundImage = 'linear-gradient(to right, gold 30%, #37E007 100%)';
    y2.style.backgroundImage = 'linear-gradient(to top, gold 30%, #37E007 100%)';
    y3.style.backgroundImage = 'linear-gradient(to top, gold 30%, #37E007 100%)';
    y4.style.backgroundImage = 'linear-gradient(to left, gold 30%, #37E007 100%)';
}

function changeColorback()
{
    var y1 = document.getElementById('y1');
    var y2 = document.getElementById('y2');
    var y3 = document.getElementById('y3');
    var Color = 'Gold'; 
    var Color2 = '#37E007'
    y1.style.backgroundImage = 'linear-gradient(to left, gold 30%, #37E007 100%)';
    y2.style.backgroundImage = 'linear-gradient(to bottom, gold 30%, #37E007 100%)';
    y3.style.backgroundImage = 'linear-gradient(to bottom, gold 30%, #37E007 100%)';
    y4.style.backgroundImage = 'linear-gradient(to right, gold 30%, #37E007 100%)';
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
