$(function(){

	shoppingNum();
	function shoppingNum(){
			var sc_str = $.cookie('goods');
			if(sc_str){//如果购物车cookie不为空。
				var sc_obj = eval(sc_str);
				var sc_num = 0 ; 
				for(var i in sc_obj){
					sc_num = Number(sc_obj[i].num) + sc_num;
				}
				$(".car").find("span").html(sc_num);
			}
		}

})		