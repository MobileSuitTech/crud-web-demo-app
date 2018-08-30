// Write your JS in here
//alert("HELLO FROM APP.JS!")
var pics = [
	"imgs/kitty_bed.JPG",
	"imgs/kitty_basket.JPG", 
	"imgs/kitty_laptop.jpg",
	"imgs/kitty_door.jpg",
	"imgs/kitty_sink.JPG",
	"imgs/kitty_wall.jpg"
]

// for doing something with all button : document.querySelectorAll("button")
var btn = document.querySelector("button")
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function(){
	//alert("CLICKED")
	//alert(img.src);
	if(counter === 6){counter = 0;} 
	img.src = pics[counter];
	counter++;
});