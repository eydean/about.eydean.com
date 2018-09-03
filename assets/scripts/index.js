$(document).ready(function () {
    $('.card').hover(
        function(){ $(this).addClass('card-shadow') }
    )
    $('.card').mouseleave(
        function(){ $(this).removeClass('card-shadow') }
    )
    $('.card').hover(
        function(){ $(this).removeClass('hide-tail') }
    )
    $('.card').mouseleave(
        function(){ $(this).addClass('hide-tail') }
    )
  });