$(function(){
//加载数据
	var url = window.location.href
	var pId = url.split("?")[1].split("=")[1]
	//console.log(pId)

	$.get("json/product.json",function(data){
		//console.log(data)
		var sc_str = $.cookie('goods');
		console.log(sc_str)
		
			if(sc_str){
				var sc_obj = eval(sc_str);
				//console.log(sc_obj)
				var str="";
				var pay=0;
				for(var i in sc_obj){
					str+='<tr>'+
					'<td>'+
						'<a href="detail.html?pId='+data[sc_obj[i].id-1].pId+'">'+
							'<img class="item-pic fl" src="'+data[sc_obj[i].id-1].img+'"/>'+
							'<p class="item-name fr">'+data[sc_obj[i].id-1].des+'</p>'+
						'</a>'+
					'</td>'+
					'<td class="old-price">'+data[sc_obj[i].id-1].oldPrice+'</td>'+
					'<td class="new-price">'+data[sc_obj[i].id-1].price+'</td>'+
					'<td class="num-wrap">'+
						'<a href="javascript:;" class="minus">-</a>'+
						'<input type="text" id="num" value="'+sc_obj[i].num+'"/>'+
						'<a href="javascript:;" class="plus">+</a>'+
					'</td>'+
					'<td  class="item-sum">'+data[sc_obj[i].id-1].price+'</td>'+
					'<td class="item-cancel">取消订购</td>'+
				'</tr>'
					pay+=eval(data[sc_obj[i].id-1].price*sc_obj[i].num);
				};
				str+='<tr class="bg-white">'+
					'<td colspan="6">'+
						'<a class="enpty-cart fl" href="javascript:;"><img src="images/giveup.gif"/></a>'+
						'<p class="fr">'+
							'共<b class="sum-num">1</b>件商品&nbsp;'+
							'价格总计：￥<i class="sum-price"></i>元'+
						'</p>'+
					'</td>'+
				'</tr>'+
				'<tr class="bg-white">'+
					'<td colspan="6" align="right">'+
						'折后价格<i class="last-price"></i>&nbsp;'+
						'获得积分：<span class="integral">50</span>'+
					'</td>'+
				'</tr>'
				$("tbody").html(str)
				//console.log(pay)
				$('.sum-price').html(pay)
				var last_pay=parseInt(eval(pay*0.9))
				$('.last-price').html(last_pay)
			}
		
		
	

	//价格计算
		/*$("tbody").each(function(){
			var oP = $(".cart-item");
			var num = oP.find("#num");//数量
			var price = oP.find(".new-price");//单价
			var sum = oP.find(".item-sum")//小计
			var val = num.val();
			
			var $sumNum = $('.sum-num')//总数量
			var $sumPrice = $('.sum-price')//总价
			var $lastPrice = $('.last-price')//折扣价
			var $integral = $('.integral')//积分
			//减
			$(document).on('click','.minus',function(){
				if(val<=1){
					val=2
				}
		        num.val(--val);
		        sum.html(val*price.html())
		        
		        getSum()
			});
			
			//加
			$(document).on('click','.plus',function(){
		        num.val(++val);
		        sum.html(val*price.html());
		        //console.log(val*price.html())
		        getSum()
			});
			
			function getSum(){
				var sumNum = 0;
				var sumPrice = 0;
				
				sumNum+=parseFloat(num.val());
				sumPrice+=parseFloat(sum.html());
				
				
				$sumNum.html(sumNum);
				$sumPrice.html(sumPrice);
				$lastPrice.html(parseInt(sumPrice*0.9))
				$integral.html(sumNum*50)
			};
		});
		
		
	$(".item-cancel").click(function(){
		$('tbody').remove()
	})*/
	
	//购物车数量
		shoppingNum();
	});
	
})
