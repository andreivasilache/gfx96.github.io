 var images = [
    "https://images.unsplash.com/photo-1495183100528-6acc1f0d9146?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f3558575c3dfe47c782ec070964bf91c&auto=format&fit=crop&w=1489&q=80",
    "https://images.unsplash.com/photo-1519865402023-40e4b7bfcba0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7ff1b07d24dfa8aead0b040f1681dbb4&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1496749843252-699a989877a1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fe5da9650707e5a93c8c3cf164c2e74b&auto=format&fit=crop&w=1375&q=80",
    "https://images.unsplash.com/photo-1507274124469-24baf52e7217?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5b6aaf95a7a426214f1abd180dcc8d8&auto=format&fit=crop&w=1352&q=80",
    "https://images.unsplash.com/photo-1502656109408-152680a8ad1c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=40e160d54f5831df3d12204916d8edb1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1499702111052-d63bd11c766a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4629c4f7aa584a9ca963ad052c73c1cd&auto=format&fit=crop&w=1267&q=80",
    "https://images.unsplash.com/photo-1492634066426-0cc6c9db9632?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fabb8afd456fe2b4e909906d7a56e6f3&auto=format&fit=crop&w=1386&q=80",
    "https://images.unsplash.com/photo-1526371962155-8f27ed893ab7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=927ce203843f4cb67f271af50aac6e15&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1514041790697-53f1f86214d2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b7ac79503fbe78855a346c8d814f95ba&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1519827737530-b255e4d1d0af?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=adbba1760be6ef305d1532a3c626f9c1&auto=format&fit=crop&w=1226&q=80",
    "https://images.unsplash.com/photo-1521953793652-39ff7b30d400?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=187282855273f92db1d0f65835ba8f60&auto=format&fit=crop&w=1350&q=80"
    ];
 var quotes=[
    '  " Do not let yesterday take up too much of today." - Will Rogers',
    '  " If you are working on something that you really care about, you do not have to be pushed. The vision pulls you." - Steve Jobs',
    '  " People who are crazy enough to think they can change the world, are the ones who do." - Rob Siltanen',
    '  " Knowing is not enough; we must apply. Wishing is not enough; we must do."  - Johann Wolfgang Von Goethe',
    '  " The only limit to our realization of tomorrow will be our doubts of today."  - Albert Einstein ',
    '  " Creativity is intelligence having fun." ',
    '  " You are never too old to set another goal or to dream a new dream." - C.S. Lewis ',
    '  " You do not have to be great to start, but you have to start to be great." - Zig Ziglar ',
    '  " Success usually comes to those who are too busy to be looking for it. " - Henry David Thoreau',
    '  " Success is walking from failure to failure with no loss of enthusiasm. " - Winston Churchill',
    '  " Try not to become a person of success, but rather try to become a person of value." - Albert Einstein',
    '  " The No. 1 reason people fail in life is because they listen to their friends, family, and neighbors." - Napoleon Hill',
    '  " You never regret being kind." - Nicole Shepherdh',
    '  " You get in life what you have the courage to ask for." - Nancy D. Solomon',
];

var city =localStorage.City || "Suceava";
var name =localStorage.Name || "Stranger";

//                             Background image switcher 
 
 function randomElement(arr){
  var number= Math.floor(Math.random()*arr.length);
  return arr[number];

 }
 
  
function changeBackground(){
// 240000
}
  // background-image: 
  //   linear-gradient(
  //     rgba(0, 0, 0, 0.5),
  //     rgba(0, 0, 0, 0.5)
  //   ),
  //   url(shoes.jpg);
$(function () {
 $("#dvImage").css("background-image","linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)),"+"url("+randomElement(images)+")");
                                     
    setInterval(function () {
        $("#dvImage").fadeOut("slow", function () {
            $(this).css("background-image", "linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)),"+"url("+randomElement(images)+")");
            $(this).fadeIn("slow");
        });
    }, 30000); 
});
//                                               Clock

setInterval(function(){
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

          $(".h").text(h);
          $(".m").text(m);
          $(".s").text(s);
}
    startTime();
    
},100);



//                                             Api data fetcher

var url="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22+"+city+"%2C%20ro%22)%20%20and%20u%3D%27c%27&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

