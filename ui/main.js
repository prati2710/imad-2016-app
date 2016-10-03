//Counter code
var button = document.getElementById('counter');

button.onclick = function () {
    //Create a request object
    var request = new XMLHttpRequest(); 
    //Capture the request and store in a variable
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            //Take some action
            if(request.status === 200) { //if successful 
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML =  counter.toString();
            }
        }
        //Not Done yet
    };    
    //Make the request
    request.open('GET','http://prati2710.imad.hasura-app.io/counter',true);
    request.send(null);
    
};