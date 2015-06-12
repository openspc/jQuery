$(function(){
  // ドキュメントにクリックイベントを割り当てる
  $(document).bind("click", function(evt){
    // 結果表示する要素をクリアする
    $("#result").text("");
    // クリック時のbody要素以外の親要素を全て出力する
    $(evt.target).parentsUntil("body").each(function(index){
      // 内容を読み出す
      var htmlText = $("#result").html();
      // タグ名（要素名）を取得する
      htmlText += this.tagName + "<br>";
      // 結果を表示する
      $("#result").html(htmlText);
    });
  });
});