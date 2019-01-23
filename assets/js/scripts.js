window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

/*Scroll to a href from nav*/
    $("a[href^='#']").click(function(e) {
        e.preventDefault();
        
        var position = $($(this).attr("href")).offset().top;
    
        $("body, html").animate({
            scrollTop: position
        });
    });


  