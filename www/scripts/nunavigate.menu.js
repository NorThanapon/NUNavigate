$(document).bind("mobileinit",
                function(){
                    $.mobile.pushStateEnabled = true;
                });

var menuStatus;
function toggleMenu() {
    
            if(menuStatus != true){
                
                $(".ui-page-active").animate({
                        left: "260px",
                  }, 300, function(){
                    menuStatus = true;
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
    $("a.showMenu").click(toggleMenu);
    $("div.menu-page-mask").click(toggleMenu);
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