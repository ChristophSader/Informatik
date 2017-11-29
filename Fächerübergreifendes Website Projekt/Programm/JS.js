function clickaufdiv(zahl)
{
	
		switch(zahl)
		{
			case 1: var modal = document.getElementById('myModal');var div = document.getElementById("div1");
			modal.style.display = "block";break;
			
			case 2: var modal = document.getElementById('myModal2'); var div = document.getElementById("div2");
			modal.style.display = "block";break;
			
			case 3: var modal = document.getElementById('myModal3');var div = document.getElementById("div3");
			modal.style.display = "block";break;
			
			case 4: var modal = document.getElementById('myModal4'); var div = document.getElementById("div4");
			modal.style.display = "block";break;
			
			case 5: var modal = document.getElementById('myModal5');var div = document.getElementById("div5");
			modal.style.display = "block";break;
			
			case 6: var modal = document.getElementById('myModal6'); var div = document.getElementById("div6");
			modal.style.display = "block";break;
		}
	
	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) 
	{
		if (event.target == modal) 
		{
			modal.style.display = "none";
		}
	}
	
	for(var i = 0; i <= 5; i++)
	{
		document.getElementById('x'+i).onclick = function() 
		{
			console.log("CLOSE");
			modal.style.display = "none";
		}
		
	}
	
	
}