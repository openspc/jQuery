$(function(){
  // ボタンにクリックイベントを割り当て
  $("#btn").click(function(){
    // ID名imageList内のimg要素で高さが71ピクセル画像の不透明度を変える
    $("*").filter("img").each(function(index){
      if($(this).height() == 71) {
        $(this).css("opacity", 0.3);
      }
    });
  });
});