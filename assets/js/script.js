$(document).ready(function() {
    $(".btn-enviar").click(function (){
      alert("Message was sent successfully!")
    })

    $(".btn-enviar").click(function (){
      $(".offcanvas").hide()
    })

    $(".fa-lightbulb").click(function(){
      $(".nav").css("background-color", "white")
      $(".nav-text").css("color", "black")
      $(".fa-lightbulb").css("color","black")
      $("footer").css("background-color", "white")
      $("#links").css("color","black")
      $(".f-iconos").css("color","black")
      $(".main-box").css("background-color", "white")
      $("video").hide()
    })
    $(".fa-lightbulb").dblclick(function(){
      $(".nav").css("background-color", "")
      $(".nav-text").css("color", "")
      $(".fa-lightbulb").css("color","")
      $("footer").css("background-color", "")
      $("#links").css("color","")
      $(".f-iconos").css("color","")
      $(".main-box").css("background-color", "")
      $("video").show()
    })
    

})