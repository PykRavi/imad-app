console.log('Loaded!');
var button = document.getElementById('button');
button.onclick = function (){
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function () {
        if ( request.readystate === XMLHttpRequest.DONE ) 
        {
            if ( request.status == 200 ) {
                var counter = request.responseText;
                document.getElementById('counter').InnerHTML = Counter.toString();
            }
        }
        
    };
    
    request.open('GET','/counter',true);
    request.send(null);
    
    
    
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


