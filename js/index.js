var about_us = function(onclick){console.log("Hi my name is michel and I run L&D amusements. currently i live in california, but I do fairs in many places. sometimes I work with my step brother")}
var contact_us = "our phone number is lorem	ipsum and you can email me at averns@aol.com"
var one = {
	relow: 0,
	remid: 0,
	rehigh: 0
};
var restlow = function(re) {
	re.relow++

	//responses++;
	document.getElementById('results').innerHTML = re.relow + " said that it was crowded, "+ re.remid+ " said that it was normal, "+ re.rehigh + " said that it was deserted";
}

var restmid = function(re) {
	re.remid++;
	document.getElementById('results').innerHTML = re.relow + " said that it was crowded, "+ re.remid+ " said that it was normal, "+ re.rehigh + " said that it was deserted";
	
}

var resthigh = function(re) {
	re.rehigh++;
	document.getElementById('results').innerHTML = re.relow + " said that it was crowded, "+ re.remid+ " said that it was normal "+ re.rehigh + " said that it was deserted";

}
var rest1 = function(re){
	document.getElementById("title").innerHTML = "Highway Inn";
	document.getElementById("buttons").innerHTML =
		"<button onclick='restlow(one)'>crowded</button><button onclick='restmid(one)'>Medium</button><button onclick='resthigh(one)'>not crowded</button>";
	document.getElementById("results").innerHTML = re.rehigh  + " said that it was deserted, " + re.remid + " said that it was normal, " + re.relow + " said that it was crowded";
}
var arr= ["it is crowded", "it is normal", "it is empty"];

var arr= ["it is crowded", "it is normal", "it is empty"];

var responses = 0

var mostDemonPoints = 0