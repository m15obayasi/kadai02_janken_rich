// var singi = 0;
// var answer = 0;

// スタートアクション＋1問目
$(".button").on("click", function () {
    $(".button").fadeOut();
    $(".choice-0").fadeIn();
    // 問題文を表示。singiは「真偽（正解）」
    // 0が「実在する」1は「実在しない」
     var news = Math.floor(Math.random() * 3);
        if (news === 0) {
            $(".text-box").html("工藤静香　自宅にタブレットが7台");
            var singi = 1;
        } else if (news === 1) {
            $(".text-box").html("志田未来、祖母とキャンドゥで買い物");
            var singi = 1;
        } else if (news === 2) {
            $(".text-box").html("斉藤由貴　無線イヤホンデビュー");
            var singi = 1;
        }

    $(".next").on("click", function () {
        $(".next").fadeOut();
        $(".kekka").fadeOut();
        $(".choice-0").fadeIn();
    });
         var news = Math.floor(Math.random() * 3);
        if (news === 0) {
            $(".text-box").html("工藤静香　自宅にタブレットが7台");
            var singi = 1;
        } else if (news === 1) {
            $(".text-box").html("志田未来、祖母とキャンドゥで買い物");
            var singi = 1;
        } else if (news === 2) {
            $(".text-box").html("斉藤由貴　無線イヤホンデビュー");
            var singi = 1;
        }

    // 0「実在する」と回答
    $(".choice-A").on("click", function () {
        var answer = 0;
        console.log(answer);
        if (answer == singi) {
            console.log("正解");
            $(".kekka").html("正解");
            $(".kekka").css("background-color", "#2f2a20");
            $(".choice-A").fadeOut();
            $(".choice-B").fadeOut();
            $(".next").fadeIn();
            $(".next").css("border","4px solid #2f2a20");
        } else {
            console.log("不正解");
            $(".kekka").html("不正解");
            $(".kekka").css("background-color", "#2f2a20");
            $(".choice-A").fadeOut();
            $(".choice-B").fadeOut();
            $(".next").fadeIn();
            $(".next").css("border","4px solid #2f2a20");
        }
    });
        // 1「実在しない」と回答
    $(".choice-B").on("click", function () {
        var answer = 1;
        console.log(answer);
        if (answer == singi) {
            console.log("正解");
            $(".kekka").html("正解");
            $(".kekka").css("background-color", "#2f2a20");
            $(".choice-A").fadeOut();
            $(".choice-B").fadeOut();
            $(".next").fadeIn();
            $(".next").css("background-color", "#2f2a20");
        } else {
            console.log("不正解");
            $(".kekka").html("不正解");
            $(".kekka").css("background-color", "#2f2a20");
            $(".choice-A").fadeOut();
            $(".choice-B").fadeOut();
            $(".next").fadeIn();
            $(".next").css("background-color", "#2f2a20");
        }
    });
});
