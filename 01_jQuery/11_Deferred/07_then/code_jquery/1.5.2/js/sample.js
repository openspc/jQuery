$(function(){
  // カウンタを用意
  var counter = 1;
  // 1回目の非同期処理を行う。全て正常な場合
  proc_OK()
    // 処理を順番に行うためにthen()を指定する
    .then( function(){ return proc_OK(); }, function(){ return proc_NG(); } )
    .then( function(){ return proc_NG(); }, function(){ return proc_NG(); } )
    .then( function(){ return proc_OK(); }, function(){ return proc_NG(); } )
    // doneは成功時に呼び出される
    .done( msg_ok )
    // failは失敗時に呼び出される
    .fail( msg_ng )
    // alwaysは処理の成功、失敗に関係なく呼び出される
    .always( msg_end );
  // 正常処理を行う関数
  function proc_OK(){
    // Deferredオブジェクトを作成する
    var def = new $.Deferred();
    // 1秒後に処理を行う
    setTimeout(function(){
      // 画面に正常に処理された事を示す文字を表示する
      $("#result").html($("#result").html() + "<br>"+counter+"：正常に処理しました");
      counter++;
      // 成功した(resolve)ことを示す
      return def.resolve();
    }, 1000);
    // Promiseオブジェクトを返す（重要）
    return def.promise();
  }
  // 失敗する処理を行う関数
  function proc_NG(){
    // Deferredオブジェクトを作成する
    var def = new $.Deferred();
    // 0.1秒後に処理を行う
    setTimeout(function(){
      // 画面に失敗した事を示す文字を表示する
      $("#result").html($("#result").html() + "<br>"+counter+"：処理に失敗しました");
      counter++;
      // 失敗した(reject)ことを示す
      return def.reject();
    }, 100);
    // Promiseオブジェクトを返す（重要）
    return def.promise();
  }
  // 正常終了のメッセージを表示する関数
  function msg_ok(){
    $("#result").html($("#result").html() + "<br>処理が終わりました");
  }
  // 失敗時の終了のメッセージを表示する関数
  function msg_ng(){
    $("#result").html($("#result").html() + "<br>処理が正常に終わりませんでした");
  }
  // 完了のメッセージを表示する関数
  function msg_end(){
    $("#result").html($("#result").html() + "<br>すべての処理が完了しました");
  }
});
