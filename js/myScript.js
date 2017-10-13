
//导航部分


//	//	=========================检测浏览器种类===========================
//	function myBrowser() {
		var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
//		var isOpera = userAgent.indexOf("Opera") > -1;
//		if (isOpera) {
//			return "Opera"
//		}; //判断是否Opera浏览器
//		if (userAgent.indexOf("Firefox") > -1) {
//			return "FF";
//		} //判断是否Firefox浏览器
//		if (userAgent.indexOf("Chrome") > -1) {
//			return "Chrome";
//		}
//		if (userAgent.indexOf("Safari") > -1) {
//			return "Safari";
//		} //判断是否Safari浏览器
//		if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
//			return "IE";
//		}; //判断是否IE浏览器
//	}
//
//	//==============================================================
//	var mb = myBrowser();
//	var begin;
////	if ("IE" == mb) {
////		begin = -13;
////	}
//	if ("FF" == mb) {
//		begin = 0;
//	}
//	if ("Chrome" == mb) {
//		begin = 0;
//	}

$(function() {
	function setCss() {
		var navWidth = $(".nav-li.navactive").width();
		var navLeft = ($(".nav-li.navactive").outerWidth(true) - navWidth) ;
//		var navLeft = $(".nav-li.navactive").css('margin-left');
		var mainWidth = $(".navbar-nav").css('width');
		$(".slide-span").css({
			width: navWidth,
			left: navLeft
		});
		$(".nav-slide").css({
			"right": 0 + "px",
			"height": 2 + "px",
			"width": mainWidth,
			"position": "absolute"
		});
	}

	$(".nav-li").hover(function() {
		$('.slide-span').css('opacity','1');
		$(this).siblings().removeClass("navactive");
		$(this).addClass("navactive");
		var navLeft = 0;
		var navIndex = $(this).index() * 2 * 27;
		$(this).prevAll().each(function() {
			navLeft += parseInt($(this).width());
		});
		navLeft += navIndex;
		var navWidth = $(".nav-li.navactive").width();
		$(".slide-span").css({
			width: navWidth,
			left: navLeft
		});
	},function(){
		$(this).removeClass("navactive");
		$('.slide-span').css('opacity','0');
	})
	setCss();
	$('.nav_li_product').hover(function(){
		$('.first_dropdown').show();
		$('.nav-slide').css('display','none');
		$(this).addClass('nav_bottom');
	},function(){
		$('.first_dropdown').hide();
		$('.nav-slide').css('display','block');
		$(this).removeClass('nav_bottom');
	})

	$('.nav_li_about').hover(function(){
		$('.first_dropdown2').show();
		$('.nav-slide').css('display','none');
		$(this).addClass('nav_bottom');
	},function(){
		$('.first_dropdown2').hide();
		$('.nav-slide').css('display','block');
		$(this).removeClass('nav_bottom');
	})
})
//一级导航hover







//轮播图部分
$(function() {
	$('#main_slide').carousel({
		interval: 2000
	})
	// 循环轮播到上一个项目
	$(".prev-slide").click(function(){
		$("#main_slide").carousel('prev');
	});
	// 循环轮播到下一个项目
	$(".next-slide").click(function(){
		$("#main_slide").carousel('next');
	});
})


//邮箱表单提交部分
function check(name,reg,spanId,okInfo,errorInfo,inputId){
	var flag;
	var val = document.getElementsByName(name)[0].value;
	var oSpanNode = document.getElementById(spanId);
	var oInputNode = document.getElementById(inputId);
	var regs =reg.test(val);
	if(regs){
		oSpanNode.innerHTML = okInfo.fontcolor("#11ff11");
		oInputNode.style.borderColor='white';
		flag = true;
		oInputNode.setAttribute("flag","true");

	}else{
		oSpanNode.innerHTML = errorInfo.fontcolor("red");
		oInputNode.style.borderColor ='red' ;
		flag = false;
		oInputNode.setAttribute("flag","false");
	}
	//alert(flag);
	return flag;

}
//非空验证
function checkName(){
	var reg = new RegExp("^[\u4e00-\u9fa5_a-zA-Z0-9]");
	check("name",reg,"namespan"," ","error","contact_name");

}

