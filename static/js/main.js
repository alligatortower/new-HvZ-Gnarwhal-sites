$(document).ready(function(){
    $(function () {
        var platform = navigator.platform.toLowerCase();
        if (platform.indexOf('windows') != -1 || platform.indexOf('linux') != -1 || platform.indexOf('win32') != -1) {
                $.srSmoothscroll();
        }
    });
   $($('section').get().reverse()).each(function(){
       var $bgobj = $(this); // assigning the object
       var origin = $bgobj.offset().top;
       $bgobj.data('height', $bgobj.height())
       $bgobj.data('origin', origin);
       $bgobj.css('position', 'absolute');
       $bgobj.css({ top:origin });
   });

   $(window).scroll(function() {
       var yPos = $(window).scrollTop();
       var browserHeight = $(window).height();
       var card = false
       var origin
       $($('section').get().reverse()).each(function(){
           origin = $(this).data('origin') 
           if (yPos > origin) {
              card = $(this);
              return false; 
           }
       })
       if (card != false) {
           var cardHeight = card.data('height')
           var stopCheck = origin + (cardHeight - browserHeight);
           var fixHeight = yPos - (cardHeight - browserHeight);

           if (yPos == origin){
               card.css({ top:origin });
           }
           else if (yPos > stopCheck){
               card.css({top: fixHeight});
           }
       }
       if (yPos <= 0) {
           $('section').first().css({top:0})
       }
   })
   .resize(function() {
       location.reload(); 
   })
});
