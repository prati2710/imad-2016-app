//Counter code
var button = document.getElementById('counter');
button.onclick = function () {
    //Make a request to endpoint
    
    //Capture the request and store in a variable
    
    //Render the variable in correct span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};