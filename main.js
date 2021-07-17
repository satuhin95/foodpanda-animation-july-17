    
    setTimeout(headline, 1500);
    function headline () {
        if ($( ".slide_1 .element_2 .headlinebeshi" ).hasClass( "showZoomIn" )  ) {
            $( ".slide_1 .element_2 .headlinebeshi" ).removeClass( "showZoomIn" ).addClass( "hideZoomOut" );
            $( ".slide_1 .element_3 .minutes" ).removeClass( "showZoomIn" ).addClass( "hideZoomOut" );
            setTimeout(function() {
                $( ".slide_1 .element_2 .headline" ).removeClass( "hideZoomOut" ).addClass( "showZoomIn" );
                $( ".slide_1 .element_3 .delivery" ).removeClass( "hideZoomOut" ).addClass( "showZoomIn" );
                setTimeout(headlinebeshi, 1500);
            }, 500);
        }else{
            $(".slide_1 .element_2 .headline").addClass("hideZoomOut");
            $(".slide_1 .element_3 .delivery").addClass("hideZoomOut");
            setTimeout(headlinebeshi, 500);
        }                               
    }

    function headlinebeshi () {
        if( $(".slide_1 .element_2 .headlinebeshi").hasClass("hideZoomOut")  ){
            $( ".slide_1 .element_2 .headline" ).removeClass( "showZoomIn" ).addClass( "hideZoomOut" );
            $( ".slide_1 .element_3 .delivery" ).removeClass( "showZoomIn" ).addClass( "hideZoomOut" );
            setTimeout(function() {
                $(".slide_1 .element_2 .headlinebeshi").removeClass("hideZoomOut").addClass("showZoomIn");
                $(".slide_1 .element_3 .minutes").removeClass("hideZoomOut").addClass("showZoomIn");
                setTimeout(headline, 1500);
            }, 500);
        }else{
            $(".slide_1 .element_2 .headlinebeshi").removeClass("hidden").addClass("showZoomIn");
            $(".slide_1 .element_3 .minutes").removeClass("hidden").addClass("showZoomIn");
            setTimeout(headline, 1500);
        }
    }
