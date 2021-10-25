
//event handler
function changeStyle(e){
    //this -> reps element clicked
    //e -> event triggered

    e.preventDefault();

    var currentClass = this.getAttribute('class');

    if (currentClass == 'answer'){
        this.setAttribute('class', "answer selected");
        this.children[0].children[0].checked = true;
        this.animate([{transform:'rotate(0deg)'}, {transform:'rotate(180deg)'}],{duration:3000,fill:"forwards"});
    }
    else{
        this.setAttribute('class', "answer");
        this.children[0].children[0].checked = false;
        this.animate([{transform:'rotate(180deg)'}, {transform:'rotate(360deg)'}],{duration:3000,fill:"forwards"});
    }
}


//events
var eList = document.getElementsByClassName('answer');
for (var i=0; i<eList.length; i++){
    eList[i].addEventListener('click', changeStyle);
}