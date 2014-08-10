

$(document).ready(function(){
   $($('section').get().reverse()).each(function(){
       var $bgobj = $(this); // assigning the object
       var origin = $bgobj.offset().top;
       $bgobj.css('position', 'absolute');
       $bgobj.css({ top:origin });
       var previous  = 0

       $(window).scroll(function() {
         //  var yPos = -($window.scrollTop() / $bgobj.data('speed'));
           documentHeight = $(document).height();
           browserHeight = $(window).height();
           lastCardHeight = $('section').last().height();
           var yPos = ($(window).scrollTop());
           console.log("ypos is " + yPos)
           // console.log("documentHeight is " + documentHeight)
           // console.log("browserHeight is " + browserHeight);
           // console.log("lastCardHeight is " + lastCardHeight);
           // console.log("stopping at is " + (yPos + lastCardHeight));

           if (yPos + lastCardHeight >= documentHeight ){
               return
           }

           //debugger
           //if we are above the card's start
           //if we are past the card
           else if (yPos > origin) {
               $bgobj.css({ top: yPos });
           }
           previous = yPos;


       });
   });
});
