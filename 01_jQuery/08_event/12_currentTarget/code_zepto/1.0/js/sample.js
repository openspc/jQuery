$(function(){
  // 全ての要素にclickイベントを割り当てる
  $("*").click(function(evt){
    // クリック時された要素を取得
    var cTarget = evt.currentTarget;
    var htmltext = $("#result").html();
    $("#result").html(htmltext+"<br>currentTarget : "+cTarget);
  });
});