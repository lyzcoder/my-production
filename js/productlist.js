$(function(){
	//分页
		$.ajax({	  
		url:'json/product.json',
		type:"GET",
			success:function(data){	

				//计算分页量
				
				var proData = eval(data);
				var showNum=15;
				var dataL=proData.length;
				
				var pageNum=Math.ceil(dataL/showNum);
					$('.Pagination').pagination(pageNum,{
						num_edge_entries: 1, //边缘页数
		                num_display_entries: 4, //主体页数
		                items_per_page: 1, //每页显示1项
		                prev_text: "上一页",
		                next_text: "下一页",
		                callback:function(index){
		                 	//console.log(showNum*index+"- "+(showNum*index+showNum))
		                 	//console.log(pageNum)
		                 	var str = "";
		                 	for(var i = showNum*index; i < showNum*index+showNum;i++){
		                 		if(i<dataL){
										str+='<li>'+
												'<div class="pro-pic">'+
													'<a href="detail.html?pId='+proData[i].pId+'">'+
													'<img class="lazy" data-original="'+proData[i].img+'"></a>'+
												'</div>'+
												'<p><b>市场价'+proData[i].oldPrice+'</b>元</p>'+
												'<p class="price"><span>"'+proData[i].price+'"</span>元</p>'+
												'<p class="text"><a href="javascript:;">'+proData[i].des+'</a></p>'+
												'<p class="num">累计售出'+proData[i].sellerNum+'件</p>'+
											'</li>'
								};
								

		                 	}
		                 	$(".product-item").html(str);
		                 	//懒加载
		                 	$("img.lazy").lazyload({
            					effect : "fadeIn"
        					});
						} 
					})
			}

		});
		
		//购物车数量
		shoppingNum();
})
