$(document).ready(function(){
    
    //STICKY MENU SECTION
$(".js--service-section").waypoint(function(direction){
    if(direction == 'down'){
        $("nav").addClass("sticky");
    } else {
         $("nav").removeClass("sticky");
    }
});
    

    //MISITUP PORTFOLIO SECION
    var mixer =mixitup('.container');
});

function openNav(){
    document.getElementById("myNav").style.width = "100%";
}
function closeNav(){
    document.getElementById("myNav").style.width = "0%";
}