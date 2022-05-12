// var ptag=document.getElementsByTagName("p")
// console.log(ptag.length)
// var a=5
// a=6

// for(var i=0; i<ptag.length; i++){
//     ptag[i].innerHTML="abcd"

// }
// document.getElementById("id1").innerHTML="xyz"

var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var ptag1 = div1.getElementsByTagName("p");
var ptag2 = div2.getElementsByTagName("p");
for (var i = 0; i < ptag1.length; i++) {
  ptag1[i].style.color = "blue";
}
for (var i = 0; i < ptag2.length; i++) {
  ptag2[i].style.color = "green";
  ptag2[4].innerHTML="<button id='button'>hello</button>" 
}

var but= document.getElementsByTagName("button")
but.innerHTML='bye'
