// スタートアクション
$(".button").on("click", function () {
    $(".button").fadeOut();
    $(".choice-box").fadeIn();
    $(".human").fadeIn();
    $(".text-box").html("男性？");
});

// 質問
$(".choice-box").on("click", function () {
    var num = Math.floor(Math.random() * 60);
    if (num === 0) {
        $(".text-box").html("動物に変身できる？");
    } else if (num === 1) {
        $(".text-box").html("女性？");
    } else if (num === 2) {
        $(".text-box").html("子供？");
    } else if (num === 3) {
        $(".text-box").html("大人？");
    } else if (num === 4) {
        $(".text-box").html("架空の人物？");
    } else if (num === 5) {
        $(".text-box").html("芸能人？");
    } else if (num === 6) {
        $(".text-box").html("アニメのキャラクター？");
    } else if (num === 7) {
        $(".text-box").html("芸術家？");
    } else if (num === 8) {
        $(".text-box").html("未来の世界に住んでいる？");
    } else if (num === 9) {
        $(".text-box").html("特徴的なアクセサリーをしている？");
    } else if (num === 10) {
        $(".text-box").html("有名な事件に関わっている？");
    } else if (num === 11) {
        $(".text-box").html("愛人がいる？");
    } else if (num === 12) {
        $(".text-box").html("大型犬を飼っている？");
    } else if (num === 13) {
        $(".text-box").html("魔法を使える？");
    } else if (num === 14) {
        $(".text-box").html("豪邸に住んでいる？");
    } else if (num === 15) {
        $(".text-box").html("有名な会社を経営している？");
    } else if (num === 16) {
        $(".text-box").html("じゃんけんで負けたことがない？");
    } else if (num === 17) {
        $(".text-box").html("ポケモンバトルで負けたことがない？");
    } else if (num === 18) {
        $(".text-box").html("雨が好き？");
    } else if (num === 19) {
        $(".text-box").html("卒業アルバムを捨てたことがある？");
    } else if (num === 20) {
        $(".text-box").html("ご飯よりパン派？");
    } else if (num === 21) {
        $(".text-box").html("ローンより賃貸？");
    } else if (num === 22) {
        $(".text-box").html("ポケモンよりデジモン派？");
    } else if (num === 23) {
        $(".text-box").html("ふるさと納税の仕組みが未だ分かってない？");
    } else if (num === 24) {
        $(".text-box").html("Web会議で画面共有する時、「よいしょ……」って言う？");
    } else if (num === 25) {
        $(".text-box").html("「彼氏」と「かれぴ」と「かれぴっぴ」の違いが分かってない？");
    } else if (num === 26) {
        $(".text-box").html("泣きたい夜もある？");
    } else if (num === 27) {
        $(".text-box").html("天動説を信じている？");
    } else if (num === 28) {
        $(".text-box").html("「行けたら行くよ～」で行った事ある？");
    } else if (num === 29) {
        $(".text-box").html("ドクターペッパーを化学薬品だと思っている？");
    } else if (num === 30) {
        $(".text-box").html("海へ行くと何故だか泣いてしまう？");
    } else if (num === 31) {
        $(".text-box").html("青い月を見たことがある？");
    } else if (num === 32) {
        $(".text-box").html("W杯の時だけサッカーを見ている？");
    } else if (num === 33) {
        $(".text-box").html("ドクターペッパーが120円もするのはおかしいと思っている？");
    } else if (num === 34) {
        $(".text-box").html("イヌ派か、ネコ派か……は、犬種にもよるだろと思っている？");
    } else if (num === 35) {
        $(".text-box").html("「俺の人生を見て、誰かスパチャしてくれ」と思っている？");
    } else if (num === 36) {
        $(".text-box").html("ウィキペディア財団に寄付したことがある？");
    } else if (num === 37) {
        $(".text-box").html("「10分遅れます～、、！！」で25分遅れたことがある？");
    } else if (num === 38) {
        $(".text-box").html("dポイントカードを持っている？");
    } else if (num === 39) {
        $(".text-box").html("Googleマップを使っている状態でも道に迷う？");
    } else if (num === 40) {
        $(".text-box").html("蕎麦よりうどん？");
    } else if (num === 41) {
        $(".text-box").html("海外に行ったことがある？");
    } else if (num === 42) {
        $(".text-box").html("歯の矯正をしたことがある？");
    } else if (num === 43) {
        $(".text-box").html("歩くのが早い？");
    } else if (num === 44) {
        $(".text-box").html("自炊をする？");
    } else if (num === 45) {
        $(".text-box").html("階段を少し上がっただけで結構キツい？");
    } else if (num === 46) {
        $(".text-box").html("お酒は結構飲む？");
    } else if (num === 47) {
        $(".text-box").html("同じ巻の漫画が家に３冊ある？");
    } else if (num === 48) {
        $(".text-box").html("休日は寝られるだけ寝ておきたい？");
    } else if (num === 49) {
        $(".text-box").html("「なるほどですね」って言う？");
    } else if (num === 50) {
        $(".text-box").html("走るのは早い？");
    } else if (num === 51) {
        $(".text-box").html("パクチーを育てている？");
    } else if (num === 52) {
        $(".text-box").html("スマホの画面がバキバキに割れている？");
    } else if (num === 53) {
        $(".text-box").html("花粉症？");
    } else if (num === 54) {
        $(".text-box").html("朝ドラは欠かさず見てる？");
    } else if (num === 55) {
        $(".text-box").html("たばこを吸う？");
    } else if (num === 56) {
        $(".text-box").html("電動歯ブラシを使う？");
    } else if (num === 57) {
        $(".text-box").html("二郎系のラーメンが好き？");
    } else if (num === 58) {
        $(".text-box").html("山登りが好き？");
    } else if (num === 59) {
        $(".text-box").html("焼き鳥は「塩」？");
    }
});

