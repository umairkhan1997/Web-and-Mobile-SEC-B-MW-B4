// var todaytime=new Date()
// var DOOMSDAY= new Date("June 30, 2035");
// var militodaytime= todaytime.getTime()
// var milidoomsdaytime=DOOMSDAY.getTime()
// console.log(milidoomsdaytime)
// console.log(militodaytime)
// var difference = milidoomsdaytime- militodaytime
// console.log(difference,'difference')
// var daysdifference= difference/(1000*60*60*24*365)
// console.log(daysdifference)
// console.log(Math.floor(daysdifference))
// // miliseconds secoonds * 1000 seconds minutes 60 minutes hour 60  24 

// var date = new Date()  //instance 
// date.setDate(23)
// // var time= date.setMonth(6)
// // console.log(time)
// console.log(date)


// Function part 1

// function getDoomsDay(){
//     var todaytime=new Date()
// var DOOMSDAY= new Date("June 30, 2035");
// var militodaytime= todaytime.getTime()
// var milidoomsdaytime=DOOMSDAY.getTime()
// console.log(milidoomsdaytime)
// console.log(militodaytime)
// var difference = milidoomsdaytime- militodaytime
// console.log(difference,'difference')
// var daysdifference= difference/(1000*60*60*24*365)
// console.log(daysdifference)
// console.log(Math.floor(daysdifference))
// }


// getDoomsDay()



// // Function part  2 passing data (argument) and getting data (parameter)

// function getDoomsDay(userData){
//     var todaytime=new Date()
// var DOOMSDAY= new Date(userData);
// var militodaytime= todaytime.getTime()
// var milidoomsdaytime=DOOMSDAY.getTime()
// // console.log(milidoomsdaytime)
// // console.log(militodaytime)
// var difference = milidoomsdaytime- militodaytime
// // console.log(difference,'difference')
// var daysdifference= difference/(1000*60*60*24*365)
// // console.log(daysdifference)
// console.log(Math.floor(daysdifference))
// }


// getDoomsDay("June 30, 2035");

// getDoomsDay("June 30, 2040");




// Function part  3 multiple parameter ,  how to pass parameter with different ways
// and multiple parameter

// function getData(paraOne,paraTwo,paraThree,paraFour){


// console.log(paraTwo,paraOne.slice(0,4),paraThree,paraFour)

// }


// getData("hello 1 world",3 , true,[2,3,4,5])


// var userName = "Umair Khan"


// function getData(paraOne,userName,paraThree,paraFour){


//     console.log(userName,paraOne,paraThree,paraFour)
    
//     }
    
    
//     getData(userName,3 , true,[2,3,4,5])





function getDoomsDay(userData){
    var todaytime=new Date()
var DOOMSDAY= new Date(userData);
var militodaytime= todaytime.getTime()
var milidoomsdaytime=DOOMSDAY.getTime()
// console.log(milidoomsdaytime)
// console.log(militodaytime)
var difference = milidoomsdaytime- militodaytime
// console.log(difference,'difference')
var daysdifference= difference/(1000*60*60*24*365)
// console.log(daysdifference)
console.log(Math.floor(daysdifference))

return Math.floor(daysdifference)

}


var result = getDoomsDay("June 30, 2035");


var resultTwo = getDoomsDay("June 30, 2040");

console.log(result,'result',resultTwo)