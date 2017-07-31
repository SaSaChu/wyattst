/**
 * @author      ZEUS Design - http://www.zeusdesign.com.tw
 * @copyright   Copyright (c) 2016 ZEUS Design
 */

$(function() {

  var $mb = $('#moble_nav_boxs');

  $('.moble_open_icon').click(function() {
    $mb.addClass('s_open');
  });

  $('.moble_close_icon').click(function() {
    $mb.removeClass('s_open');
  });


  $(".banner .item").imgLiquid ();

  $('.banner').each (function () {
    var $that = $(this), $a = $that.find ('a'), $points = $that.find ('.points');
    $that.attr ('data-n', 1).data ('l', $that.find ('>.item').length);

    $a.click (function () {
      var n = parseInt ($that.attr ('data-n'), 10);
      
      if ($(this).hasClass ('left')) $that.attr ('data-n', n < 2 ? $that.data ('l') : n - 1);
      if ($(this).hasClass ('right')) $that.attr ('data-n', n >= $that.data ('l') ? 1 : n + 1);
    });

    $points.append ($('<span />').append (Array.apply (null, Array ($that.data ('l'))).map (function (_, i) { return $('<i />').attr ('data-i', i).click (function () { $that.attr ('data-n', $(this).index () + 1); }); })));

    if ($that.data ('time')) setTimeout (function () { $a.filter ('.right').click (); }, parseInt ($that.data ('time'), 10) * 1000);
  });
});