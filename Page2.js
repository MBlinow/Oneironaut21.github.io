

$(document).ready(function(){
	//Variables
	money=0.00;
	moneyPerClick=1;
	moneyPerTick=0;
	
	building1Owned=0;
	building1Cost=5;
	building1Production=0.1;
	
	
	building2Owned=0;
	building2Cost=20;
	building2Production=0.5;

	//	moneyPerClick=1;
		$('.money').click(function(){
			moneyClick();

		});
		$('#bldg1').click(function(){
			buyBuilding1();
					
		});
		$('#bldg2').click(function(){
			buyBuilding2();
					
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
		$('#MPS').text(moneyPerTick.toFixed(2)+' Money per second')
	}


function moneyClick(){
		money+=moneyPerClick;
		moneyUpdate();}
		
		
function buyBuilding1(){
	if(money>building1Cost){
		money-=building1Cost;
		building1Owned+=1;
		building1Cost=building1Cost*building1Owned;
		moneyPerTick+=building1Production;
		$('#bldg1').text('building 1 (Owned='+building1Owned+')'+'Cost= '+building1Cost);
	}
		
		
			
}
		
function buyBuilding2(){
	if(money>building2Cost){
		money-=building2Cost;
		building2Owned+=1;
		building2Cost=building2Cost*building2Owned;
		moneyPerTick+=building2Production;
		
		$('#bldg2').text('building 2 (Owned='+building2Owned+')'+'Cost= '+building2Cost);
	}
}

function increaseEarnings(){
	
	
}