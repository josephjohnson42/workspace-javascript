
//save regis on click submit
var guestgroup = new Array();

function saveR(){
    var guest = {
        name: $('#name').val(),
        numberofGuests: $('#numG').val(),
        checkin: $('#checkin').val(),
        checkout: $('#checkout').val(),
        room: $('#room').val(),
        display: function(){
            return this.name+" reserved "+this.room+" on "+this.checkin;
        }
    };

    console.log(guest.display());

    guestgroup.push(guest);


}

function displayR(){
    for (i in guestgroup){
        var guest = guestgroup[i];
        console.log(guest.display());
    }
}

$('#submit').click(saveR);
$('#lists').click(displayR);