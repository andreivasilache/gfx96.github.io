  var localImages=[];
  var haveBeenInit=JSON.parse(localStorage.getItem("init")) || localStorage.setItem("init","false");  //false= make init 

  var images=[
    'https://images.unsplash.com/photo-1530297189419-8155da24fc99?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=42f814b6f0139f373fda848dffc7eba5&auto=format&fit=crop&w=967&q=80',
    'https://images.unsplash.com/photo-1530348097767-16a75a3b7c6c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f2e8c3fc85dead2bbaa396a2780e449e&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/photo-1530374195309-8c25022c4753?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5534a9f08e8c20a904adf30e32fcac5d&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/photo-1530286084568-4b273ecd1c34?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0bc6bebd8f5ee1888903ad43e1d5b215&auto=format&fit=crop&w=1035&q=80',
    'https://images.unsplash.com/photo-1530368322975-8969112c9f8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4cd17b035151c9e43647c3dede121a04&auto=format&fit=crop&w=967&q=80',
    'https://images.unsplash.com/photo-1530285897338-d9d80e81d078?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1107aed66efef7b215454ceabb5bf657&auto=format&fit=crop&w=1053&q=80'

  ];

  localImages=JSON.parse(localStorage.getItem("Image"));

if( !haveBeenInit ){ //if storage is empty
  localStorage.setItem("Image", JSON.stringify(images));
  localImages=JSON.parse(localStorage.getItem("Image"));   // get images from storage as localImages parameter
  localStorage.setItem("init","true");  // initialized have been made
}

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

var city =localStorage.City || "Suceava"; //set  city
var name =localStorage.Name || "Stranger";  //set  name

// Background image switcher 
 
function randomElement(arr){ //return random iteration of number
    var number= Math.floor(Math.random()*arr.length);
    return arr[number];
}
 

$(function () { //background image fade
 $("#dvImage").css("background-image","linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)),"+"url("+randomElement(localImages)+")");
    setInterval(function () {
        $("#dvImage").fadeOut("slow", function () {
            $(this).css("background-image", "linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)),"+"url("+randomElement(localImages)+")");
            $(this).fadeIn("slow");
        });
    }, 30000); 
});

setInterval(function(){ //Clock
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

//Api data fetcher weather url
var url="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22+"+city+"%2C%20ro%22)%20%20and%20u%3D%27c%27&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

fetch(url) //fetch url
.then((data) => data.json())  //transforma data in JSON
.then(function(data){
   var elements=data;
   $(".location").html(data.query.results.channel.location.city+" - "+data.query.results.channel.item.condition.temp+" C "+data.query.results.channel.item.condition.text);
   $(".tomorow").html(data.query.results.channel.item.forecast[1].day+" : "+data.query.results.channel.item.forecast[1].low+"-"+data.query.results.channel.item.forecast[1].high+" C "+data.query.results.channel.item.forecast[1].text);
   $(".tomorow-2").html(data.query.results.channel.item.forecast[2].day+" : "+data.query.results.channel.item.forecast[2].low+"-"+data.query.results.channel.item.forecast[2].high+" C "+data.query.results.channel.item.forecast[2].text);
   $(".tomorow-3").html(data.query.results.channel.item.forecast[3].day+" : "+data.query.results.channel.item.forecast[3].low+"-"+data.query.results.channel.item.forecast[3].high+" C "+data.query.results.channel.item.forecast[3].text);
   $(".astronomy").html("Sun and moon: "+data.query.results.channel.astronomy.sunrise+" - "+data.query.results.channel.astronomy.sunset);
}).catch(err => console.log(err));

// Page visual setup
$("#weather").hide();
$(".togg-weather").on("mouseover",function(){
    $("#weather").show();
   
});
$(".togg-weather").on("mouseleave",function(){
    $("#weather").hide();

});



function store(){// Save local storage
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
    $(".morning").hide();
    $(".morning").hide();
  if(h>=5 && h<=11){
   $(".morning").siblings(".elem").hide();
   $(".nightSalute").hide();
   $(".daySalute").show();
   $(".morning").show();
  }
  else if(h>=12 && h<=18){
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

function passArray(){ //array iteration
  if(localImages.length != 0){
    for(var i=0;i<localImages.length;i++){ //pass the array for image initalization
      $(".images").append("<img src='"+localImages[i]+"' class='image img-fluid'>");
    }
  }
}
passArray();

$(".changeImg_Btn").on("click",function(){
  $("#exampleModalCenter").modal("hide");
});

$(".image").on("click",function(){  //delete image
  $(this).css("display","none");
  localImages.splice($(this).index()-1,1);
  console.log(localImages);
});

$(".fa-plus").on("click",function(){ //add image
  var gotImage=$(".imageLink").val();
  if(gotImage != ""){
    localImages.push(gotImage);  //Push image to this array.
    $(".images").append("<img src='"+localImages[localImages.length-1]+"' class='image'>");  //show added image
  }
  
  
});
//save everything to storage
window.onbeforeunload = saveStorage_Images();
function saveStorage_Images(){
  localStorage.setItem("Image", JSON.stringify(localImages)); // refresh values of current storage
}
 
