$(function(){
  // ボタンにclickイベントを割り当てる
  $("#btn").click(function(){
    // noteのクラス名を持つ要素の背景色をオレンジ色にする
    $(".note").css("background", "orange");
  });
});