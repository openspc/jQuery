$(function(){
  // 最初のボタンにクリックイベントを割り当て
  $("#btn").click(function(){
    // ID名noteList内のli要素の前にimg要素を挿入する
    $("#noteList li").prepend('<img src="images/note.png">');
  });
});