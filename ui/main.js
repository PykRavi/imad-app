console.log('Loaded!');
var button = document.getElementById('button');
button.onclick = function (){
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        console.log('jump');
        if ( request.readystate === XMLHttpRequest.DONE ) {
            if ( request.status === 200 ) {
                console.log('double');
                var cntr = request.responseText;
                var span = document.getElementById('cter');
                span.innerHTML = cntr.toString();
            }
        }
    };

     
     request. open('GET','/counter',true);
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


