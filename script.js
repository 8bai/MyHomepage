jQuery(function($){
    console.log('Hello!');
    $('.myface img').mouseover(function() {
        $(this).css('border', '2px solid black');
    });
    $('.myface img').mouseout(function() {
        $(this).css('border', '2px solid white');
    });
});