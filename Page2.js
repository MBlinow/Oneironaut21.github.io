$(document).ready(function(){
	
		//$('.pageName').hide();
		var money=0;
		moneyPerClick=1;
		$('.money').click(function(){
			//tick();
			money++;
			$('.money').text(money);
		});
	
});

//function tick(){
//	money+=moneyPerClick;
//	$('.money').text(money;)

//}