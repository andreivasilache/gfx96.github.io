  var localImages = [];
  var haveBeenInit = JSON.parse(localStorage.getItem("init")) || localStorage.setItem("init", "false"); //false= make init

  var images = [
    'https://images.unsplash.com/photo-1530297189419-8155da24fc99?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=42f814b6f0139f373fda848dffc7eba5&auto=format&fit=crop&w=967&q=80',
    'https://images.unsplash.com/photo-1530348097767-16a75a3b7c6c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f2e8c3fc85dead2bbaa396a2780e449e&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/photo-1530374195309-8c25022c4753?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5534a9f08e8c20a904adf30e32fcac5d&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/photo-1530286084568-4b273ecd1c34?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0bc6bebd8f5ee1888903ad43e1d5b215&auto=format&fit=crop&w=1035&q=80',
    'https://images.unsplash.com/photo-1530368322975-8969112c9f8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4cd17b035151c9e43647c3dede121a04&auto=format&fit=crop&w=967&q=80',
    'https://images.unsplash.com/photo-1530285897338-d9d80e81d078?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1107aed66efef7b215454ceabb5bf657&auto=format&fit=crop&w=1053&q=80'
  ];

  localImages = JSON.parse(localStorage.getItem("Image"));

  if (!haveBeenInit) {
    localStorage.setItem("Image", JSON.stringify(images));
    localImages = JSON.parse(localStorage.getItem("Image"));
    localStorage.setItem("init", "true");
  }

  var quotes = [
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

  var name = localStorage.Name || "Stranger"; //set  name


  function randomElement(arr) { //return random iteration of number
    var number = Math.floor(Math.random() * arr.length);
    return arr[number];
  }


  $(function () { //background image fade
    $("#dvImage").css("background-image", "linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3))," + "url(" + randomElement(localImages) + ")");
    setInterval(function () {
      $("#dvImage").fadeOut("slow", function () {
        $(this).css("background-image", "linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3))," + "url(" + randomElement(localImages) + ")");
        $(this).fadeIn("slow");
      });
    }, 30000);
  });

  setInterval(function () { //Clock
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
  }, 100);

  function store() {
    localStorage.setItem("Facebook", document.getElementById("Facebook1").value);
    localStorage.setItem("Youtube", document.getElementById("Youtube1").value);
    localStorage.setItem("Search", document.getElementById("Search1").value);
    localStorage.setItem("Mail", document.getElementById("Mail1").value);
    localStorage.setItem("Learn", document.getElementById("Learn1").value);
    localStorage.setItem("Film", document.getElementById("Film1").value);
    localStorage.setItem("Name", document.getElementById("Name").value);
    $('#exampleModalCenter').modal('hide');
    setHrefVal();
  }

  function showDataFromStorage() {
    $("#Facebook1").val(localStorage.Facebook);
    $("#Youtube1").val(localStorage.Youtube);
    $("#Search1").val(localStorage.Search);
    $("#Mail1").val(localStorage.Mail);
    $("#Learn1").val(localStorage.Learn);
    $("#Film1").val(localStorage.Film);
    $("#Name").val(localStorage.Name);
  }

  var FacebookUrl = localStorage.Facebook || "https://www.facebook.com/vasilache.andrei46";
  var YoutubeUrl = localStorage.Youtube || "https://www.youtube.com/";
  var SearchUrl = localStorage.Search || "https://www.google.com/";
  var MailUrl = localStorage.Mail || "";
  var LearnUrl = localStorage.Learn || "";
  var FilmUrl = localStorage.Film || "";
  window.onload = setHrefVal;

  function setHrefVal() {
    $("#Facebook").attr("href", FacebookUrl);
    $("#Youtube").attr("href", YoutubeUrl);
    $("#Search").attr("href", SearchUrl);
    $("#Mail").attr("href", MailUrl);
    $("#Learn").attr("href", LearnUrl);
    $("#Film").attr("href", FilmUrl);
  }

  function timeInfo() {
    var today = new Date();
    var h = today.getHours();
    $(".name").text("   " + name + ".");
    $(".morning").hide();
    $(".morning").hide();
    if (h >= 5 && h <= 11) {
      $(".morning").siblings(".elem").hide();
      $(".nightSalute").hide();
      $(".daySalute").show();
      $(".morning").show();
    } else if (h >= 12 && h <= 18) {
      $(".day").siblings(".elem").hide();
      $(".daySalute").show();
      $(".nightSalute").hide();
      $(".day").show();
    } else if (h > 18 && h < 22) {
      $(".evening").siblings(".elem").hide();
      $(".daySalute").hide();
      $(".nightSalute").show();
      $(".evening").show();
    } else {
      $(".night").siblings(".elem").hide();
      $(".daySalute").hide();
      $(".nightSalute").show();
      $(".night").show();
    }
  }

  function changeQuote() {
    $(".quote").text(randomElement(quotes));

  }
  timeInfo();
  changeQuote();
  setInterval(timeInfo, 10800000); //once 3h
  setInterval(changeQuote, 15000);

  $(".instalation").hide();

  function guide() {
    $(".instalation").slideToggle();
  }

  function passArray() {
    if (localImages.length != 0) {
      for (var i = 0; i < localImages.length; i++) {
        $(".images").append("<img src='" + localImages[i] + "' class='image img-fluid'>");
      }
    }
  }
  passArray();

  $(".changeImg_Btn").on("click", function () {
    $("#exampleModalCenter").modal("hide");
  });

  $(".image").on("click", function () {
    $(this).css("display", "none");
    localImages.splice($(this).index() - 1, 1);
    saveStorage_Images();
  });

  $(".fa-plus").on("click", function () {
    showAddedImage();
    saveStorage_Images();
  });


  function saveImageOnEnter(event) {
    if (event.keyCode == 13) {
      if (document.querySelector(".imageLink").value === '') {
        alert("I think you forgot the link!");
      } else {
        showAddedImage();
        saveStorage_Images();
        document.querySelector(".imageLink").value = '';
      }
    }
  }

  function showAddedImage() {
    var gotImage = $(".imageLink").val();
    if (gotImage != "") {
      localImages.push(gotImage);
      $(".images").append("<img src='" + localImages[localImages.length - 1] + "' class='image'>");
    }
  }

  function saveStorage_Images() {
    localStorage.setItem("Image", JSON.stringify(localImages));
  }