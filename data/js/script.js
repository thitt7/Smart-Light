//assigns all image elements to javascript variables button_x
var button_0 = document.getElementById("light");
var button_1 = document.getElementById("side");

//array of variables representing the image elementsa
var Buttons = [ button_0, button_1];

//This function is asking for gpio.php, receiving datas and updating the index.php pictures
function change_pin ( pic ) {
var data = 0;
//send the pic number to gpio.php for changes
//this is the http request
	var request = new XMLHttpRequest();
	request.open( "GET" , "gpio.php?pic=" + pic, true);
	request.send(null);
	//receiving informations
	request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200) {
			data = request.responseText;
			//update the index pic
			if ( !(data.localeCompare("0")) ){
				Buttons[pic].checked = false;
				Buttons[0].src = "/data/img/off.png"
			}
			else if ( !(data.localeCompare("1")) ) {
				Buttons[pic].checked = true;
				Buttons[0].src = "/data/img/off.png"
			}
			else if ( !(data.localeCompare("fail"))) {
				alert ("Something went wrong!" );
				return ("fail");
			}
			else {
				alert ("Something went wrong!" );
				return ("fail");
			}
		}
		//test if fail
		else if (request.readyState == 4 && request.status == 500) {
			alert ("server error");
			return ("fail");
		}
		//else
		else if (request.readyState == 4 && request.status != 200 && request.status != 500 ) {
			alert ("Something went wrong!");
			return ("fail"); }
	}

return 0;
}

// window.onload = function() {
// 	$( "#offsection" ).load( "data/html/extra.html #offelement" );
// 	$( "#onsection" ).load( "data/html/extra.html #onelement" );
// };


// window.onload = function() {
// 	$( "#offsection, #onsection" ).load( "data/html/extra.html #onoffelement" );
// 	console.log( document.getElementById("offsection").classList );
// 	console.log ( $(this).attr("class") );
// 	if ( $(this).hasClass("on") )
// 	{
// 		$("img#light").attr("src", "data/image/on.png");
// 	}
// 	else if ( $(this).hasClass("off") )
// 	{
// 		console.log("Please do something");
// 		$(this).find("img#light").attr("src", "data/image/off.png").css("color", "red");
// 		console.log( $(this).find("img#light").prop("classList") );
// 	}
// 	else {
// 		console.log("just what is going on?");
// 	}
// };


window.onload = function() {
	$( "#offsection, #onsection" ).load( "data/html/extra.html #onoffelement", function() {
	console.log ( $(this).attr("class") );
	if ( $(this).hasClass("on") )
	{
		$("img#light").attr("src", "data/img/on.png");
	}
	else if ( $(this).hasClass("off") )
	{
		console.log("Please do something");
		$(this).find("img#light").attr("src", "data/img/off.png").css("color", "red");
		console.log( $(this).find("img#light").prop("classList") );
	}
	else {
		console.log("Conditions Failed");
	}
})
};


/* Notes -
remove on/off class
add picture, on/off class on click
Use for loop to print replacement divs
use jquery indexing to determine value to pass to change_pin





/* Christmas Light Randomizer */
// $(document).ready(function(){
//   var html = $('h1').html();
//   var ret  = "";
//   var rando = 0;
//
//   $.each(html.split(''), function(k, v) {
//      rando = Math.floor(Math.random() * 7) + 1
//      ret += '<h2 class="lights-' + rando + '">' + v + '</h2>';
//   });
//
//   $('h1').html(ret);
// });
