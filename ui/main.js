console.log('Loaded!');
var button = document.getElementById('button');
button.onclick = function (){
    
};
var img = document.getElementById('getimg');
var marginLeft = 100;
function MoveLeft()
{
    marginLeft = marginLeft - 1;
    img.style.marginLeft = marginLeft + "px";
}
img.onclick = function(){
    var interval = Setinterval(MoveLeft,50);
};