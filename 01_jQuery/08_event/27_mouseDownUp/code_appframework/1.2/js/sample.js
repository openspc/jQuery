$(function(){
  // 画像にマウスダウンイベントを割り当てる
  $("#photo1").on("mousedown", function(){
    // 画像の不透明度を設定
    $(this).css("opacity", 0.5);
    // マウスボタンが押された状態である事を示すためメッセージを表示
    $("#result").text("マウスダウンイベント発生");
  });
  // 画像にマウスダウンイベントを割り当てる
  $("#photo1").on("mouseup", function(){
    // 画像の不透明度を設定
    $(this).css("opacity", 1.0);
    // マウスボタンが離された状態である事を示すためメッセージを表示
    $("#result").text("マウスアップイベント発生");
  });
});