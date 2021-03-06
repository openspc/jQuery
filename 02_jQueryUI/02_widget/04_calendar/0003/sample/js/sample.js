$(function(){
  // カレンダーを表示して選択できるようにする
  $(".checkdate").datepicker({
    // 本日よりも3日前から選択可能にする
    minDate : -3,
    // 本日より1週間と3日まで選択可能にする。+10をしてしても同じ
    maxDate : "+1w +3d",
    // 以下は日曜日から表示を開始し、曜日、月名表示の設定
    firstDay : 0,
    dayNamesMin : ["日", "月", "火", "水", "木", "金", "土"],
    monthNames : ["1月", "2月", "3月", "4月", "5月", "6月",
                  "7月", "8月", "9月", "10月", "11月", "12月"]
  });
});