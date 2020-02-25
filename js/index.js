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

// window.addEventListener("load", function() {
//   var width = screen.width;
//   if (width > 767) {
//     var links = document.querySelector(".Basic-Option-links").children;
//     for (i = 0; i < links.length; i++) {
//       var child = links[i].childNodes;
//       console.log(child);
//     }
//   }
// });

// function myFunction(x) {
//   if (x.matches) {
//     var text = document.querySelector(".link-text");
//     for (i = 0; i < text.length; i++) {
//       Console.log(text[i]);
//     }
//   }
// }

// var x = window.matchMedia("(max-width:767px)");
// myFunction(x);
// x.addEventListener(myFunction);
