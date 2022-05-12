

// // var targetDiv = document.getElementById('mainDiv');

// // var divChild = targetDiv.lastChild;

// // console.log(divChild,'divChild');


// // console.log(divChild.nextSibling,'divChild');

// // console.log(divChild.nodeName);
// // console.log(divChild.nodeValue);

// // // if("p" == divChild.nodeName.toLowerCase)



// var targetImg = document.getElementById("mainImg");

// // var srcVal = targetImg.src
// // targetImg.src = ""

// // var res = targetImg.hasAttribute('height');
// // var resOne = targetImg.getAttribute('height');
// // targetImg.setAttribute("src","50");

// // console.log(res,'res',resOne);

// console.log(targetImg.attributes);



var divEle = document.createElement('div');

var pEle = document.createElement('p');

pEle.setAttribute('style',"background-color:red");

var txtEle = document.createTextNode('Hello World')
pEle.appendChild(txtEle);

divEle.appendChild(pEle);


document.getElementById('mainDIv').appendChild(divEle);