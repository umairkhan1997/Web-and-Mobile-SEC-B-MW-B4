// var cities = ["karachi",'lahore','peshawar','islamabad','quetta','gilgit'];


// cities.splice(3,1,'','');



// for(var i =0 ; i < 4 ; i++){
//     for(var j =0;j < 4 ; j++){
//         alert(j,i);
//     }
// }


// var cityName = prompt("Enter City name");

// var firLtr = cityName.slice(0,1);
// firLtr = firLtr.toUpperCase();

// var firLtr = cityName.slice(0,1).toUpperCase();

// var remainingLtr = cityName.slice(1);

// alert(firLtr.toUpperCase()+remainingLtr.toLowerCase())


// var cities = ["karachi",'lahore','peshawar','islamabad','quetta','gilgit'];


// for(var j =0;j < cities.length ; j++){
//         alert(cities[j])
//         }


// var str = prompt("Enter some text");
//  var numChars = str.length;
//  for (var i = 0; i < numChars; i++) {
//  if (str.slice(i, i + 2) == "  ") {
//  alert("No double spaces!"+i);
//  break;

//  }
//  }


// var text = "my name is World War II , i live World War II in  karachi"

// for (var i = 0; i < text.length; i++) {
//  if (text.slice(i, i + 12) === "World War II") {
//      text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//      }
//      }

//      alert(text)


// var text = "my name is World War II , i live World War II in  karachi"


// alert(text.indexOf("live"))


var text = "my name is World War II ,! i live World War II in  karachi"

// alert(text.charAt(11))



// var userName = "umair khan"
// var res = userName.charAt(userName.length - 1)
// alert(res);

// var text = "my name is World War II ,! i live World War II in  karachi"

// for (var i = 0; i < text.length; i++) {
//      if (text.charAt(i) === "!") {
//      alert("Exclamation point found!");
//      break;
//      }
//      }


// var text = "my name is World War II ,! i live World War II in  karachi";
// var newText = text.replace("World War II", "the Second World War");


// alert(text+newText)



var text = "my name is World War II ,! i live World War II in  karachi";
var newText = text.replace(/World War II/g, "the Second World War");


alert(text+newText)