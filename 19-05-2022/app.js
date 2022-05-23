
// var plan1 ={
//     planName:'basic',
//     fees:100,
//     data:50,
//     pages:10
// }

// var plan2 ={
//     planName:'professional',
//     fees:200,
//     data:100,
//     pages:20
// }


// function Plan(planNames,fees,pages,data){
// this.planName = planNames,
// this.fees = fees,
// this.pages = pages,
// this.data = data
// }



// var plan1 = new Plan("basic",100,50,10);
// var plan2 = new Plan("professional",200,100,20);

// console.log(plan1,'plan1',plan2)
var arr = [];

function UserData(userName,email,password){
    this.userName=userName,
    this.email=email,
    this.password = password,
    this.returnName = function(){
        return this.userName;
    }
}

function signup() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;


    // var object_of_user_data = {
    //     username1:username,
    //     email1:email,
    //     password1:password
    // }
    var datas = new UserData(username,email,password)

    arr.push(datas)
    console.log(arr);
}

var object_of_user_data = {
        username1:"umair",
        email1:"umair@gmail.com",
        password1:"12345"
    }

    for(var props in object_of_user_data){
        console.log(props)
    }

    console.log(window.location.href)

    // var res = window.location.href;


    // window.location.href = "https://www.google.com";

    setTimeout(()=>{
        window.close()
    },7000)