

$(document).ready(function(){
   $($('section').get().reverse()).each(function(){
       var $bgobj = $(this); // assigning the object
       var origin = $bgobj.offset().top;
       $bgobj.css('position', 'absolute');
       $bgobj.css({ top:origin });
       var previous  = 0

       $(window).scroll(function() {
         //  var yPos = -($window.scrollTop() / $bgobj.data('speed'));
           var documentHeight = $(document).height();
           var browserHeight = $(window).height();
           var cardHeight = $bgobj.height();
           var lastCardHeight = $('section').last().height();
           var yPos = ($(window).scrollTop());
           var stopCheck = origin + (cardHeight - browserHeight);
           var fixHeight = yPos - (cardHeight - browserHeight);
           // console.log("documentHeight is " + documentHeight)
            console.log("browserHeight is " + browserHeight);
           // console.log("lastCardHeight is " + lastCardHeight);
           // console.log("stopping at is " + (yPos + lastCardHeight));
           console.log("ypos at is " + (yPos));
           console.log("card height at is " + (cardHeight));
           //console.log("stopping at is " + (stopLocation));

           if (yPos + lastCardHeight >= documentHeight ){
               return;
           }
           if (yPos > stopCheck){
               $bgobj.css({top: fixHeight});
           }
           previous = yPos;


       });
   });
});