function checkSubject(){
	var reg = new RegExp("^[\u4e00-\u9fa5_a-zA-Z0-9]");
	check("subject",reg,"subjectspan"," ","error","contact_subject");
}

function checkMessage(){
	var reg = new RegExp("[\u4e00-\u9fa5_a-zA-Z0-9]");
	check("message",reg,"messagespan"," ","error","contact_message");
}

//校验邮箱
function checkMail(){
	var reg = new RegExp("^\\w+@\\w+(\\.\\w{2,3})*\\.\\w{2,3}$");
	check("mail",reg,"mailspan"," ","error","contact_email");
}


$(function(){
	//alert(inputCol.length);
	$('#btn').click(function(){

		var inputCol = $('.contact_write');
		var av = 0;
		//alert(inputCol.length);
		for(var i=0;i<inputCol.length;i++){
			//console.log("111")
			if(inputCol[i].getAttribute("flag") == "true"){
				//console.log("222");
				av++;
			}else{
				//console.log("333")

			}
		}
		//alert(av);
		if(av==0){
			$("#btn").attr('disabled','true').text("SENDING...");
			$.ajax({
			timeout : 5000, //超时时间设置，单位毫秒//www.tuberiachina.com//localhost:8080/send_emai/
			url:'http://localhost:8080/send_emai/getDate.do',
			type:'post',
			dataType:'json',
			contentType:"application/json;charset=utf-8",

			success:function(data){
				postSend(data);
			},
			error:function(){
				//alert("提交超时");

				$("#btn").removeAttr('disabled').text("SEND  MY  MESSAGE");
			},
				complete : function(XMLHttpRequest,status){ //请求完成后最终执行参数
					if(status=='timeout'){//超时,status还有success,error等值的情况
						$("#btn").removeAttr('disabled').text("SEND  MY  MESSAGE");
						alert("Send Time Out");
					}
				}
		})
		}else{
			alert("Input Format Error")
		}

	});

	/*$('#btn').click(function(){
		$("#btn").attr('disabled','true').text("SENDING...");
		$.ajax({
			url:'http://192.168.1.25:8080/sendMail',
			type:'post',
			dataType:'json',
			contentType:"application/json",
			data:
			//JSON.stringify(data)
				JSON.stringify({"name":$('#contact_name').val(),
					"address":$('#contact_email').val(),
					"subject":$('#contact_subject').val(),
					"messages":$('#contact_message').val()})
			//JSON.stringify($("form").serialize())
			,
			success:function (data){
				console.log(data);
				alert(data);
				$("#btn").removeAttr('disabled');
				window.location.reload();
			},
			error:function(){
				alert(data);
			}
		});
	})*/
});


function postSend(data){
	var sign = hex_md5("send_mail"+"61bf1a340e41e5f531038b755d0d14c3"+data);
	$.ajax({
		url:'http://localhost:8080/send_emai/sendMail.do',
		type:'post',
		dataType:'json',
		contentType:"application/json;charset=utf-8",
		data:
		//JSON.stringify(data)
			JSON.stringify(
				{
					"name":$('#name').val(),
					"address":$('#email').val(),
					"subject":"hhh",
					"messages":$('#message').val(),
					"appKey":"send_mail",
					"timeStamp":data,
					"sign":sign
				}
			)
		//JSON.stringify($("form").serialize())
		,
		success:function (data){
			console.log(data);
			//alert("success");
			alert(data);
			$("#btn").removeAttr('disabled').text("SEND  MY  MESSAGE");

			if (userAgent.indexOf("Firefox") > -1) {
				if(data=="Send success"){
					//location.reload(true);
				}else{

				}
			}else{
				//window.location.reload();
			}

			//window.history.go(0);
		},
		error:function(data){
			alert(data);
			$("#btn").removeAttr('disabled').text("SEND  MY  MESSAGE");

			if (userAgent.indexOf("Firefox") > -1) {
				if(data=="Send success"){
					//location.reload(true);
				}else{

				}
			}else{

				location.reload(true);
			}

		}
	})
};