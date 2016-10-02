console.log('Loaded!');
 
//change the text of the main text
var ele = document.getElementById('main-text');
ele.innerHTML = 'Something Fancy'; 
var img = document.getElementById('dino');
img.onclick = function () {
  img.style.marginLeft = '200px';  
};