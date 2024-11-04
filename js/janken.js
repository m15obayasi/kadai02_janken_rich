// スタートアクション
$(".button").on("click", function () {
    $(".button").fadeOut();
    $(".choice-0").fadeIn();
    $(".text-box").html("工藤静香　自宅にタブレットが7台");
});

// 問題
$(".choice-box").on("click", function () {
    var num = Math.floor(Math.random() * 3);
    if (num === 0) {
        $(".text-box").html("動物に変身できる？");
    } else if (num === 1) {
        $(".text-box").html("女性？");
    } else if (num === 2) {
        $(".text-box").html("子供？");
    }
});