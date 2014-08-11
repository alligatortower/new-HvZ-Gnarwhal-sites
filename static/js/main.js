

$(document).ready(function(){
   $($('section').get().reverse()).each(function(){
       var $bgobj = $(this); // assigning the object
       var origin = Math.floor($bgobj.offset().top);
       $bgobj.css('position', 'absolute');
       $bgobj.css({ top:origin });

       $(window).scroll(function() {
           //  var yPos = -($window.scrollTop() / $bgobj.data('speed'));
           var yPos = Math.floor(($(window).scrollTop()));
           var browserHeight = Math.floor($(window).height());
           var cardHeight = Math.floor($bgobj.height());


           var stopCheck = origin + (cardHeight - browserHeight);
           var fixHeight = yPos - (cardHeight - browserHeight);

           if (yPos == origin){
               $bgobj.css({ top:origin });
           }
           else if (yPos > stopCheck){
               $bgobj.css({top: fixHeight});
           }
       });
   });
});
