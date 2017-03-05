//Variables
	money=0.00;

$(document).ready(function(){
	

		moneyPerClick=1;
		$('.money').click(function(){;
			
			//money=tick();
		});
		setInterval('tick()', 1000);
});

function tick(){
	//$('.pageName').append('hi');
	money+=0.1;
	$('.money').text('$'+money.toFixed(2));

};
