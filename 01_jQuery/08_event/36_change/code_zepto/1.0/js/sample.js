$(function(){
  // テキストフィールドにchangeイベントを割り当てる
  $("input").change(function(event){
    // 変更された要素の背景色を橙色にする
    $(this).css("background-color", "orange");
  });
});