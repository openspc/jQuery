$(function(){
  // ボタンにクリックイベントを割り当て
  $("#btn").click(function(){
    // ID名imageList内の3番目より後のokクラス以外の不透明度を変える
    $("#imageList img").not(".ok").css("opacity", 0.3);
  });
});