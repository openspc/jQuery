$(function(){
  // 最初のボタンにイベントを割り当て
  $(":button:eq(0)").click(function(){
    // img要素のsrc属性値を読み出し
    var url = $("#myPhoto").attr("src");
    // 読み出した内容をアラートダイアログに表示
    alert(url);
  });
  // 2番目のボタンにイベントを割り当て
  $(":button:eq(1)").click(function(){
    // img要素のsrc属性値を設定
    $("#myPhoto").attr("src", "images/1.jpg");
  });
});