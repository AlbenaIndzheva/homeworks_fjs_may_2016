/* Albena 

Навигация с падащи менюта при клик. 
Падащите менюта да се скриват при повторен клик или клик извън менюто.
Да се направят два варианта, едни с jQuery и един без jQuery. 

*/

window.onload = function() {

	var elements = document.getElementsByClassName("dropdown");
	var i;

	for (i = 0; i < elements.length; i++) {
		elements[i].addEventListener("click", toggleClass);
	} 

	function toggleClass() {
	 event.preventDefault();
	 this.classList.toggle("show");
	 var z = this;
	 	for (i = 0; i < elements.length; i++) {
	 		if (elements[i] !== z) {
	 			elements[i].classList.remove("show");
	 		}
		} 
	}

	window.addEventListener("click", function(event) {
         var y = event.target.className;

         if (y !== "sub-menu-target" ) {
			for (i = 0; i < elements.length; i++) {
				elements[i].classList.remove("show");
			}  

         }
        
	});
	
};

