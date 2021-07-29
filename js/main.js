// ドロップダウンメニュー
$('.dropdown-btn').hover(
  function() {
    //カーソルが重なった時
    $(this).children('.dropdown').addClass('open');
  }, function() {
    //カーソルが離れた時
    $(this).children('.dropdown').removeClass('open');
  }
);

// グローバルナビの開閉
$(function() {
  $('.nav-button-wrap').on('click', function() {
    if ($(this).hasClass('active')) {
      // スマホ用メニューが表示されていたとき
      $(this).removeClass('active');
      $('.globalnav').addClass('close');
      $('.globalnav-wrap , body').removeClass('open');
    } else {
      // スマホ用メニューが非表示の時
      $(this).addClass('active');
      $('.globalnav').removeClass('close');
      $('.globalnav-wrap , body').addClass('open');
    }
  });
});

$(window).scroll(function (){
    $(".marker-animation").each(function(){
      var position = $(this).offset().top; //ページの一番上から要素までの距離を取得
      var scroll = $(window).scrollTop(); //スクロールの位置を取得
      var windowHeight = $(window).height(); //ウインドウの高さを取得
      if (scroll > position - windowHeight){ //スクロール位置が要素の位置を過ぎたとき
        $(this).addClass('active'); //クラス「active」を与える
      }
    });
   });