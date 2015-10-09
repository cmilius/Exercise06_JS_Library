//EFFECTS
//hides & shows the button
function hide(){
  $("#btnHide").hide("slow");
  $("#btnHide").show("slow");
}

//hides & shows the button with sliding
function slide(){
  //slides up taking 1 second
  $("#btnSlide").slideUp(1000);
  //$("#btnSlide").slideDown(1000);
}

//toggles the visibility of the buttons
function toggle(){
  $("#btnHide").toggle("slow");
  $("#btnSlide").toggle("slow");
}

//fades the button in and out of visibility
function fade(){
  $("#btnFade").fadeOut("slow");
  $("#btnFade").fadeIn("slow");
}

//animates the button when changing it's height and width properties
function animation(){
  $("#btnAnimate").animate({height: "300px"});
  $("#btnAnimate").animate({width: "300px"});

  $("#btnAnimate").animate({height: "20px"});
  $("#btnAnimate").animate({width: "140px"});
}

//EVENTS
//must wait for the document to be ready before events can be made
$(document).ready(function(){
  //when the btnClick is clicked, hide it
  $("#btnClick").click(function(){
    $(this).hide();
  });

  //when the btnClick2 is clicked, toggle view of btnClick
  $("#btnClick2").dblclick(function(){
    $("#btnClick").toggle("slow");
  });

  //when mouse enters button 3, tell the user they entered it
  $("#btnEnter").mouseenter(function(){
    alert("You entered Event 3!");
  });

  //when the mouse leaves button 4, tell the user they left it
  $("#btnLeave").mouseleave(function(){
    alert("You left Event 4!");
  });

  //when the button has the focus, change it's background-color to red
  $("#btnFocus").focus(function(){
    $(this).css("background-color", "red");
  });
});
