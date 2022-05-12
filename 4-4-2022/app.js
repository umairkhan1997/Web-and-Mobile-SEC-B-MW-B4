// function checkAddress(fieldId){
//     // console.log(fieldId,document.getElementById(fieldId).id)
//     // return false
//     if(document.getElementById(fieldId).value == ""){
//         alert('invalid email')
//     }
// }


// function fillCity() {
//      var cityName;
//      var zipEntered = document.getElementById("zip").value;
//      switch (zipEntered) {
//      case "60608" :
//      cityName = "Chicago";
//      break;
//      case "68114" :
//      cityName = "Omaha";
//      break;
//      case "53212" :
//  cityName = "Milwaukee";
//      }
//      document.getElementById("city").value = cityName;
//      }

// function getFormInnerHtml(){
//     // console.log(document.getElementById('form').innerHTML)
//     // var cont = document.getElementById('form').innerHTML;
//     var listToPlace = "<ol><li>Slow loris</li><li>Fast loris</li><li>Just-right loris</li></ol>";
//  document.getElementById("form").innerHTML = listToPlace;
// }
console.log(document.getElementById("ugly"),'1')

function makeInvisible() {
     document.getElementById("ugly").className = "hidden";
     console.log(document.getElementById("ugly"),'2')
     }

     function myFunc(){
        document.getElementById("ugly").className = "prop";
        console.log(document.getElementById("ugly"),'3') 
     }