/**
 * Created by jiahao on 2016/2/29.
 */
var befoerScroll = 0;
var land=null;
$(window).load(function () {
    Carousel.init($(".J_Poster"));
    scroll();
    mytimer(2016,3,10,0,0,0);
    land=new land();
});

function scroll() {
    window.onscroll = function () {
        var mySize = document.body.scrollTop - befoerScroll;
        befoerScroll = document.body.scrollTop;
        if (mySize > 0) {
            if (document.body.scrollTop > 176) {
                scrollTopNav();
            }
        }
        else{
            scrollTopNavHidden();
        }
    }
}
function scrollTopNav() {
    $('.scroll-top-nav').css({
        //display:"block",
        "top": 0,
        "-moz-box-shadow": "0 3px 5px #888888",
        "box-shadow": "0 3px 5px #888888",
        "-webkit-box-shadow": "0 3px 5px #888888"
    })
}
function scrollTopNavHidden() {
    $('.scroll-top-nav').css({
        "top": -50,
        "-moz-box-shadow": "0 0 0 #888888",
        "box-shadow": "0 0 0 #888888",
        "-webkit-box-shadow": "0 0 0 #888888"
    })
}

//轮播图
Carousel.init = function (posters) {
    var _this_ = this;
    posters.each(function (i, elem) {
        new _this_($(elem));
    });
};
function Carousel(poster) {
    var self = this;
    this.indexUp = [];
    //保存单个旋转木马对象
    this.poster = poster;
    this.posterItemMain = poster.find("ul.poster-list");
    this.nextBtn = poster.find("div.poster-next-btn");
    this.prevBtn = poster.find("div.poster-prev-btn");
    this.posterItems = poster.find("li.poster-item");
    this.clickTrue = true;
    this.timer = null;
    this.setting = {
        "width": 1000,      //幻灯片的宽度
        "height": 270,        //幻灯片的高度
        "posterWidth": 640, //幻灯片第一帧的宽度
        "posterHeight": 270,  //幻灯片第一帧的高度
        "scale": 0.9,         //记录显示比例关系
        "speed": 500,
        "autoPlay": false,
        "delay": 5000,
        "verticalAlign": "top" //middle bottom
    };
    var temp1 = this.getSetting();
    temp1.width = $(document).width() * 0.94;
    temp1.height = $(window).height() - 300;
    temp1.posterWidth = temp1.width * 0.7;
    temp1.posterHeight = temp1.height;
    $.extend(this.setting, temp1);
    this.setSettingValue();
    this.nextBtn.bind("click", function () {
        if (self.clickTrue) {
            self.clickTrue = false;
            self.clickRight();
        }
    });
    this.prevBtn.bind("click", function () {
        if (self.clickTrue) {
            self.clickTrue = false;
            self.clickLeft();
        }
    });
    if (this.setting.autoPlay) {
        this.autoPlay();
        this.poster.hover(function () {
            clearInterval(self.timer);
        }, function () {
            self.autoPlay();
        })
    }
}


