console.log('Loaded!');
var button = getElementByid('button');
button.onclick = function (){
    
};
var img = getElementByid('getimg');
function MoveLeft()
{
    marginLeft=marginLeft -1;
    img.style.MarginLeft =marginLeft + "px";
}
img.onclick = function(){
    var interval = Setinterval(MoveLeft,50);
};