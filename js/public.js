$(function(){function a(a){a.addClass("now").siblings().removeClass("now"),$(".blackbg_boxs").addClass("show"),$(".blackbg_boxs img").attr("src",a.find(" img").attr("src")),$(".blackbg_boxs").get(0).l=a.prev().length?a.prev():null,$(".blackbg_boxs").get(0).r=a.next().length?a.next():null,$(".blackbg_boxs").attr("data-i",a.index()+1).attr("data-j",a.parent().find("._box").length)}var t=$("#moble_nav_boxs");$(".no_pb .tag_bg").click(function(){$(".no_pb").parent().find(">div").eq($(this).index()+1).addClass("show").siblings().removeClass("show"),$(this).addClass("tag_ac").siblings().removeClass("tag_ac")}).eq(0).click(),$(".moble_open_icon").click(function(){t.addClass("s_open")}),$(".moble_close_icon").click(function(){t.removeClass("s_open")}),$(".banner .item, .photo, .path_pic").imgLiquid(),$(".banner").each(function(){var a=$(this),t=a.find("a"),n=a.find(".points");a.attr("data-n",1).data("l",a.find(">.item").length),t.click(function(){var t=parseInt(a.attr("data-n"),10);$(this).hasClass("left")&&a.attr("data-n",2>t?a.data("l"):t-1),$(this).hasClass("right")&&a.attr("data-n",t>=a.data("l")?1:t+1)}),n.append($("<span />").append(Array.apply(null,Array(a.data("l"))).map(function(t,n){return $("<i />").attr("data-i",n+1).click(function(){a.attr("data-n",$(this).index()+1)})}))),a.data("time")&&setTimeout(function(){t.filter(".right").click()},1e3*parseInt(a.data("time"),10))}),$("#gotoTop").click(function(){$("html,body").animate({scrollTop:0},1e3)}),$(window).scroll(function(){$(this).scrollTop()>100?$("#gotoTop").fadeIn("fast"):$("#gotoTop").stop().fadeOut("fast")}),$("._box").click(function(){a($(this))}),$(".blackbg_boxs .icon-close").click(function(){$(".blackbg_boxs").removeClass("show")}),$(".blackbg_boxs .icon-chevron-left").click(function(){$(".blackbg_boxs").get(0).l?a($(".blackbg_boxs").get(0).l):$(".blackbg_boxs").removeClass("show")}),$(".blackbg_boxs .icon-chevron-right").click(function(){$(".blackbg_boxs").get(0).r?a($(".blackbg_boxs").get(0).r):$(".blackbg_boxs").removeClass("show")}),$(".calendar_cent_boxs").accordion({heightStyle:"content",collapsible:!0})});