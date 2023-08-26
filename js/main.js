

let countDownDate= new Date();
let yearDate=0;
let monthDate=0;
let dayDate=0;
let hourDate=0;
let minuteDate=0;
let timeDate="PM";
let textarea=document.getElementsByTagName("textarea");

$(document).ready(function(){
    $(".loading").fadeOut(2000,function(){
        $(".loading").remove();
    });
})



// 236.413
$("nav").css("left",`${-$("nav").innerWidth()}px`);

$(".duration .duration-contact .singer .singer-data").eq(0).slideDown();

$("header .header-content .nav-opener").click(function () {  
if($("nav").css("left")==`${-$("nav").innerWidth()}px`){
    $("nav").animate({"left":"0px"},500);
    $("header .header-content .nav-opener").animate({"margin-left":`${($("nav").innerWidth())+40}px`},500);
}   
});




$("nav .nav-links .close").click(function(e){
    e.preventDefault();
    if($("nav").css("left")=="0px"){
        $("nav").animate({"left":`${-$("nav").innerWidth()}px`},500);
        $("header .header-content .nav-opener").animate({"margin-left":`${40}px`},500);
    } 
})


$(".duration .duration-contact .singer h3").click(function(eventInfo){
$(eventInfo.target).next().slideToggle(500);
$(".duration .duration-contact .singer .singer-data").not($(eventInfo.target).next()).slideUp(500)

});




$(".btn-book").click(function(evntInfo){
    yearDate=Number($(evntInfo.target).prev().children(".year-date").html());
    monthDate=Number($(evntInfo.target).prev().children(".month-date").html());
    dayDate=Number($(evntInfo.target).prev().children(".day-date").html());
    hourDate=Number($(evntInfo.target).prev().children(".hour-date").html());
    minuteDate=Number($(evntInfo.target).prev().children(".minute-date").html());
    timeDate=$(evntInfo.target).prev().children(".time-date").html();
    console.log(dayDate,monthDate,yearDate,hourDate,minuteDate,timeDate);

    countDownDate = new Date(yearDate,monthDate-1, dayDate,timeDate=="PM"?hourDate+12:hourDate,minuteDate, 0).getTime();
// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
console.log(countDownDate);
console.log(now);
  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";
$("#day").html(`${days} D`);
$("#hour").html(`${hours} h`);
$("#minute").html(`${minutes} m`);
$("#second").html(`${seconds} s`);
  // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
}, 1000);
});



textarea[0].addEventListener("input",function(){
    console.log(textarea[0].value.length);
    if(textarea[0].value.length<=100)
    {$(".character-counter").html(`${100-textarea[0].value.length}`);}
    else{
        $(".character-counter").html("your available character finished")   
    }

})

$("a[href^='#']").click(function(eventInfo){
   
   $("body,html").animate({scrollTop:$($(eventInfo.target).attr("href")).offset().top},1000);
    
})


