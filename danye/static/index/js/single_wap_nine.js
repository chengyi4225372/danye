/**
 * static.cms - v1.0.0  License By 
 * WEB小组  
 */
var defLi=$(".time_kill .single_main ul li");defLi.length>1?$(".time_kill .single_main ul").css("width",defLi.length*(defLi.eq(0).width()+5)+"px"):$(".time_kill .single_main ul").css("width","100%");var copyClickA=function(e){if("javascript:void(0)"!=e.prop("href")||void 0!=e.data("href")){var i=e.prop("href").split("id=")[1]||e.data("href").split("id=")[1];$.post(tpwd+"&id="+i,{id:i},function(e){"string"==typeof e&&(e=JSON.parse(e)),$(".weixin-tip").css("display","block"),0==e.status?$(".tkl-layer").css("display","none"):($(".tkl-layer .tkl_text").text(e.data),$(".tkl-layer").css("display","block"),$(".keycope").length>0&&($(".keycope").text("一键复制"),$(".keycope").css({background:"#ff4400",color:"white"}),$(".keycope").attr("aria-label",e.data)))}).error(function(){$(".weixin-tip").css("display","block"),$(".tkl-layer").css("display","none")})}},timeLine=$(".time_kill .kill_time ul"),lineLilength=timeLine.find("li").length,lineLiWidth=timeLine.find("li").eq(0).width();timeLine.css("width",lineLilength*lineLiWidth),timeLine.find("li").css("width",lineLiWidth);var timeLineIndex=$(".time_kill .kill_time_scroll ul a.cur").parent().index();lineLilength-timeLineIndex>3?$(".kill_time_scroll")[0].scrollLeft=timeLineIndex*lineLiWidth:$(".kill_time_scroll")[0].scrollLeft=(lineLilength-4)*lineLiWidth;var fillSectionData=function(e){var i=after_data[e];$(".time_kill .single_main ul").html(""),i?i.map(function(e){var i=goodsUrl+e.gid,t=0;$(".kill_time ul li a.cur p").hasClass("goods-soon")?(t=1,i="javascript:void(0)",$(".time_kill .out_time font").html("开始")):$(".time_kill .out_time font").html("结束"),$(".weixin-tip").length>0?"javascript:void(0)"!=i&&(i='href="javascript:void(0)" data-href="'+i+'" onclick="copyClickA($(this))"'):i='href="'+i+'"';var a="<li "+(1==t?'class="go_buy_soon"':"")+'><div class="goods_pic"><a target="_blank"  '+i+'><img src="'+e.pic+'_310x310.jpg"></a></div>';return a+='<div class="goods_info"><div class="goods_tit"><a target="_blank" '+i+">"+e.title+'</a></div><div class="goods_price">秒杀价：<b><i>￥</i>'+parseFloat((e.yuanjia-e.quan_jine).toFixed(2))+'</b></div><div class="goods_coupon_num"><span class="fl">领券直降 <b>'+parseFloat(e.quan_jine)+' 元</b></span><span class="fr"><b>'+(e.xiaoliang<1e4?e.xiaoliang:parseFloat((e.xiaoliang/1e4).toFixed(1))+"万")+"</b> 人已抢</span></div><a "+i+' target="_blank" class="go_buy">'+(1==t?"即将开始":"立即秒杀<i></i>")+"</a></div>",a+="</li>",!($(".time_kill .single_main ul li").length>4)&&($(".time_kill .single_main ul").append($(a)),void $(".time_kill .single_main ul").css("width",155*$(".time_kill .single_main ul li").length+"px"))}):($(".time_kill .single_main ul").css("width","100%"),$(".time_kill .single_main ul").append($('<li class="single_nogoods"><p>一大波商品正在路上</p></li>')))};$(".kill_time ul li a").on("click",function(){if(!$(this).hasClass("cur")){var e=$(this).parents().index();$(".kill_time ul li a").removeClass("cur"),$(this).addClass("cur"),$(".kill_time_scroll").animate({scrollLeft:(e-1)*lineLiWidth},200),clearInterval(timer);var i=$(this).find(".goods-soon").length>0?$(this).data("time"):$(".kill_time ul li").eq($(this).parent().index()+1).find("a").data("time"),t=new Date(nowTimeS.getFullYear()+"/"+(nowTimeS.getMonth()+1)+"/"+nowTimeS.getDate()+" "+i+":00:00"),a=new Date-nowTimeC,n=((t-nowTimeS-a)/1e3).toFixed(0),l=parseInt(n/3600),s=parseInt(n%3600/60),o=n%3600%60;$(".out_time span").eq(0).html(l>9?l:"0"+l),$(".out_time span").eq(1).html(s>9?s:"0"+s),$(".out_time span").eq(2).html(o>9?o:"0"+o),timer=setInterval(function(){0==resIs0(2)&&window.location.reload()},1e3)}fillSectionData($(this).data("time"))});for(item in dataDef){var data=dataDef[item];if(data.page_num<3);else if(is_show.indexOf(data.gid)==-1){if(is_show.push(data.gid),$(".single_mod_item_"+data.page_num).length<1){$('<div class="single_mod_item single_mod_item_def single_mod_item_'+data.page_num+'"></div>').appendTo($(".single_wrap"));var item_head='<div class="single_head"><h2><span>'+data.show_name+"</span></h2>                      <p>"+data.show_desc+"</p>                    </div>";$(item_head).appendTo($(".single_mod_item_"+data.page_num)),$('<div class="single_main"><ul></ul></div>').appendTo($(".single_mod_item_"+data.page_num)),$("<li><span>"+data.show_name+"</span></li>").appendTo($(".fast_menu ul"))}var goodsLink=goodsUrl+data.gid;if(goodsLink=$(".weixin-tip").length>0?'href="javascript:void(0)" data-href="'+goodsLink+'" onclick="copyClickA($(this))"':'href="'+goodsLink+'"',$(".single_mod_item_"+data.page_num).find("li").length<24&&$(".single_nine_main").length<1||$(".single_nine_main").length>0&&$(".single_mod_item_"+data.page_num).find("li").length<100){var goodsStr='<li><div class="goods_pic"><a target="_blank" '+goodsLink+'><img class="lazy" src="'+loaddingImg+'" data-original="'+data.pic+'_310x310.jpg"></a></div><div class="goods_info"><div class="goods_tit"><a target="_blank" '+goodsLink+">"+data.d_title+'</a></div><div class="goods_price_coupon"><span class="fl goods_price"><b><i>￥</i>'+parseFloat((data.yuanjia-data.quan_jine).toFixed(2))+'</b></span><span class="fr goods_coupon">领券直降<b><i>￥</i>'+parseFloat(data.quan_jine)+'</b></span></div><div class="go_buy"><span class="fl"><b>'+(data.xiaoliang>=1e4?parseFloat(data.xiaoliang/1e4).toFixed(1)+"万":data.xiaoliang)+"</b>人已抢</span><a "+goodsLink+' class="fr" target="_blank">立即抢购</a></div></div></li>';$(goodsStr).appendTo($(".single_mod_item_"+data.page_num).find(".single_main").find("ul"))}}item==dataDef.length-1&&$("img.lazy").lazyload()}$(document).ready(function(){function e(){var e=function(){var e=/OS ((\d+_?){2,3})\s/;if(navigator.userAgent.match(/iPad/i)||navigator.platform.match(/iPad/i)||navigator.userAgent.match(/iP(hone|od)/i)||navigator.platform.match(/iP(hone|od)/i)){var i=e.exec(navigator.userAgent);if(i.length>0)return i[0].replace("OS","").replace("os","").replace(/\s+/g,"").replace(/_/g,".")}else o=0;return""},i=e(),t=i.split(".");return!!(t&&t.length>0&&parseInt(t[0])>=10)}$(window).scroll(function(){$(window).scrollTop()>500?$(".toTop").fadeIn(1500):$(".toTop").fadeOut(1500)}),$(".toTop").click(function(){$("body,html").animate({scrollTop:0},1e3)});var i=$(".fast_menu ul li").length,t=$(document).width()-20,a=parseInt(t/4);$(".fast_menu ul").width(a*i+"px"),$(".fast_menu ul li").css("width",a+"px");var n=function(){if(!$(".fast_menu").hasClass("fast_menu_show")){$(".fast_menu ul").width(a*i+"px");var e=$(".fast_menu li.cur").index(),t=$(".fast_menu li").eq(0).width(),n=0;n=e<$(".fast_menu li").length-4?e*t+"px":($(".fast_menu li").length-4)*t+"px",$(".fast_menu ul").css("left","-"+n)}};n(),$(".fast_right").on("click",function(){$(this).hasClass("menu_show")?($(this).removeClass("menu_show"),$(".fast_menu").removeClass("fast_menu_show"),n()):($(this).addClass("menu_show"),$(".fast_menu").addClass("fast_menu_show"))}),$(".fast_menu li").on("click",function(){$(this).hasClass("cur")||($(this).hasClass("goTop")?($(".fast_menu li").eq(0).addClass("cur"),$("html,body").animate({scrollTop:0},300,function(){$(".fast_menu li").removeClass("cur"),$(this).addClass("cur")})):$("html,body").animate({scrollTop:$(".single_mod_item").eq($(this).index()).offset().top-50},300,function(){$(".fast_menu li").removeClass("cur"),$(this).addClass("cur")}),n())});var l=function(){var e=$(document).scrollTop()+60;if($(".fast_menu li").removeClass("cur"),e<$(".single_mod_item").eq(2).offset().top)$(".fast_menu li").eq(0).addClass("cur"),$(".fast_menu").addClass("hide"),n();else{$(".fast_menu").removeClass("hide");for(var i=1;i<$(".single_mod_item").length;i++)i<$(".single_mod_item").length-1?e>=$(".single_mod_item").eq(i).offset().top&&e<$(".single_mod_item").eq(i+1).offset().top&&($(".fast_menu li").eq(i).addClass("cur"),n()):e>=$(".single_mod_item").eq(i).offset().top&&($(".fast_menu li").eq(i).addClass("cur"),n())}};$(document).scroll(function(){var e=$(document).scrollTop()+10;setTimeout(function(){e==$(document).scrollTop()+10&&l()},100)}),l(),$(".keycope").on("click",function(){$(".copy_dom").html($(this).attr("aria-label"))}),$(".weixin-tip").length>0&&$("a").on("click",function(e){e.preventDefault(),copyClickA($(this))}),$(".weixin-cover").click(function(){$(".weixin-tip").css("display","none"),$(".tkl").css("display","block"),$(".buy-wrapper").css("display","block"),$("#myVideo").css("display","block")});var s=1,o=1;if(s=e()?1:0,0==s&&1==o)$(".tkl-code").removeClass("yjfz_copy"),document.addEventListener("selectionchange",function(e){if("code1_ios"==window.getSelection().anchorNode.parentNode.id&&document.getElementById("code1_ios").innerText!=window.getSelection()){var i=document.getElementById("code1_ios");window.getSelection().selectAllChildren(i)}if("code2_ios"==window.getSelection().anchorNode.parentNode.id&&document.getElementById("code2_ios").innerText!=window.getSelection()){var i=document.getElementById("code2_ios");window.getSelection().selectAllChildren(i)}},!1);else if(1==o){var d=new Clipboard(".keycope",{target:function(){return document.querySelector(".copy_dom")}});d.on("success",function(e){$(".copy_dom").html(""),e.trigger.innerHTML="已复制",e.trigger.style.background="#67cf84",e.trigger.parentNode.style.borderColor="#67cf84",e.clearSelection()}),d.on("error",function(e){$(".copy_dom").html(""),e.trigger.style.background="#f47171",e.trigger.parentNode.style.borderColor="#f47171",e.trigger.innerHTML="复制失败"}),$(".yjfz_copy textarea").remove()}else{var r=new Clipboard(".keycope",{text:function(e){return e.getAttribute("aria-label")}});r.on("success",function(e){e.trigger.style.background="#67cf84",e.trigger.parentNode.style.borderColor="#67cf84",e.trigger.innerHTML="已复制",e.clearSelection()}),r.on("error",function(e){e.trigger.style.background="#f47171",e.trigger.parentNode.style.borderColor="#f47171",e.trigger.innerHTML="复制失败",e.clearSelection()})}});