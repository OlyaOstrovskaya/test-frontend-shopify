const animation = document.querySelector('.collapsible__content').animate(
		[
			{width: "0px", overflow: "hidden"},
			{width: "800px"}
		],
		
    	{ 
    		duration: 1000, 
    		fill: "both", 
    		easing: "ease-out" 
    	}
	);

animation.pause();

document.querySelector('.collapsible__action--visible').style.display = "none";
document.querySelector('.collapsible__action--hidden').style.display = "block";

document.querySelector("button").addEventListener("click", () => {
	
  if (animation.playState === "paused") {
    animation.play();
    document.querySelector('.collapsible__action--visible').style.display = "block";
		document.querySelector('.collapsible__action--hidden').style.display = "none";

  } else {
    animation.reverse();
   if (document.querySelector('.collapsible__action--visible').style.display === "block") {
   	document.querySelector('.collapsible__action--visible').style.display = "none";
	  document.querySelector('.collapsible__action--hidden').style.display = "block"; 
	} else {
		document.querySelector('.collapsible__action--visible').style.display = "block";
		document.querySelector('.collapsible__action--hidden').style.display = "none"; 
	}
}});