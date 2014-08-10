

$(document).ready(function(){
   $($('section').get().reverse()).each(function(){
       var $bgobj = $(this); // assigning the object
       var origin = $(this).offset().top
       console.log('origin first' +  origin)
       
       $(this).css('position', 'absolute')
       $bgobj.css({ top:origin });
   
       $(window).scroll(function() {
         //  var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
          
           var yPos = ($(window).scrollTop()); 
           console.log('origin: ' + origin)
           console.log(yPos)
           if (yPos < origin && yPos >= 0) { 
               // Put together our final background position

               
           // Move the background
            $bgobj.css({ top: yPos });
           }
           else if (yPos > origin) {
            $bgobj.css({ top: origin });

           }
           else if (yPos <= 0) {
            $bgobj.css({ top: 0 });
           }
       }); 
   });    
});
