$(function(){
	//ボタン[id:page-top]を出現させるスクロールイベント
	$(window).scroll(function(){
		//最上部から現在位置までの距離を取得して、変数[now]に格納
		var now = $(window).scrollTop();

		//最上部から現在位置までの距離(now)が1500以上かつ
		//最下部から現在位置までの距離(under)が200px以上だったら
		if(now > 500){
			//[#page-top]をゆっくりフェードインする
			$('#page-top').fadeIn('slow');
		//それ以外だったらフェードアウトする
		}else{
			$('#page-top').fadeOut('slow');
		}
	});

	//ボタン(id:move-page-top)のクリックイベント
	$('#move-page-top').click(function(){
		//ページトップへ移動する
		$('html,body').animate({scrollTop:0},'slow');
	});
});