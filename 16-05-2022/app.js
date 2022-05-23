const firebaseConfig = {
  apiKey: "AIzaSyDikSQ4so2xhQfYSZDB7oUBmyHL5neQVrg",
  authDomain: "quiz-application-62c3e.firebaseapp.com",
  databaseURL: "https://quiz-application-62c3e-default-rtdb.firebaseio.com",
  projectId: "quiz-application-62c3e",
  storageBucket: "quiz-application-62c3e.appspot.com",
  messagingSenderId: "735923061897",
  appId: "1:735923061897:web:1116e21f87dab8ebc37258",
};
var change = {
  scoreboard: 0,
  id: "sd",
};

questionsArray = [
  {
    question:
      "if x is a set contains an integer which is neither positive nor negative then the set x is ",
    answer: 3,
    options: [
      "set is empty ",
      "set is non empty ",
      "set is finite ",
      "set is both non-empty and finite ",
    ],
  },
  {
    question: "If x ∈ N and x is prime, then x is ________ set.",
    answer: 0,
    options: ["a.	Infinite set", "b.	Finite set", "c.	Empty set", "d.	Not a set"],
  },
  {
    question:
      "If x is a set and the set contains the real number between 1 and 2, then the set is ________.",
    answer: 2,
    options: [
      "a.	Infinite set",
      "b.	Finite set",
      "c.	Empty set",
      "d.	Not mentioned",
    ],
  },
  {
    question: "Which of the following is a subset of set {1, 2, 3, 4}?",
    answer: 3,
    options: ["	{1, 2}", "	{1, 2, 3}", "	{1}", "	All of the mentioned"],
  },
  {
    question:
      "Convert the set x in roster form if set x contains the positive prime number, which divides 72.",
    answer: 1,
    options: ["a.	{∅}", "b.	{2, 3}", "c.	{2, 3, 7}", "d.	{3, 5, 7}"],
  },
  {
    question: "Power set of empty or Null set has exactly _________ subset.",
    answer: 0,
    options: ["a.	One", "b.	Two", "c.	Zero", "d.	Three"],
  },
  {
    question:
      "What is the Cartesian product of set A and set B, if the set A = {1, 2} and set B = {a, b}?",
    answer: 2,
    options: [
      "a.	{ (1, a), (1, b), (2, a), (b, b) }",
      "b.	{ (1, 1), (2, 2), (a, a), (b, b) }",
      "c.	{ (1, a), (2, a), (1, b), (2, b) }",
      "d.	{ (1, 1), (a, a), (2, a), (1, b) }",
    ],
  },
  {
    question:
      " The members of the set S = {x | x is the square of an integer and x < 100} is ________________",
    answer: 2,
    options: [
      "a.	{0, 2, 4, 5, 9, 55, 46, 49, 99, 81}",
      "b.	{1, 4, 9, 16}",
      "c.	{0, 1, 4, 9, 16, 25, 36, 49, 64, 81",
      "d.	{0, 1, 4, 9, 25, 36, 49, 123}",
    ],
  },
  {
    question:
      " The intersection of the sets {1, 2, 8, 9, 10, 5} and {1, 2, 6, 10, 12, 15} is the set _____________",
    answer: 0,
    options: [
      "a.	{1, 2, 10}",
      "b.	{5, 6, 12, 15}",
      "c.	{2, 5, 10, 9}",
      "d.	 {1, 6, 12, 9, 8}",
    ],
  },
  {
    question:
      " The difference of {1, 2, 3, 6, 8} and {1, 2, 5, 6} is the set ____________",
    answer: 2,
    options: ["a.	{1, 3}", "b.	{5, 6, 8}", "c.	{3, 8}", "d.	{2, 6, 5}"],
  },
  {
    question: " If n(A) = 20 and n(B) = 30 and n(A U B) = 40 then n(A ∩ B) is?",
    answer: 3,
    options: ["a. 20", "b. 30", "c. 40", "d. 10"],
  },
  {
    question:
      "Let the players who play cricket be 12, the ones who play football 10, those who play only cricket are 6, then the number of players who play only football are ___________, assuming there is a total of 16 players.",
    answer: 2,
    options: ["a. 16", "b. 8", "c. 4", "d. 10"],
  },
  {
    question: "Which among the following can be taken as the discrete object?",
    answer: 3,
    options: [
      "a.	People",
      "b.	Rational numbers",
      "c.	Integers",
      "d.	All of the mentioned",
    ],
  },
  {
    question: " Which option contains two equal sets?",
    answer: 1,
    options: [
      "a.	X = {5, 6} and Y = {6}",
      "b.	X = {5, 6, 8, 9} and Y = {6, 8, 5, 9}",
      "c.	X = {5, 6, 9} and Y = {5, 6}",
      "d.	X = {5, 6} and Y = {5, 6, 3}",
    ],
  },
  {
    question:
      "The cardinality of the Power set of the set {1, 5, 6} is______________.",
    answer: 2,
    options: ["a. 5", "b. 6", "c. 8", "d. 10"],
  },
];

