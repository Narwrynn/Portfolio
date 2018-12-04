function myXHR(){
    var XHR = new XMLHttpRequest();
    XHR.open("GET", "https://evening-earth-96767.herokuapp.com/");
    XHR.send();
}

myXHR();
