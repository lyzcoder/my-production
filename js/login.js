$(function(){
	
	//获取焦点时
	$('.login-box input').focus(function(){
		$(this).css({
			borderWidth:'2px',
			borderColor:'#8eb7f2'
		})
	});
	//邮箱
	$('input[id="e-mail"]').focus(function(){
		$('.email').find('strong').html('填写正确的邮箱');			
	});
	//用户名
	$('input[id="username"]').focus(function(){
		$('.username').find('strong').html("4-20位英文字符,数字,'_'的组合");			
	});
	//密码
	$('input[id="psd"]').focus(function(){
		$('.psd').find('strong').html("6-16位字符");			
	});
	//re密码
	$('input[id="repsd"]').focus(function(){
		$('.repsd').find('strong').html("两次密码必须一致");			
	});
	
	//失去焦点时
	var flag=false;
	$('.login-box input').blur(function(){
		$(this).css({
			borderWidth:'1px',
			borderColor:'#ccc'
		})
	});
	//邮箱
	$('input[id="e-mail"]').blur(function(){
		var email = $(this).val()
		var reg = /^\w+@\w+\.(com|cn|com\.cn|org|hk|edu|net)$/;
		if(!reg.test(email)){
			$('.email').find('strong').html('邮箱不正确');	
			$('.email').find('strong').css({color:'red'});	
			flag = false;
		}else{
			$('.email').find('strong').html('填写正确');
			$('.email').find('strong').css({color:'green'});
			flag = true
		}
	});
	
	//用户名
	$('input[id="username"]').blur(function(){
		var username = $(this).val()
		var reg = /^\w{4,12}$/;
		if(!reg.test(username)){
			$('.username').find('strong').html('您输入的用户名不正确');		
			$('.username').find('strong').css({color:'red'});
			flag = false;
		}else{
			$('.username').find('strong').html('用户名可以注册');
			$('.username').find('strong').css({color:'green'})
			flag = true
		}
	});
	//密码
	$('input[id="psd"]').blur(function(){
		var psd = $(this).val()
		var reg = /^\w{6,16}$/
		if(!reg.test(psd)){
			$('.psd').find('strong').html('密码不合法，请确认');	
			$('.psd').find('strong').css({color:'red'});
			flag = false;
		}else{
			$('.psd').find('strong').html('密码合法');
			$('.psd').find('strong').css({color:'green'});
			flag = true
		}
	});
	//re密码
	$('input[id="repsd"]').blur(function(){
		var psd = $('input[id="psd"]').val();
		var repsd = $(this).val();
		var reg = /^\w{6,16}$/
		if(!reg.test(repsd)){
			$('.repsd').find('strong').html('密码不合法，请确认');
			$('.repsd').find('strong').css({color:'red'});
			flag = false;
		}else{
			if(repsd !== psd){
				$('.repsd').find('strong').html('两次密码不一致，请确认');
				$('.repsd').find('strong').css({color:'red'});
				flag = false;
			}else{
				$('.repsd').find('strong').html('密码一致');
				$('.repsd').find('strong').css({color:'green'});
				flag = true
			};		
		};
	});
	
	var email = $('input[id="email"]').val();
	var username = $('input[id="username"]').val();
	var psd = $('input[id="psd"]').val();
	var repsd = $('input[id="repsd"]').val();
	if(email==''){
		flag = false
	}else if(username==''){
		flag = false
	}else if(psd==''){
		flag = false
	}else if(repsd==''){
		flag = false
	}else{
		flag = true
	};
	
	
	$('#login').click(function(){
		if(flag){
			alert("注册成功")
		}else{
			alert("请填写完整的信息")
		}
	});
	
	//验证码
	var arr = [];
	for(var i=0;i<10;i++){
		arr.push(i+"");
		//console.log(arr)
	};
	for(var i=65;i<=90;i++){
		arr.push(String.fromCharCode(i))
	};
	for(var i=97;i<=122;i++){
		arr.push(String.fromCharCode(i))
	};
	
	//alert(str)
	$('.code b,.code strong').click(function(){
		var num1 = parseInt(Math.random()*arr.length)
	    var num2 = parseInt(Math.random()*arr.length)
	    var num3 = parseInt(Math.random()*arr.length)
	    var num4 = parseInt(Math.random()*arr.length) 
		
		var str=""
		for(var i=0;i<4;i++){
			str+=arr[parseInt(Math.random()*arr.length)]
		}
		$('.code strong').html(str);
	})


	
	//购物车数量
	shoppingNum();
})
