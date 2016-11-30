/*
	banner滑动轮播图
*/
//轮播插件
var mySwiper = new Swiper('.swiper-container',{
    loop: true,
	autoplay: 3000,
	pagination: '.swiper-pagination',
	nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',			
	paginationClickable: true,
	autoplayDisableOnInteraction: true
});
/*
	回到顶部按钮
*/
$(document).ready(function(){
	$(window).scroll(function() {
		var sTop = $(window).scrollTop();
		//显示回到顶部
		if(sTop >= 340) {
			$('#toTop').fadeIn(500);
		}else {
			$('#toTop').fadeOut(500);
		}
	});
	//单击回到顶部按钮，回到顶部
	$('#toTop').click(function(event) {
		$('html,body').animate({scrollTop:0},1000);
	});
});