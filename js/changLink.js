
$('a').each(function(){
    var addr = $(this).attr('href');
    console.log(addr);

    $(this).attr('href', "https://www.google.com");
});

$('img').each(function(){
    var source = $(this).attr('src');
    
    var fix = "img/"+source;
    console.log(fix);

    $(this).attr('src', fix);
});