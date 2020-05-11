
// トップ画像切り替え
jQuery(function($) {
    $('.bg-slider').bgSwitcher({
        images: ['img/sunrise.jpg','img/sunrise02.jpg','img/sunrise03.jpg']
    });
});

$(function(){
    $('.pulldown-head').on('click', function(){
      $('.' + $(this).data('slide')).slideToggle(700);
    })
  })

 
  
// API
var apikey = "36461363c7f09e7d196b0c10273dd1d4";
	function buttonclick() {
		// 1. XMLHttpRequest オブジェクトを作る
		var xhr = new XMLHttpRequest();
		// 2. リクエストを送る
		var url = "https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=" + apikey;
		xhr.open("GET", url, true);
		// 3. 読み込みが完了したときに実行される関数を定義する
		xhr.onload = function(e) {
			// データを取得
			var item = eval("(" + xhr.responseText + ")");
			// データを展開してdiv 要素に設定する
			var div = document.getElementById("mydiv");
			var tenki = item["weather"][0]["main"];
			var ondo = parseFloat(item["main"]["temp"]) - 273.15;
			var html = "<table border='1'>";
			html += "<tr>";
			html += "<th> 天気</th><td>" + tenki + "</td>";
			html += "<th> 温度</th><td>" + ondo + "</td>";
			html += "</tr>";
			html += "</table>";
			div.innerHTML = html;
		};
		// 4. 送信する
        xhr.send();
    }