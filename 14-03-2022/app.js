// var cities = ["karachi",'islamabad','hyderabad','peshawar','quetta','lahore'];


// cities.splice(1,3);

// alert(cities);

// cities.splice(1,0);

// alert(cities);


// cities.splice(3,1);

// alert(cities);no

// cities.splice(3,1,"gilgit",'multan','faislabad');

// alert(cities);

// cities.splice(3,0,"gilgit",'multan','faislabad');

// alert(cities);

// var cities = ["karachi",'islamabad','hyderabad','peshawar','quetta','lahore'];

// var newArr = cities.slice(1);

// alert(newArr);
// alert(cities)

// var cities = ["karachi",'islamabad','hyderabad','peshawar','quetta','lahore'];

// var newArr = cities.slice(1,4);

// alert(newArr);
// alert(cities);


// for(var i = 0;i < 5;i++){
//     alert('Hello World')
// }

// var userCity = prompt('Enter city Name')
// var cities = ["karachi",'islamabad','hyderabad','peshawar','quetta','lahore'];

// var flag ="not Found";

// for(var i = 0;i < 6;i++){
//     if(userCity == cities[i]){
//         flag = 'found'
//         alert('found'+i);
//         break;
//     }
// }

// if(flag == "not Found"){
//     alert('not found')
// }



// var userCity = prompt('Enter city Name')
// var cities = ["karachi",'islamabad','hyderabad','peshawar','quetta','lahore'];

// var flag = false

// for(var i = 0;i < 6;i++){
//     if(userCity == cities[i]){
//         flag = true
//         alert('found'+i);
//         break;
//     }
// }

// if(flag == false){
//     alert('not found')
// }





// var userCity = prompt('Enter city Name');

// userCity = userCity.toLowerCase();

// var cities = ["karachi",'islamabad','hyderabad','peshawar','quetta','lahore'];

// var flag = false

// for(var i = 0;i < 6;i++){
//     if(userCity == cities[i]){
//         flag = true
//         alert('found'+i);
//         break;
//     }
// }

// if(flag == false){
//     alert('not found')
// }


// var firstNames = ["BlueRay ", "Upchuck ",
//  "Lojack ", "Gizmo ", "Do-Rag "];

//  var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];

//  for(var i =0;i < 5 ; i++){

//     for(var j = 0;j < 4;j++){
    
// console.log(firstNames[i]+lastNames[j])
//     }
    
//  }




var firstNames = ["BlueRay ", "Upchuck ",
 "Lojack ", "Gizmo ", "Do-Rag "];

 var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullName = []
 for(var i =0;i < 5 ; i++){

    for(var j = 0;j < 4;j++){
        fullName.push(firstNames[i]+lastNames[j])
    }

 }

 console.log(fullName)