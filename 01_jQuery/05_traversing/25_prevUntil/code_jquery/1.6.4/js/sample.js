$(function(){
  // ボタンにクリックイベントを割り当て
  $(":button:eq(0)").click(function(){
    // ID名imageList内の3番目より前のokクラス以外の不透明度を変える
    $("#imageList img:eq(2)").prevUntil(".ok").css("opacity", 0.3);
  });
});