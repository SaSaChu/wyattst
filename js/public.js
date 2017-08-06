/**
 * @author      ZEUS Design - http://www.zeusdesign.com.tw
 * @copyright   Copyright (c) 2016 ZEUS Design
 */

$(function() {

  var $mb = $('#moble_nav_boxs');

  $('.no_pb .tag_bg').click(function() {
    $('.no_pb').parent ().find ('>div').eq ($(this).index () + 1).addClass ('show').siblings ().removeClass ('show');
    $(this).addClass ('tag_ac').siblings ().removeClass ('tag_ac');
  }).eq (0).click ();

  $('.moble_open_icon').click(function() {
    $mb.addClass('s_open');
  });

  $('.moble_close_icon').click(function() {
    $mb.removeClass('s_open');
  });


  $(".banner .item, .photo, .path_pic").imgLiquid ();


  $('.banner').each (function () {
    var $that = $(this), $a = $that.find ('a'), $points = $that.find ('.points');
    $that.attr ('data-n', 1).data ('l', $that.find ('>.item').length);

    $a.click (function () {
      var n = parseInt ($that.attr ('data-n'), 10);
      
      if ($(this).hasClass ('left')) $that.attr ('data-n', n < 2 ? $that.data ('l') : n - 1);
      if ($(this).hasClass ('right')) $that.attr ('data-n', n >= $that.data ('l') ? 1 : n + 1);
    });

    $points.append ($('<span />').append (Array.apply (null, Array ($that.data ('l'))).map (function (_, i) { return $('<i />').attr ('data-i', i+1).click (function () { $that.attr ('data-n', $(this).index () + 1); }); })));

    if ($that.data ('time')) setTimeout (function () { $a.filter ('.right').click (); }, parseInt ($that.data ('time'), 10) * 1000);
  });


  $("#gotoTop").click(function(){
      $("html,body").animate({
          scrollTop:0
      },1000);
  });
  $(window).scroll(function() {
      if ( $(this).scrollTop() > 100){
          $('#gotoTop').fadeIn("fast");
      } else {
          $('#gotoTop').stop().fadeOut("fast");
      }
  });
  function blackbg_boxs ($that) {
    $that.addClass ('now').siblings ().removeClass ('now');
    $('.blackbg_boxs').addClass ('show');

    $('.blackbg_boxs img').attr ('src', $that.find (' img').attr ('src'));
    $('.blackbg_boxs').get (0).l = $that.prev ().length ? $that.prev () : null;
    $('.blackbg_boxs').get (0).r =  $that.next ().length ? $that.next () : null;

    $('.blackbg_boxs').attr ('data-i', $that.index () + 1).attr ('data-j', $that.parent ().find ('._box').length);
  }
  $('._box').click (function () {
    blackbg_boxs ($(this));
  });
  $('.blackbg_boxs .icon-close').click (function () {
    $('.blackbg_boxs').removeClass ('show');
  });
  $('.blackbg_boxs .icon-chevron-left').click (function () {
    if ($('.blackbg_boxs').get (0).l)
      blackbg_boxs ($('.blackbg_boxs').get (0).l);
    else
      $('.blackbg_boxs').removeClass ('show');

  });
  $('.blackbg_boxs .icon-chevron-right').click (function () {
    if ($('.blackbg_boxs').get (0).r)
      blackbg_boxs ($('.blackbg_boxs').get (0).r);
    else
      $('.blackbg_boxs').removeClass ('show');
  });

  $('.calendar_boxs').each (function () {
    var $that = $(this), $next = $that.next ();
    if (!$next.hasClass ('cd_boxs')) return;
    $next.data ('a', $next.outerHeight ()).css ({'height': 0});

    $that.click (function () {
      if ($(this).hasClass ('show'))
        $next.css ({'height': 0});
      else
        $next.css ({'height': $next.data ('a')});
      $(this).toggleClass ('show');
    });
  });
});