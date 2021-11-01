
//when key up -> disp key code
function showKeyCode(e){
    var lastKE = document.getElementById('lastKey');
    lastKE.textContent = "Last key in ASCII code: " + e.keyCode;
}

//bind the action
$('#message').keyup(showKeyCode);

//-------------------------------------------------------------------------------------------------------//

//press key move the +
var posX = 100;
var posy = 10;

function moveIt(e){
    if (e.key=='s'){
        $('img').animate({left: '400px'}, 500, 'linear');
    }
}

//binding
document.addEventListener('keydown', moveIt);

//-------------------------------------------------------------------------------------------------------//

//show mouse pos on click
function mousePos(e){
    var lastKE = document.getElementById('lastKey');
    lastKE.textContent = "position: (" + e.pageX + ", " + e.pageY + ")";
}

//binding
document.addEventListener('mousemove', mousePos);