fetch(url)
.then((data) => data.json())  //transformare data in JSON
.then(function(data){
   var elements=data;
   $(".location").html(data.query.results.channel.location.city+" - "+data.query.results.channel.item.condition.temp+" C "+data.query.results.channel.item.condition.text);
   $(".tomorow").html(data.query.results.channel.item.forecast[1].day+" : "+data.query.results.channel.item.forecast[1].low+"-"+data.query.results.channel.item.forecast[1].high+" C "+data.query.results.channel.item.forecast[1].text);
   $(".tomorow-2").html(data.query.results.channel.item.forecast[2].day+" : "+data.query.results.channel.item.forecast[2].low+"-"+data.query.results.channel.item.forecast[2].high+" C "+data.query.results.channel.item.forecast[2].text);
   $(".tomorow-3").html(data.query.results.channel.item.forecast[3].day+" : "+data.query.results.channel.item.forecast[3].low+"-"+data.query.results.channel.item.forecast[3].high+" C "+data.query.results.channel.item.forecast[3].text);
   $(".astronomy").html("Sun and moon: "+data.query.results.channel.astronomy.sunrise+" - "+data.query.results.channel.astronomy.sunset);

})
.catch(err => console.log(err));

// Page visual setup
$("#weather").hide();
$(".togg-weather").on("mouseover",function(){
    $("#weather").show();
   
});
$(".togg-weather").on("mouseleave",function(){
    $("#weather").hide();

});
// Preset local default storage


// Save local storage
function store(){
     localStorage.setItem("Facebook", document.getElementById("Facebook1").value);
     localStorage.setItem("Youtube", document.getElementById("Youtube1").value);
     localStorage.setItem("Search", document.getElementById("Search1").value);
     localStorage.setItem("Mail", document.getElementById("Mail1").value);
     localStorage.setItem("Learn", document.getElementById("Learn1").value);
     localStorage.setItem("Film", document.getElementById("Film1").value);
     localStorage.setItem("City", document.getElementById("Location").value);
     localStorage.setItem("Name", document.getElementById("Name").value);
     // Hide modal
     $('#exampleModalCenter').modal('hide');
     setHrefVal();
}
//show data on settings box
function showDataFromStorage(){
  $("#Facebook1").val(localStorage.Facebook);
  $("#Youtube1").val(localStorage.Youtube);
  $("#Search1").val(localStorage.Search);
  $("#Mail1").val(localStorage.Mail);
  $("#Learn1").val(localStorage.Learn);
  $("#Film1").val(localStorage.Film);
  $("#Location").val(localStorage.City);
  $("#Name").val(localStorage.Name);
  
}
//set the links to the bottons 

var FacebookUrl=localStorage.Facebook || "https://www.facebook.com/vasilache.andrei46";
var YoutubeUrl=localStorage.Youtube || "https://www.youtube.com/";
var SearchUrl=localStorage.Search || "https://www.google.com/";
var MailUrl=localStorage.Mail || "";
var LearnUrl=localStorage.Learn|| "";
var FilmUrl=localStorage.Film || "";
// Set the links when page loads
window.onload=setHrefVal;
function setHrefVal(){
  $("#Facebook").attr("href",FacebookUrl);
  $("#Youtube").attr("href",YoutubeUrl );
  $("#Search").attr("href", SearchUrl);
  $("#Mail").attr("href", MailUrl);
  $("#Learn").attr("href", LearnUrl);
  $("#Film").attr("href", FilmUrl);
}

// Get time info
function timeInfo(){
    var today = new Date();
    var h = today.getHours();

    $(".name").text("   "+name+".");

    $(".morning")
    $(".morning").hide();
    $(".morning").hide();
  if(h>5 && h<12){
   $(".morning").siblings(".elem").hide();
   $(".nightSalute").hide();
   $(".daySalute").show();
   $(".morning").show();
  }
  else if(h>12 && h<18){
    $(".day").siblings(".elem").hide();
    $(".daySalute").show();
    $(".nightSalute").hide();
    $(".day").show();
  }
  else if(h>18 && h<22){
    $(".evening").siblings(".elem").hide();
    $(".daySalute").hide();
    $(".nightSalute").show();
    $(".evening").show();
  }else{
    $(".night").siblings(".elem").hide();
    $(".daySalute").hide();
    $(".nightSalute").show();
    $(".night").show();

  }
}

// Quotes
function changeQuote(){
  $(".quote").text(randomElement(quotes));
  
}
timeInfo();
changeQuote(); //to be deleted
setInterval(timeInfo,10800000); //once 3h
setInterval(changeQuote,15000);

$(".instalation").hide();
function guide(){
$(".instalation").slideToggle();
}