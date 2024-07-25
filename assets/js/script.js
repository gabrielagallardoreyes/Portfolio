$(document).ready(function() {
    $(".btn-projects").click(function(){
        $(".projects1").toggle();
    })
    $(".btn-projects").click(function(){
      $(".btn-mas").toggle();
  })

    $(".btn-mas").dblclick(function(){
      $(".box3").show();
    })
  
    $(".btn-enviar").click(function (){
      alert("Message was sent successfully!")
    })

    $(".btn-enviar").click(function (){
      $(".offcanvas").hide()
    })

    $(".btn-enviar").click(function(){
      $("form").validate();
    })
    

})