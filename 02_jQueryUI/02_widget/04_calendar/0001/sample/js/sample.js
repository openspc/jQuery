$(function(){
  // カレンダーを表示して選択できるようにする
  $(".selectdate").datepicker({
    firstDay: 0,
    dayNames : ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
    dayNamesMin : ["日", "月", "火", "水", "木", "金", "土"],
    dayNamesShortType : ["日", "月", "火", "水", "木", "金", "土"]
  });
});