var app = firebase.initializeApp(firebaseConfig);
var count = 0;
var score = 0;

var options = document.getElementsByName("option");
function calc() {
  for (var i = 0; i < options.length; i++) {
    if (options[i].checked) {
      // score++
      // // alert(score)
      if (i == questionsArray[count].answer) {
        score++;
        console.log(score);
      }
      options[i].checked = false;
    }
  }
}

let btn = document.querySelector("button");

btn.addEventListener("click", active);

function active() {
  var change = document.getElementById("submission");
  if (count == questionsArray.length) {
    change.innerHTML = "submit";

    btn.classList.toggle("is_active");
  }
}

function showques(e) {
  var quest = document.getElementById("ques");
  quest.innerHTML = "Q" + (e + 1) + ")" + questionsArray[e].question;
  var options = document.getElementsByClassName("option");
  for (var i = 0; i < options.length; i++) {
    options[i].innerHTML = questionsArray[e].options[i];
  }
}
function nextques() {
  var optns = document.getElementsByName("option");
  var btn = document.getElementById("next_btn");
  var cond = false;
  for (var i = 0; i < optns.length; i++) {
    if (optns[i].checked == true) {
      calc();

      cond = true;
    }
  }
  if (cond) {
    if (count < questionsArray.length - 1) {
      count++;
      showques(count);
    } else {
      alert("You have secured " + score + " marks");
      app
      .database()
      .ref("/userdetails")
      .child(change.id)
      .update({ score: score });

    change.scoreboard = score;

    localStorage.setItem("abcd", score);
    window.open("./remarks.html");

    }
  }
}

const timer = document.getElementById("stopwatch");

var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

function startTimer() {
  if (stoptime == true) {
    stoptime = false;
    timerCycle();
  }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
  if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = "0" + sec;
    }
    if (min < 10 || min == 0) {
      min = "0" + min;
    }
    if (hr < 10 || hr == 0) {
      hr = "0" + hr;
    }
    if (sec == 59) {
      stopTimer();

      alert("over");
      window.close("./main.html");
    }
    timer.innerHTML = hr + ":" + min + ":" + sec;

    setTimeout("timerCycle()", 1000);
  }
}

function resetTimer() {
  timer.innerHTML = "00:00:00";
}

function getUserData() {
  app
    .database()
    .ref("/users")
    .on("child_added", function (data) {
      console.log(data);
      console.log(data.key);
      console.log(data.val());
    });
}

function deleteData() {
  app.database().ref("/").remove();
}

app
  .database()
  .ref("/userdetails")
  .on("child_added", function (data) {
    console.log(data.parentNode);
    change.id = data.key;
    console.log(data.key);
    console.log();
  });

function verify() {
  var firstname = document.getElementById("fname").value;
  var lastname = document.getElementById("lname").value;
  var age = document.getElementById("age").value;
  if (firstname.length > 0 && lastname.length > 0 && age.length > 0) {
    var obj = {
      firstname: firstname,
      lastname: lastname,
      score: 0,
      age: age,
    };
    alert("you have only 1 minute to complete the quiz");
    app
      .database()
      .ref("/")
      .child("userdetails")
      .push(obj)
      .then(function (success) {
        console.log(success, "success");
      })
      .catch(function (err) {
        console.log(err, "err");
      });
    window.open("./main.html");
  } else {
    alert("fill your form completely");
    firstname.innerHTML = " ";
    lastname.innerHTML = " ";
    age.innerHTML = " ";
  }
}

function scoredisplay() {
  var img = document.getElementById("template");

  if (score >= 0 && score < 5) {
    img.src = "./5meme.jpeg";
  } else if (score >= 5 && score <= 14) {
    img.src = "./10meme.jpeg";
  } else if (score == 15) {
    img.src = "./15meme.jpeg";
  }

  var score = localStorage.getItem("abcd");
  document.getElementById("scoreresult").innerHTML = score;
}
function closing() {
  window
    .close()
    .then(function (success) {
      console.log(success, "success");
    })
    .catch(function (err) {
      console.log(err, "err");
    });
}
