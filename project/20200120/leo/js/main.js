$(document).ready(function() {
  $('select').niceSelect();
  $('.product__tab').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    dots: false,
    speed: 300,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  })

  $('.product__content').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    dots: false,
    speed: 300,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  })
  var cate="";
  $('.product__tab__item').on('click',function(e){
    $('.product__tab__item').removeClass('active');
    if($(this).hasClass('active')){

    }else{
      $(this).addClass('active');
    }
    cate = $(this).data('category');

    // console.log(cate);
    $('.product__content').slick('slickUnfilter');
    switch(cate){
      case "attractions":
        $('.product__content').slick('slickFilter','.attr_attractions');
      break;
      case "essentials":
          $('.product__content').slick('slickFilter','.attr_essentials');
      break;
      case "dining":
          $('.product__content').slick('slickFilter','.attr_dining');
      break;
      case "experience":
          $('.product__content').slick('slickFilter','.attr_experience');
      break;
    }
  })
  $('.partner__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    dots: false,
    speed: 300,
  })
  $('.article__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    dots: false,
    speed: 300,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  })

  $('.recommend__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    dots: false,
    speed: 300,
    variableWidth: true,
    centerMode:true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  })

  makeRequest();
});

function makeRequest() {
  xhr = new XMLHttpRequest();

  xhr.onload = function() {
    var response = JSON.parse(this.responseText);
    console.log(response);
    var city = response.city.name + ", " + response.city.country;
    var weatherTitle = response.list[0].weather[0].main;
    var tempC = response.list[0].main.temp;
    var tempF = response.list[0].main.feels_like;
    // console.log(response.list[0].weather[0].icon);
    var timeZone = response.city.timezone;
    var imgUrl = "http://openweathermap.org/img/wn/" + response.list[0].weather[0].icon + "@2x.png"
    console.log(imgUrl);
    $('.destination__weather__icon').attr("src", imgUrl);
    $('.weather__info__c').html(tempC + "°C");
    $('.weather__info__f').html(tempF + "°C");
    // var weatherContainer = document.querySelector("#weather");
    // weatherContainer.innerHTML = city + "<br/>" + weatherTitle + "<br/>" + temp;
    let now = new Date(Date.now());
    var offsetTime = (now.getTime() + timeZone);
    console.log(offsetTime);


  };
  xhr.open(
    "GET",
    "https://api.openweathermap.org/data/2.5/forecast?q=Osaka,jp&APPID=9c39fa3ce9d953fdd507d7d9f77093ef&lang=zh_tw&units=metric",
    true
  );
  xhr.send();
}
