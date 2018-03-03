console.log('Loaded!');
var button = document.getElementByid('button');
button.onclick = function (){
    
};
var img = document.getElementByid('getimg');
var marginLeft = 100;
function MoveLeft()
{
    marginLeft = marginLeft - 1;
    img.style.marginLeft = marginLeft + "px";
}
img.onclick = function(){
    var interval = Setinterval(MoveLeft,50);
};