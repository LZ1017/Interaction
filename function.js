var audio=document.getElementById("alpaca"); 

	function playSound()
	{ 
	if (audio.paused) 
	  audio.play(); 
	else 
	  audio.pause(); 
	} 