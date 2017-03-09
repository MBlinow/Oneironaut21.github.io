$(document).ready(function(){
	$('#spinner').click(function(){
	
		function spin(num){
			$('#spinner').css('transform', 'rotate('+ num +'deg)'); 
			};
		var x=1
		setInterval(spin(x), 1000);
		setInterval(, 1000);
		//for (i=0; i<100; i++){
	//		spin(i);

	//	};

		
	});
	
	
});