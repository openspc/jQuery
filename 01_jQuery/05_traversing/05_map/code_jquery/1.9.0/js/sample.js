$(function(){
  // ボタンにクリックイベントを割り当て
  $(":button:eq(0)").click(function(){
    // 表内のtd要素内の文字を取得し配列で返す
    var price = $("table td").map(function(index, ele){
      // 要素を読み出し数値型にする
      var price = parseInt($(ele).text());
      if (price >= 0){
        // 読み出した内容を返す
        return price;
      }else{
        // マイナス値の場合は配列に含めないようにnullを返す
        return null;
      }
    });
    // 合計を入れる変数を0にする
    var total = 0;
    // 配列の数だけ繰り返す
    price.each(function(index, val){
      total = total + val;
    });
    // 合計を表示する
    alert("合計："+total);
  });
});