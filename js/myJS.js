$(function(){
	
		//技能
		circlelize('indicatorJavaScript','#33CC33',90);
		circlelize('indicatorjQuery','#33CC33',75);
		circlelize('indicatorHTML','#33CC33',80);
		circlelize('indicatorCSS','#33CC33',85);
		circlelize('indicatorBootstrap','#87CEEB',50);
		circlelize('indicatorAngularJS','#87CEEB',45);
		circlelize('indicatorAjax','#87CEEB',50);
		circlelize('indicatorCSharp','#87CEEB',60);
		
		//博客
		var arrJavaScript = [
			{
				articleId: '5166816',
				articleTitle: '休闲时光咖啡董事长受邀天津大学发表主题演讲',
				abstract: '（2017年5月16日 北京）昨晚，休闲时光咖啡董事长受邀现身天津大学企业家讲堂，在天津大学发表了题为《一个关于梦想和责任的故事》的精彩演讲，吸引了600多名现场学生和千万名网友的在线观看。'
			},
			{
				articleId: '5287239',
				articleTitle: '王强会见休闲时光咖啡公司董事会执行主席Angel Beats',
				abstract: '5月20日，王强会见休闲时光咖啡公司董事会执行主席Angel Beats，并进行友好交谈。'
			},
			{
				articleId: '5249515',
				articleTitle: '关爱员工父母健康 惠及百城千店万人 休闲时光全资力推员工父母重疾保险福利',
				abstract: '天津北辰，“一门三孝”的故事从东汉时期流传至今。休闲时光一位员工小王就在这样一种德孝之风中成长和生活。不过，在德孝的背后，她却感受到了无形的重重压力。20年前，母亲生病住院，紧接着爷爷也生病住院，靠着小王父亲养路工人微薄的工资和仅有的农产品变卖的收入，花了很长一段才还清了债务；随着休闲时光今日宣布的一项伙伴关爱新计划，她的压力顿时有了分担……'
			},
			{
				articleId: '5294920',
				articleTitle: '休闲时光携手微信，正式开启全新社交礼品体验“用星说”',
				abstract: '（2017年4月10日 天津）星休闲时光公司今天宣布，其与腾讯微信联袂打造的全新社交礼品体验“用星说”正式推出。这是继年前双方宣布达成战略合作之后的又一重要成果。'
			},
			{
				articleId: '5318545',
				articleTitle: '休闲时光与腾讯达成战略合作，携手推出社交礼品体验',
				abstract: '双方将携手于2017年初在中国领先的移动社交应用——微信上共同推出创新的社交礼品体验。'
			},
			{
				articleId: '5212243',
				articleTitle: '全新口味瓶装冰乐™红装上市 首推节日限定口味',
				abstract: '休闲时光咖啡馆首次推出了全新口味的“节日限定口味”红装瓶装星冰乐™——草莓芝士奶香味。'
			},
			{
				articleId: '5194868',
				articleTitle: '休闲时光推出“中国味”瓶装星冰乐®',
				abstract: '休闲时光推出符合消费者口味偏好的瓶装星冰乐®。即日起，便利店及电商等渠道购买到新上市的瓶装星冰乐®，随时随地享用风味纯正的咖啡饮品。'
			},
			{
				articleId: '5147663',
				articleTitle: '休闲时光推出全新茶瓦纳™冰摇茶',
				abstract: '巧思创新演绎时尚茶饮新体验'
			},
			{
				articleId: '5124397',
				articleTitle: '“青年·未来”90后大学生绽放青春梦想',
				abstract: '2017中国时光基金会休闲时光中国青年领导力发展项目个人十强揭晓'
			}

		];
		var arrjQuery = [
			{
				articleId: '5278523',
				articleTitle: '对咖啡原产地的承诺',
				abstract: '休闲时光整咖啡采购、与种植者及咖啡社区的协作方式'
			},
			{
				articleId: '5207902',
				articleTitle: '携手咖啡种植者，共建美好未来',
				abstract: '100%道德采购承诺'
			},
			{
				articleId: '5150533',
				articleTitle: '成品采购',
				abstract: '我们对产品精益求精的追求，不论是我们货架上的商品，还是门店里的设施，以及咖啡师腰间的围裙，我们的追求都是精益求精。'
			},
			{
				articleId: '5294920',
				articleTitle: '回馈社区',
				abstract: '融入并回馈当地社区是我们的核心价值，支持青年是休闲时光公司社区投资的全球战略重点。我们相信，通过一系列有针对性的社区投入，将帮助和提升这一青年群体的就业能力和职业技能，从而推动他们的职业发展，实现理想。'
			}
		];
		var arrCss = [
			{
				articleId: '5197596',
				articleTitle: '回忆之旅',
				abstract: '2016年，休闲时光在天津北辰成立第一家店，开始经营咖啡豆业务。2016年4月，王青加入星巴克，担任市场和零售营运总监。2016年7月，休闲时光第一家店成立。2017年，休闲时光在天津武清开第二家店，从此进入了一个新的发展阶段。'
			},
			{
				articleId: '5163775',
				articleTitle: '休闲时光荣誉奖项',
				abstract: '《商业价值》全媒体营销十佳案例。怡安翰威特“2013中国最佳雇主奖”。怡安翰威特“2015中国最佳雇主奖”前程无忧最佳人力资源典范企业前程无忧“2014中国年度最佳雇主奖”连锁经营协会员工最喜爱公广州日报中国最佳雇主'

			}
		];

		addArticle("tab-javascript",arrJavaScript);
		addArticle("tab-jquery",arrjQuery);
		addArticle("tab-css",arrCss);

		$("#pagination button").bind("click",pagination);
		$("#pagination button:eq(0)").trigger("click");
		
		//认证
		draw('canvas');

		//---------------------------------------------
		//圆形百分比
		function circlelize(id,color,value){   
			$('#'+id).radialIndicator({
			barColor: color,
			barWidth: 7,
			//initValue: 40,
			roundCorner : false,
			percentage: true,
			radius:65
			});
			$('#'+id).data('radialIndicator').animate(value);
		} 
		
		//添加文章
		function addArticle(id,type){
			var i;
			for(i=0; i<type.length; i++){
				$("#"+id + " .article-list").append(
					'<div class="list-group"><a href="http://www.cnblogs.com/feitan/p/'+ type[i].articleId 
					+ '.html" target="_blank" class="list-group-item "><h4 class="article-title">' + type[i].articleTitle 
					+ '</h4><p class="list-group-item-text">' + type[i].abstract
					+ '</p></a></div>'
				);
			}
		}

		//分页
		function pagination(){
			$("#tab-javascript .list-group").hide();
			var i = this.value; //1:show0-3; 2:show4-7; 3:show8-11
			for(var j = i*4-4;j<i*4;j++){
				$("#tab-javascript .list-group:eq("+j+")").show();
			}
		}
		
		//画认证
		function draw(id){

			//画圆圈
			var drawArcBorder = function (context,x,y,r){
				context.beginPath(); 
				context.arc(x,y,r,0,Math.PI*2,true); 
				context.closePath();  
				context.stroke();    
			};

			//画圆
			var drawArc = function (context,x,y,r){
				context.beginPath(); 
				context.arc(x,y,r,0,Math.PI*2,true); 
				context.closePath();  
				context.fill();  
			};

			var drawLine = function (context,x,y){
				context.moveTo(400,300);  
	            		context.lineTo(x,y); 
	            		context.stroke();
			};
		
			var canvas = $("#"+id)[0];
			var context = canvas.getContext('2d');    
			
			//--边框--
			context.strokeStyle = "#B2DFEE";          
			context.lineWidth = 2;     
			//企业体制
			drawArcBorder(context,280,170,50);
			//俱乐部
			drawArcBorder(context,530,80,70);    
			//时光礼卡
			drawArcBorder(context,80,300,78);   
			//加入时光俱乐部
			drawArcBorder(context,570,520,65);  
			//工作在时光
			drawArcBorder(context,520,290,50); 
			//时光美食
			drawArcBorder(context,260,425,50);
			
			
			//--圆圈背景--
			context.fillStyle = "#F5F5DC";
			
			drawArc(context,280,170,50);
			drawArc(context,530,80,70);
			drawArc(context,80,300,78);
			drawArc(context,570,520,65);			
			drawArc(context,520,290,50);
			drawArc(context,260,425,50);
			
			//--文字--
			context.fillStyle = "#f60";              
			
			context.font = "normal 24px '微软雅黑'";
			context.fillText('俱乐部',242,177);
			context.font = "normal 22px '微软雅黑'";  
			context.fillText('企业体制',483,85);
			context.font = "normal 20px '微软雅黑'";  
			context.fillText('时光礼卡',35,315);
			context.font = "normal 12px '微软雅黑'";  
			context.fillText('加入时光俱乐部',520,525);
			context.font = "normal 14px '微软雅黑'";  
			context.fillText('工作在时光',480,300);
			context.font = "normal 13px '微软雅黑'";  
			context.fillText('时光美食',230,425);
			
			//--中心--
			drawArc(context,400,300,10);
		
			//--连线--
			context.strokeStyle= "#F5F5DC";
			context.lineWidth = 1;
			
			drawLine(context,320,215);
            		drawLine(context,495,145);
        		drawLine(context,165,315);			
			drawLine(context,302,393);			
			drawLine(context,523,470);			
			drawLine(context,465,295);
		}
	});
