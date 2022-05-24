

var trafficLight = prompt ("select traffic signal light");
var red = "vehicles must stop";
var yellow = "vehicles should get ready to move";
var green = "vehicles can move now";

if(trafficLight == "red"){
    document.write("<h1>" + red + "</h1>");
}; 
if(trafficLight == "yellow"){
    document.write("<h1>" + yellow + "</h1>");
};
if(trafficLight == "green"){
    document.write("<h1>" + green + "</h1>");
};