// 人物名（１行目）
$(".choice-box").on("click", function () {
    var num = Math.floor(Math.random() * 28);
    if (num === 0) {
        $(".who-1").html("織田裕二");
    } else if (num === 1) {
        $(".who-1").html("吉岡里穂");
    } else if (num === 2) {
        $(".who-1").html("ボブ・サップ");
    } else if (num === 3) {
        $(".who-1").html("有村架純");
    } else if (num === 4) {
        $(".who-1").html("久保田利伸");
    } else if (num === 5) {
        $(".who-1").html("小村寿太郎");
    } else if (num === 6) {
        $(".who-1").html("西園寺公望");
    } else if (num === 7) {
        $(".who-1").html("ベッキー");
    } else if (num === 8) {
        $(".who-1").html("今田耕司");
    } else if (num === 9) {
        $(".who-1").html("山口もえ");
    } else if (num === 10) {
        $(".who-1").html("齋藤飛鳥");
    } else if (num === 11) {
        $(".who-1").html("斉藤由貴");
    } else if (num === 12) {
        $(".who-1").html("MISIA");
    } else if (num === 13) {
        $(".who-1").html("大塩平八郎");
    } else if (num === 14) {
        $(".who-1").html("小泉今日子");
    } else if (num === 15) {
        $(".who-1").html("森崎ウィン");
    } else if (num === 16) {
        $(".who-1").html("大鶴義丹");
    } else if (num === 17) {
        $(".who-1").html("木の実ナナ");
    } else if (num === 18) {
        $(".who-1").html("堺正章");
    } else if (num === 19) {
        $(".who-1").html("明石家さんま");
    } else if (num === 20) {
        $(".who-1").html("高畑充希");
    } else if (num === 21) {
        $(".who-1").html("道端アンジェリカ");
    } else if (num === 22) {
        $(".who-1").html("速水もこみち");
    } else if (num === 23) {
        $(".who-1").html("関根麻里");
    } else if (num === 24) {
        $(".who-1").html("石橋貴明");
    } else if (num === 25) {
        $(".who-1").html("ヤドキング");
    } else if (num === 26) {
        $(".who-1").html("ギャラドス");
    } else if (num === 27) {
        $(".who-1").html("中山きんに君");
    } 
});
