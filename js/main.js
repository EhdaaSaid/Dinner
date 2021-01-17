$(document).ready(function(){
//carousel height
var winH = $(window).height();

//$('.nPar #carouselExampleIndicators').height( $(window).height() );
$('.nPar').height( $(window).height() );
$('.nPar .carousel-item').height( $(window).height() );




//Aside
   $('.allAppear').click(function(){
        $('.drink' ).show();
        $('.lunch' ).show();
        $('.dinner' ).show();
    

   });

    $('.dr').click(function(){
        $('.drink' ).show();
        $('.lunch' ).hide();
        $('.dinner' ).hide();
    });
    
    $('.lunchc').click(function(){
        $('.lunch' ).show();
        $('.drink' ).hide();
        $('.dinner' ).hide();
    });
    
    $('.dn').click(function(){
        $('.lunch' ).hide();
        $('.drink' ).hide();
        $('.dinner' ).show();
    });

   
    


 
  

//FullScreen Image
$('.popUp img').click(function (){

    var nSrc =$(this).attr("src");

    $(".show").fadeIn();
    $(".imgShow img").attr("src", nSrc );
});

$("span , .over").click(function(){
    $(".show").fadeOut();

});

window.addEventListener('load', function() {
    baguetteBox.run('.show', {
        animation: 'fadeIn',
        noScrollbars: true
    });
  });


  
    
   
 

	
//hide Pointer
$(function () {
    $.scrollUp({
      scrollName: 'scrollUp', // Element ID
      topDistance: '300', // Distance from top before showing element (px)
      topSpeed: 300, // Speed back to top (ms)
      animation: 'fade', // Fade, slide, none
      animationInSpeed: 200, // Animation in speed (ms)
      animationOutSpeed: 200, // Animation out speed (ms)
      scrollText: '<i class="fas fa-arrow-circle-up"></i> ', // Text for element
      activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });
  });



});

