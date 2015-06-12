$(function(){
  // 画像にマウスダウンイベントを割り当てる
  $("#photo1").mousedown(function(){
    // 画像の不透明度を設定
    $(this).fadeTo(50, 0.5);
    // マウスボタンが押された状態である事を示すためメッセージを表示
    $("output:first").text("マウスダウンイベント発生");
  });
  // 画像にマウスダウンイベントを割り当てる
  $("#photo1").mouseup(function(){
    // 画像の不透明度を設定
    $(this).fadeTo(50, 1.0);
    // マウスボタンが離された状態である事を示すためメッセージを表示
    $("output:first").text("マウスアップイベント発生");
  });
});