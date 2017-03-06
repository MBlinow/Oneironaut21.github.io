
//Variables
	money=0.00;
	moneyPerClick=1;
	moneyPerTick=0.1;

$(document).ready(function(){
	

	//	moneyPerClick=1;
		$('.money').click(function(){
			moneyClick();

		});
		setInterval('tick()', 1000);
});

function tick(){
	//$('.pageName').append('hi');
	money+=moneyPerTick;
	moneyUpdate();
	//$('.money').text('$'+money.toFixed(2));
	

	}
	
function moneyUpdate(){
		$('.money').text('$'+money.toFixed(2));
	}


function moneyClick(){
		money+=moneyPerClick;
		moneyUpdate();}