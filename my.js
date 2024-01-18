$(document).ready(function(){
    $('#showhide').hover(function() {
        $("div.container").toggleClass('mynewclass');
    });
});
$(document).ready(function(){
    $('#showhideleft').hover(function() {
        $("div.container").toggleClass('mynewlefclass');
    });
});

$(document).ready(function(){

    $('#gifchange').clic(function() {
        $("div.gif").toggleClass('gif2');
    });
  });
