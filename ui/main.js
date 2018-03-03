console.log('Loaded!');
var button = document.getElementById('button');
button.onclick = function (){
    var request = new XMLHttpRequest();
    
    
    document.getElementById('counter').InnerHTML = counter;
    
    
};
var img = document.getElementById('getimg');
var marginLeft = 100;
function MoveLeft()
{
    marginLeft = marginLeft - 1;
    img.style.marginLeft = marginLeft + "px";
}
img.onclick = function(){
    setInterval(MoveLeft,50);
};