Carousel.prototype = {

    //获取html页面中写入的data-setting属性中的json对象（参数设置）
    getSetting: function () {
        var temp = this.poster.attr("data-setting");
        if (temp && temp != " ") {
            return $.parseJSON(temp);
        }
        else {
            return {};
        }
    },
    //点击右边的箭头
    clickRight: function () {
        var _this_ = this,
            prevElem = null;
        this.setIndexUp();
        this.posterItems.each(function (i, elem) {
            if (i == 0) {
                prevElem = _this_.posterItems.last();
                $(elem).css({
                    "z-index": _this_.indexUp[_this_.posterItems.size() - 1]
                });
            }
            else {
                prevElem = $(this).prev();
                $(elem).css({
                    "z-index": _this_.indexUp[i - 1]
                })
            }
            $(this).animate({
                width: prevElem.css("width"),
                height: prevElem.css("height"),
                //zIndex:prevElem.css("zIndex"),
                opacity: prevElem.css("opacity"),
                left: prevElem.css("left"),
                top: prevElem.css("top")
            }, _this_.setting.speed, function () {
                _this_.clickTrue = true;
            })
        })
    },
    //点击左边的箭头
    clickLeft: function () {
        var _this_ = this,
            sizeOfItem = this.posterItems.size(),
            nextElem = null;
        this.setIndexUp();
        this.posterItems.each(function (i, elem) {
            if (i == sizeOfItem - 1) {
                nextElem = _this_.posterItems.first();
                $(elem).css({
                    "z-index": _this_.indexUp[0]
                });
            }
            else {
                nextElem = $(elem).next();
                $(elem).css({
                    "z-index": _this_.indexUp[i + 1]
                })
            }
            $(elem).animate({
                width: nextElem.css("width"),
                height: nextElem.css("height"),
                zIndex: nextElem.css("zIndex"),
                opacity: nextElem.css("opacity"),
                left: nextElem.css("left"),
                top: nextElem.css("top")
            }, _this_.setting.speed, function () {
                _this_.clickTrue = true;
            })
        })
    },
    setIndexUp: function () {
        var self = this;
        this.posterItems.each(function (i, elem) {
            self.indexUp[i] = $(elem).css("z-index");
            //console.log(self.indexUp[i]);
        });
    },
    //设置静态的时候图片布局
    setSettingValue: function () {
        var l_w = (this.setting.width - this.setting.posterWidth) / 2,
            r_w = l_w,
            size = this.posterItems.size(),
            mostIndex = Math.floor(size / 2),
            gap = l_w / mostIndex,
            rightPix = this.posterItems.slice(1, 1 + mostIndex),
            leftPix = this.posterItems.slice(1 + mostIndex),
            wid = this.setting.posterWidth,
            hei = this.setting.posterHeight,
            index1 = mostIndex,
            index2 = mostIndex,
            leftPix1 = [];
        this.poster.css({
            width: this.setting.width,
            height: this.setting.height
        });
        this.posterItemMain.css({
            width: this.setting.width,
            height: this.setting.height
        });
        this.nextBtn.css({
            width: l_w,
            height: this.setting.posterHeight,
            zIndex: mostIndex
        });
        this.prevBtn.css({
            width: r_w,
            height: this.setting.posterHeight,
            zIndex: mostIndex
        });
        //设置第一张图片
        this.posterItems.first().css({
            width: this.setting.posterWidth,
            height: this.setting.posterHeight,
            left: l_w,
            zIndex: mostIndex
        });

        //设置右边的图片
        var scale = this.setting.scale;
        var self = this;
        rightPix.each(function (i, elem) {
                wid = wid * scale;
                hei = hei * scale;
                $(elem).css({
                    width: wid,
                    height: hei,
                    zIndex: --index1,
                    left: l_w + self.setting.posterWidth + gap * (i + 1) - wid,
                    top: self.getTop(hei),
                    opacity: 1 / (i + 1)
                });
            }
        );
        // 设置左边的图片
        wid = this.setting.posterWidth;
        hei = this.setting.posterHeight;
        var size1 = leftPix.size();
        leftPix.each(function (i, elem) {
                wid = wid * self.setting.scale;
                hei = hei * self.setting.scale;
                leftPix.eq(size1 - i - 1).css({
                    width: wid,
                    height: hei,
                    zIndex: --index2,
                    left: l_w - (i + 1) * gap,
                    top: self.getTop(hei),
                    opacity: 1 / (i + 1)
                });
            }
        );
    },
    getTop: function (hei) {
        var top = this.setting.verticalAlign;
        if (top == "top") {
            return 0;
        }
        else if (top == "bottom") {
            return this.setting.height - hei;
        }
        else {
            return (this.setting.height - hei) / 2;
        }
    },
    //自动播放
    autoPlay: function () {
        var self = this;
        this.timer = setInterval(function () {
            self.nextBtn.click();
        }, self.setting.delay);
    }
};
function mytimer(y,mt,d,h,m,s){//倒计时效果
    var timer=null,
        second=0,//设置默认时间
        day=0,
        hour=0,
        minute=0;
    timer=setInterval(function(){
        var endTime= new Date(y,mt-1,d,h,m,s),
            startTime=new Date();
            second=Math.floor((endTime.getTime()-startTime.getTime())/1000);
        if(second > 0){
            day = Math.floor(second / (60 * 60 * 24));
            hour = Math.floor(second / (60 * 60)) - (day * 24);
            minute = Math.floor(second / 60) - (day * 24 * 60) - (hour * 60);
            second = Math.floor(second) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
        }else{
            clearInterval(timer);
            $(".time-end").css({
                display:"inline-block"
            });
        }
        if (minute <= 9){
            minute = '0' + minute;
        }
        if (second <= 9) {
            second = '0' + second;
        }
        $('#day-show').text(day+'天');
        $('#hour-show').text(hour+'时');
        $('#minute-show').text(minute+'分');
        $('#second-show').text(second+'秒');
    }, 1000);
}
