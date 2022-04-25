jQuery(function($){
    console.log('Hello!');
    /*
    $('.myface img').click(function() {
        $('.profile').animate({fontSize: 80}, 2000, 'swing', function(){alert("きも");});
    });
    $('.myface img').click(function() {
        $(this).fadeOut('slow');
    });
    */

    $('.humberger').click(function() {
        $('#ketsu').toggleClass('open');
    });
    $('.batsu').click(function() {
        $('#ketsu').toggleClass('open');
        
    });
    
    $(window).scroll(function() {
        
        var scroll = $(this).scrollTop();
        
        if(scroll > 300){
            $('#gototop').fadeIn('slow');
        }else{
            $('#gototop').fadeOut('slow');
        }
    });
});