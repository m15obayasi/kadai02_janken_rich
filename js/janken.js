// var singi = 0;
// var answer = 0;

// スタートアクション＋1問目
$(".button").on("click", function () {
    $(".button").fadeOut();
    $(".choice-0").fadeIn();
    $(".text-box").html("工藤静香　自宅にタブレットが7台");
    var singi = 1;
    console.log(singi);
    $(".choice-A").on("click", function () {
        var answer = 0;
        console.log(answer);
        if (answer == singi) {
            console.log("正解");
        } else {
            console.log("不正解");
        }
    });
    $(".choice-B").on("click", function () {
        var answer = 1;
        console.log(answer);
        if (answer == singi) {
            console.log("正解");
        } else {
            console.log("不正解");
        }
    });
});




// 問題
// $(".choice-box").on("click", function () {
//     var num = Math.floor(Math.random() * 3);
//     if (num === 0) {
//         $(".text-box").html("動物に変身できる？");
//     } else if (num === 1) {
//         $(".text-box").html("女性？");
//     } else if (num === 2) {
//         $(".text-box").html("子供？");
//     }
// });