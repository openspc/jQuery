$(function(){
  // 最初のボタンにイベントを割り当て
  $(":button:eq(0)").click(function(){
    // テキストフィールドの内容を表示
    alert($("input:text:first").val());
  });
  // 2番目のボタンにイベントを割り当て
  $(":button:eq(1)").click(function(){
    // テキストフィールドの内容を設定
    $("input:text:first").val("OpenSpace");
  });
});