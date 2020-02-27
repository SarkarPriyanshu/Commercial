/** @format */

// Commercial Js File
//Search Engine
document.getElementById("Search_Icon").addEventListener("click", function() {
  var Input = document.querySelector(".Search_input");
  Input.classList.toggle("Search_Toggle");
});
//Search Engine End
//Menu
var links = document.getElementsByClassName("Catagory-Link");
for (i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    var title = document.querySelector("title").innerText;
    console.log(title);
    if (title === "Tech") {
      var menu = document.querySelector(".Menu");
      menu.classList.toggle("Menu_Show");
    } else {
      var menu = document.querySelector(".Menu");
      menu.classList.toggle("Menu_Show_Mac");
    }
  });
}
//Menu End
// Latest Mobile
document.getElementById("Right").addEventListener("click", function() {
  var Div = document.querySelector(".Latest-mobile-inner-div-1");
  Div.style.transform = "translateX(-450px)";
  Div.style.transition = "all 1s ease";
});
document.getElementById("Left").addEventListener("click", function() {
  var Div = document.querySelector(".Latest-mobile-inner-div-1");
  Div.style.transform = "translateX(0px)";
  Div.style.transition = "all 1s ease";
});
// Latest Mobile Ends
// Latest Laptops
document.getElementById("Right_Arrow").addEventListener("click", function() {
  var Div = document.querySelector(".Latest-Laptop-div-1");
  Div.style.transform = "translateX(-450px)";
  Div.style.transition = "all 1s ease";
});
document.getElementById("Left_Arrow").addEventListener("click", function() {
  var Div = document.querySelector(".Latest-Laptop-div-1");
  Div.style.transform = "translateX(0px)";
  Div.style.transition = "all 1s ease";
});
// Latest Laptops Ends
//Hover Effect on Laptop Details
var Laptop_Details = document.querySelectorAll(".Laptop_Details");
for (i = 0; i < Laptop_Details.length; i++) {
  Laptop_Details[i].addEventListener("mouseenter", function() {
    this.style.overflow = "visible";
    this.style.height = "100vh";
    this.style.background = "rgba(0,0,0,0.2)";
    this.style.borderRadius = "5px";
    this.style.position = "relative";
    this.style.zIndex = "3";
  });
  Laptop_Details[i].addEventListener("mouseleave", function() {
    this.style.overflow = "hidden";
    this.style.background = "rgba(0,0,0,0)";
    this.style.height = "40px";
    this.style.position = "static";
    this.style.zIndex = "0";
  });
}
//Hover Effect on Laptop Details Ends
//Other Gagets
document.getElementById("Right__Arrow").addEventListener("click", function() {
  var Div = document.querySelector(".Other-Gagets-div-1");
  Div.style.transform = "translateX(-450px)";
  Div.style.transition = "all 1s ease";
});
document.getElementById("Left__Arrow").addEventListener("click", function() {
  var Div = document.querySelector(".Other-Gagets-div-1");
  Div.style.transform = "translateX(0px)";
  Div.style.transition = "all 1s ease";
});
//Other Gagets Ends
//Scroll Mac Pro Images
window.onscroll = function() {
  var Yaxis = window.pageYOffset;
  console.log(Yaxis);
  if (Yaxis < 1400) {
    var SpecImage = document.querySelector(".SpecDiagramImage");
    SpecImage.src = "http://127.0.0.1:5500/Images/macpro-1.png";
    SpecImage.style.opacity = "1";
  } else if (Yaxis > 1399 && Yaxis < 1949) {
    var SpecImage = document.querySelector(".SpecDiagramImage");
    SpecImage.src = "http://127.0.0.1:5500/Images/macpro-2.png";
    // console.log(SpecImage);
  } else if (Yaxis > 1950 && Yaxis < 2499) {
    var SpecImage = document.querySelector(".SpecDiagramImage");
    SpecImage.src = "http://127.0.0.1:5500/Images/macpro-3.png";
    // console.log(SpecImage);
  } else if (Yaxis > 2895 && Yaxis < 3516) {
    var SpecImage = document.querySelector(".SpecDiagramImage");
    SpecImage.src = "http://127.0.0.1:5500/Images/macpro-4.png";
    // console.log(SpecImage);
  } else if (Yaxis > 3517) {
    var SpecImage = document.querySelector(".SpecDiagramImage");
    SpecImage.src = "http://127.0.0.1:5500/Images/macpro-6.png";
  }
};
//Scroll Mac Pro Images End
