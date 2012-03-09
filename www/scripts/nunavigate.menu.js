$(document).bind("mobileinit",
                function(){
                    $.mobile.pushStateEnabled = true;
                });

var menuStatus;
const NU_EVANSTON = "42.0575,-87.6755";
var overflow =  document.documentElement.style.overflow;

function toggleMenu() {
    
            if(menuStatus != true){
                if (navigator.geolocation) {
      
                      // request the device's current position 
                    navigator.geolocation.getCurrentPosition(geoMenuSuccess, geoMenuFailure);
                }
                
                $(".ui-page-active").animate({
                        left: "260px",
                  }, 300, function(){
                    menuStatus = true;
                    //overflow =  document.documentElement.style.overflow;
                    document.documentElement.style.overflow = 'hidden';
                    $(".ui-page-active").addClass("menu-active");
                    $(".ui-page-active").removeClass("menu-inactive");
                    $(".menu-page-mask").removeClass("hidden");
                    });
                return false;
              } else {
                    $(".menu-page-mask").addClass("hidden");
                    $(".ui-page-active").animate({
                    left: "-260px",
                    }, 300, function(){
                      //document.documentElement.style.overflow = overflow;
                      menuStatus = false;
                      $(".ui-page-active").addClass("menu-inactive");
                      $(".ui-page-active").removeClass("menu-active");
                      });
                    return false;
              }
                /*
                $(".ui-page-active").addClass("menu-active");
                menuStatus = true;
                return false;
            }
            else{
                $(".ui-page-active").removeClass("menu-active");
                menuStatus = false;
                return false;
            }
                */

}

$(function(){
    // Show menu
    $("a.showMenu").click(function() {toggleMenu()});
    $("div.menu-page-mask").click(function() {toggleMenu()});
    navigator.geolocation.getCurrentPosition(geoMenuSuccess, geoMenuFailure);
    
    $("#menu li a").click(
        function(){
            $(".menu-page-mask").addClass("hidden");
            $(".ui-page").addClass("menu-inactive");
            $(".ui-page").removeClass("menu-active");
            menuStatus = false;
            var p = $(this).parent();
            if($(p).hasClass('active')){
                    $("#menu li").removeClass('active');
            } else {
                    $("#menu li").removeClass('active');
                    $(p).addClass('active');
            }
    });

/*

    $('#menu, .pages').live("swipeleft", function(){
            if (menuStatus){	
            $(".ui-page-active").animate({
                    marginLeft: "0px",
              }, 300, function(){menuStatus = false});
              }
    });

    $('.pages').live("swiperight", function(){
            if (!menuStatus){	
            $(".ui-page-active").animate({
                    marginLeft: "165px",
              }, 300, function(){menuStatus = true});
              }
    });
*/
/*
    $('div[data-role="page"]').live('pagebeforeshow',function(event, ui){
            menuStatus = false;
            $(".pages").css("margin-left","0");
    });

    // Menu behaviour
    $("#menu li a").click(function(){
            var p = $(this).parent();
            if($(p).hasClass('active')){
                    $("#menu li").removeClass('active');
            } else {
                    $("#menu li").removeClass('active');
                    $(p).addClass('active');
            }
    });

    // Tabs 
    $('div[data-role="navbar"] a').live('click', function () {
            $(this).addClass('ui-btn-active');
            $('div.content_div').hide();
            $('div#' + $(this).attr('data-href')).show();
    });
*/
});

//-----------------------------------------------------------------
// This gets called if the user's position is successfully obtained
//-----------------------------------------------------------------
function geoMenuSuccess(position) {
   var lat = position.coords.latitude;
   var lon = position.coords.longitude;
   showMap(lat + "," + lon, "purple", "o");
}


//-----------------------------------------------------------------
// This gets called if the browser failed to obtain the position
// error.code values
//   1: permission denied
//   2: position not available
//   3: request timeout
//-----------------------------------------------------------------
function geoMenuFailure(error) {
   //alert("Geolocation error (" + error.code + ")" );
   showMap(NU_EVANSTON, "green", "NU");
}


//-----------------------------------------------------------------
// Show map uses the Google static image API to display a map on
// the screen with the user's current position
//-----------------------------------------------------------------
function showMap(position, color, label) {
   var marker = ("color:" + color + "|" +
                 "label:" + label + "|" +
                 position);
   
   var url = ("http://maps.google.com/maps/api/staticmap?" +
              "center=" + position + "&" +
              "size=220x150&" +
              "maptype=roadmap&" +
              "markers=" + marker + "&" +
              "zoom=" + 16 + "&" +
              "randomkey=" + Math.random() + "&" +
              "sensor=true");
   var img = document.getElementById("menu-map");
   img.src = url;
}