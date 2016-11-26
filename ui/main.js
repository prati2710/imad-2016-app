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

//Submit Name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
  // Make a request to a servee and send the name
    
     //Create a request object
    var request = new XMLHttpRequest(); 
    //Capture the request and store in a variable
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            //Take some action
            if(request.status === 200) { //if successful 
                  //Captue a list of names and render it as a list
                var names = request.responseText;
                names = JSON.parse(names); // creating back into object (array) from string; opp to what we did
                var list = '';
                for (var i=0;i<names.length;i++) {
                      list += '<li>' + names[i] + '</li>';
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
            }
        }
        //Not Done yet
    };    
    var nameInput = document.getElementById('name' );
    var name = nameInput.value;
    //Make the request
    
    request.open('GET','http://prati2710.imad.hasura-app.io/submit-name?name=' + name,true);
    request.send(null); 

};  