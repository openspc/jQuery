$(function(){
  $("#btn").click(function(){
    $("input[value*='Nexus']").each(function(){
      // テキストフィールドだけを対象にする
      if($(this).attr("type") == "text"){
        // 背景色をオレンジ色にする
        $(this).css("background", "orange");
      }
    });
  });
});