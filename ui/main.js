console.log('Loaded!');
 
//change the text of the main text
//var ele = document.getElementById('main-text');
//ele.innerHTML = 'Something Fancy'; 

//Image modicifcation
var img = document.getElementById('dino');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
 var interval = setInterval(moveRight,100);  
};