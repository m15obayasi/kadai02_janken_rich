var totalQuestions = 10; // 全体の問題数
var number = 0; // 今、何問目？
var correct = 0; // 正解数

// クイズのギミック
$(".button, .next").on("click", function () {
    $(".button").fadeOut("fast");
    $(".choice-0").fadeIn("fast");
    $(".next").fadeOut("fast");
    $(".kekka").css("background-color", "white");
    $(".choice-A").fadeIn("fast");
    $(".choice-B").fadeIn("fast");
    // 問題文を表示。singiは「真偽（正解）」
    // 0が「実在する」1は「実在しない」
    var news = Math.floor(Math.random() * 136);
    if (news === 0) {
        $(".text-box").html("工藤静香　自宅にタブレットが7台");
        var singi = 1;
    } else if (news === 1) {
        $(".text-box").html("志田未来、祖母とキャンドゥで買い物");
        var singi = 1;
    } else if (news === 2) {
        $(".text-box").html("斉藤由貴　無線イヤホンデビュー");
        var singi = 1;
    } else if (news === 3) {
        $(".text-box").html("薬丸裕英、妻へリクエストした夕食に「旨っっっ！！」");
        var singi = 0;
    } else if (news === 4) {
        $(".text-box").html("ティモンディ高岸宏行「冠婚葬祭のスーツは１着も持っていない」");
        var singi = 0;
    } else if (news === 5) {
        $(".text-box").html("中谷美紀「パスタは日本が一番」");
        var singi = 1;
    } else if (news === 6) {
        $(".text-box").html("須賀健太　尊敬する偉人は「エジソン」");
        var singi = 1;
    } else if (news === 7) {
        $(".text-box").html("えなりかずき　3日連続バーミヤン");
        var singi = 1;
    } else if (news === 8) {
        $(".text-box").html("唐沢寿明　自宅の靴下は「全部ブラウン」");
        var singi = 1;
    } else if (news === 9) {
        $(".text-box").html("桐谷健太　ビッグマック3分で完食");
        var singi = 1;
    } else if (news === 10) {
        $(".text-box").html("佐々木蔵之介も驚き！京都の「緑色のビール」");
        var singi = 1;
    } else if (news === 11) {
        $(".text-box").html("松本まりか、洗顔に「50分」");
        var singi = 1;
    } else if (news === 12) {
        $(".text-box").html("矢口真里、得意料理は「油淋鶏」");
        var singi = 1;
    } else if (news === 13) {
        $(".text-box").html("武井壮、カフェインは「効かない」");
        var singi = 1;
    } else if (news === 14) {
        $(".text-box").html("相田翔子、ドーベルマンに追いかけられて大絶叫");
        var singi = 1;
    } else if (news === 15) {
        $(".text-box").html("MEGUMI、ばかうけが喉につまり号泣");
        var singi = 1;
    } else if (news === 16) {
        $(".text-box").html("唐沢寿明、巨大な傘に大興奮");
        var singi = 1;
    } else if (news === 17) {
        $(".text-box").html("木村カエラ　地元の喫茶店で同級生と再会し感涙");
        var singi = 1;
    } else if (news === 18) {
        $(".text-box").html("武井壮、カフェインは「効かない」");
        var singi = 1;
    } else if (news === 19) {
        $(".text-box").html("吉川晃司の作った蕎麦が太すぎると話題");
        var singi = 1;
    } else if (news === 20) {
        $(".text-box").html("石坂浩二　オーストリアの古めかしい螺旋階段に大興奮");
        var singi = 1;
    } else if (news === 21) {
        $(".text-box").html("朝日奈央　バンコクで財布を無くすもジャカルタで発見");
        var singi = 1;
    } else if (news === 22) {
        $(".text-box").html("上地雄輔の新アルバム　収録曲を上から順に読み上げると……！！");
        var singi = 1;
    } else if (news === 23) {
        $(".text-box").html("【画像あり】巨大ピラニアに会釈をする、さかなクン");
        var singi = 1;
    } else if (news === 24) {
        $(".text-box").html("ヒコロヒーがパリス・ヒルトンの〝６時間半遅刻〟を「さすが！」と絶賛");
        var singi = 0;
    } else if (news === 25) {
        $(".text-box").html("パリス・ヒルトンが８３万円の“手乗り”チワワを購入");
        var singi = 0;
    } else if (news === 26) {
        $(".text-box").html("渡辺直美初主演舞台「ヘアスプレー」初日公演中止を発表");
        var singi = 0;
    } else if (news === 27) {
        $(".text-box").html("河北麻友子、初串カツに「アメージング」");
        var singi = 0;
    } else if (news === 28) {
        $(".text-box").html("岡田准一、恋愛作品の出演を希望 「おじさんとばっかり戦ってる」");
        var singi = 0;
    } else if (news === 29) {
        $(".text-box").html("ペナルティヒデ、レトルトカレーをプロデュース");
        var singi = 0;
    } else if (news === 30) {
        $(".text-box").html("岡田准一、坂口健太郎が食事会に「Tシャツとサンダルで来た（笑）」");
        var singi = 0;
    } else if (news === 31) {
        $(".text-box").html("「餃子好き」の石川さゆり、関西「最新餃子」事情に驚き");
        var singi = 0;
    } else if (news === 32) {
        $(".text-box").html("HIKAKIN、『月見バーガー』18種を食べ比べ 「1位決められないかも」");
        var singi = 0;
    } else if (news === 33) {
        $(".text-box").html("北乃きい、洗濯は必ず洗濯板を使用　こだわりを熱弁「それでよれるTシャツは買わない」");
        var singi = 0;
    } else if (news === 34) {
        $(".text-box").html("北斗晶、ガタガタになった前髪を公開「えらい事になってしまった」");
        var singi = 0;
    } else if (news === 35) {
        $(".text-box").html("吉岡里帆、お弁当の手羽先食べて幸福感「毎日でもいいかも」");
        var singi = 0;
    } else if (news === 36) {
        $(".text-box").html("ＧＬＡＹのＴｉｋＴｏｋが永久停止　ＴＥＲＵ「本当に停止されてるｗ」");
        var singi = 0;
    } else if (news === 37) {
        $(".text-box").html("本田望結、運転免許取得を報告　小籔千豊、TAKAHIROからも祝福の声");
        var singi = 0;
    } else if (news === 38) {
        $(".text-box").html("谷原章介、展覧会『兵馬俑と古代中国～秦漢文明の遺産～』ナビゲーターに決定");
        var singi = 0;
    } else if (news === 39) {
        $(".text-box").html("戸田恵梨香、ポジティブに過ごす秘訣は「自分を信じること」");
        var singi = 0;
    } else if (news === 40) {
        $(".text-box").html("野村周平　代官山の書店で「バイク雑誌」を熟読していたワケ");
        var singi = 0;
    } else if (news === 41) {
        $(".text-box").html("松たか子、バッグに大量の食パン！現場で「ヤマザキ秋のパン祭り」開催か");
        var singi = 0;
    } else if (news === 42) {
        $(".text-box").html("貞子が客席から大量発生！ 小芝風花「かわいいですね」");
        var singi = 0;
    } else if (news === 43) {
        $(".text-box").html("芳根京子、遅めの夏休み満喫　お肉にかぶりつく姿に8.7万“いいね！”");
        var singi = 0;
    } else if (news === 44) {
        $(".text-box").html("人気ファッションYouTuber・ももち、整形を報告 経緯＆手術後の経過明かす");
        var singi = 0;
    } else if (news === 45) {
        $(".text-box").html("宇多田ヒカル、「最近は演歌しか聞いてない」");
        var singi = 1;
    } else if (news === 46) {
        $(".text-box").html("薬師丸ひろ子　ウーパールーパーの飼育を開始");
        var singi = 1;
    } else if (news === 47) {
        $(".text-box").html("テツandトモ、高校時代は2人ともバスケ部　「ベンチで声出すタイプだった」");
        var singi = 1;
    } else if (news === 48) {
        $(".text-box").html("ケイン・コスギ「ぼくは毎日120％」");
        var singi = 1;
    } else if (news === 49) {
        $(".text-box").html("モト冬樹、ざるそばのデカ盛りをペロリ");
        var singi = 1;
    } else if (news === 50) {
        $(".text-box").html("井森美幸、ライチュウが分からない「ピカチュウの偽物、ですか？」");
        var singi = 1;
    } else if (news === 51) {
        $(".text-box").html("キューバ滞在中のmisono、路上で「スタンド・バイ・ミー」熱唱");
        var singi = 1;
    } else if (news === 52) {
        $(".text-box").html("【画像あり】野良犬に囲まれるトランプマン");
        var singi = 1;
    } else if (news === 53) {
        $(".text-box").html("今田美桜　実家でのんびりティータイム　甘めの紅茶は「お母さんの味」");
        var singi = 1;
    } else if (news === 54) {
        $(".text-box").html("マルシア、甥っ子とマリオカート　逆走しての最下位に苦笑");
        var singi = 1;
    } else if (news === 55) {
        $(".text-box").html("千秋、ラジオで空き巣被害を長尺トーク　藤本美貴も思わず「長ぇな」");
        var singi = 1;
    } else if (news === 56) {
        $(".text-box").html("細川たかし、30年ぶりの全力疾走　「このまま天国行くかと思った」");
        var singi = 1;
    } else if (news === 57) {
        $(".text-box").html("西川貴教も大興奮！伊豆熱川の絶品干物にぜいたく温泉一人旅");
        var singi = 1;
    } else if (news === 58) {
        $(".text-box").html("石川さゆりが人生はじめての死体役に大興奮　「本当に死んだかと思った」");
        var singi = 1;
    } else if (news === 59) {
        $(".text-box").html("ゆうちゃみ　ルンバの使い方が分からず3ヶ月放置");
        var singi = 1;
    } else if (news === 60) {
        $(".text-box").html("平祐奈はテトリスに夢中「私はテトリスの神になりたい」");
        var singi = 1;
    } else if (news === 61) {
        $(".text-box").html("阿佐ヶ谷姉妹　鶯谷の駄菓子屋で涙");
        var singi = 1;
    } else if (news === 62) {
        $(".text-box").html("中村獅童、電動歯ブラシで口の中が血だらけ「参りましたね（笑）」");
        var singi = 1;
    } else if (news === 63) {
        $(".text-box").html("ギャル曽根、愛する我が子のために毎日腹筋80回");
        var singi = 1;
    } else if (news === 64) {
        $(".text-box").html("藤田ニコル、母から譲り受けた化粧台が転倒　「モー、最悪！」");
        var singi = 1;
    } else if (news === 65) {
        $(".text-box").html("山口もえがボンバーマンに挑戦　5回自爆して「もう良いです」");
        var singi = 1;
    } else if (news === 66) {
        $(".text-box").html("勝俣州和　滋賀でマーマレードを爆食い　「止めらんね〜！！」");
        var singi = 1;
    } else if (news === 67) {
        $(".text-box").html("松本明子、パキスタンで野良犬に囲まれた若手時代を回顧");
        var singi = 1;
    } else if (news === 68) {
        $(".text-box").html("トランプマンが跳び箱に挑戦　千鳥ノブは「まず仮面を脱げい！」");
        var singi = 1;
    } else if (news === 69) {
        $(".text-box").html("井上咲楽、神社で無線イヤホンを紛失　まさに神隠し");
        var singi = 1;
    } else if (news === 70) {
        $(".text-box").html("リリー・フランキー、スマホの充電は常に80％以上");
        var singi = 1;
    } else if (news === 71) {
        $(".text-box").html("宮沢りえ　母の日に娘特製のいちごタルトで感激");
        var singi = 1;
    } else if (news === 72) {
        $(".text-box").html("松任谷由実、ラジオ番組で猫と15分トーク");
        var singi = 1;
    } else if (news === 73) {
        $(".text-box").html("きゃりーぱみゅぱみゅ　マイブームは七味唐辛子");
        var singi = 1;
    } else if (news === 74) {
        $(".text-box").html("松本伊代　にゃんこ大戦争に大ハマリ　「もう誰もやってない」");
        var singi = 1;
    } else if (news === 75) {
        $(".text-box").html("工藤静香　ママ友と味噌汁パーティ");
        var singi = 1;
    } else if (news === 76) {
        $(".text-box").html("香取慎吾、ビールの新CMでバク宙に挑戦　「飲んだビール全部吐くかと思った」");
        var singi = 1;
    } else if (news === 77) {
        $(".text-box").html("藤本美貴　マリオパーティーで家族を圧倒　「もう誰にも負けない」");
        var singi = 1;
    } else if (news === 78) {
        $(".text-box").html("山瀬まみ、レモネードを作りすぎて絶望");
        var singi = 1;
    } else if (news === 79) {
        $(".text-box").html("ダンカン、庭で枝豆を収穫　「ビールが止まらねぇ」");
        var singi = 1;
    } else if (news === 80) {
        $(".text-box").html("ボブ・サップ、現在はアラスカ居住　小型カヌーでバス釣りの優雅な日々");
        var singi = 1;
    } else if (news === 81) {
        $(".text-box").html("ねづっち　BSテレ東で初冠番組がスタート　ヨーロッパをなぞかけで巡る");
        var singi = 1;
    } else if (news === 82) {
        $(".text-box").html("広瀬アリス、前世はドイツのケーキ屋さん");
        var singi = 1;
    } else if (news === 83) {
        $(".text-box").html("ディーン・フジオカが「なぎなた」をプロデュース！？");
        var singi = 1;
    } else if (news === 84) {
        $(".text-box").html("ムロツヨシの意外な下積み時代　「死体役を半年で4回やった」");
        var singi = 1;
    } else if (news === 84) {
        $(".text-box").html("ビビアン・スー　愛車のミニクーパーが損傷　「ショックです……」");
        var singi = 1;
    } else if (news === 85) {
        $(".text-box").html("竹野内豊　インコの群れに襲われた少年時代を回顧　鈴木福は信じず");
        var singi = 1;
    } else if (news === 86) {
        $(".text-box").html("大竹まこと　動物園ロケでインドゾウに悪態　「デケェんだよ！！」");
        var singi = 1;
    } else if (news === 87) {
        $(".text-box").html("伊勢谷友介、今更ハンドスピナーにハマる");
        var singi = 1;
    } else if (news === 88) {
        $(".text-box").html("浜崎あゆみ　ラスベガスで「究極のビール」を一気飲み");
        var singi = 1;
    } else if (news === 89) {
        $(".text-box").html("竹内涼真　学生時代はファミレスでバイト　得意料理はチキンサラダ");
        var singi = 1;
    } else if (news === 90) {
        $(".text-box").html("草刈民代、伝説のワインを求めてフランス1人旅");
        var singi = 1;
    } else if (news === 91) {
        $(".text-box").html("イモトアヤコ　甥っ子の運動会で大活躍");
        var singi = 1;
    } else if (news === 92) {
        $(".text-box").html("柏木由紀　ニューヨークで自分そっくりの日本人形を発見");
        var singi = 1;
    } else if (news === 93) {
        $(".text-box").html("ふかわりょう、飼っている熱帯魚が全滅");
        var singi = 1;
    } else if (news === 94) {
        $(".text-box").html("あいみょん、暗算が得意");
        var singi = 1;
    } else if (news === 95) {
        $(".text-box").html("矢沢永吉　ビニール傘は「ロックじゃないね」");
        var singi = 1;
    } else if (news === 96) {
        $(".text-box").html("髭男爵　巨大すごろくでルネッサーンス！！");
        var singi = 1;
    } else if (news === 97) {
        $(".text-box").html("小泉孝太郎の作った折り鶴が綺麗すぎると話題に");
        var singi = 1;
    } else if (news === 98) {
        $(".text-box").html("東野幸治、モンゴルで偽物のガンダムを発見");
        var singi = 1;
    } else if (news === 99) {
        $(".text-box").html("永野芽郁、アレクサに怒られる");
        var singi = 1;
    } else if (news === 100) {
        $(".text-box").html("椎名桔平、コーヒには「結構、砂糖入れます」");
        var singi = 1;
    } else if (news === 101) {
        $(".text-box").html("武井壮、カフェインは「効かない」");
        var singi = 1;
    } else if (news === 102) {
        $(".text-box").html("新婚の井戸田潤、好きな妻の手料理は「ハンバーーーグ!!!」");
        var singi = 0;
    } else if (news === 103) {
        $(".text-box").html("仲里依紗、クレジットカード使えず”金なし状態”に 「マジで最悪な1日」");
        var singi = 0;
    } else if (news === 104) {
        $(".text-box").html("若槻千夏、我が子のピアノの発表会で涙「親としてグッときちゃいます」");
        var singi = 0;
    } else if (news === 105) {
        $(".text-box").html("岩井ジョニ男、初の冠番組「ジョニ男のぶらぶら昭和。」10月放送開始");
        var singi = 0;
    } else if (news === 106) {
        $(".text-box").html("工藤静香「今年もあっという間に」ディナーショーの開催を告知「特別な夜にしていただけたら」");
        var singi = 0;
    } else if (news === 107) {
        $(".text-box").html("辻希美&杉浦太陽の長女、TikTokでレアな親子3ショットを公開「弟の友達に撮ってもらった」");
        var singi = 0;
    } else if (news === 108) {
        $(".text-box").html("藤原紀香「朝ラーならぬ、朝うどん！」と本場香川ではしご　舞台公演の英気養う");
        var singi = 0;
    } else if (news === 109) {
        $(".text-box").html("ギャル曽根の長男、回転寿司で食べる“皿数”は… 共演者も驚嘆「DNAだね！」");
        var singi = 0;
    } else if (news ===110) {
        $(".text-box").html("ずん飯尾和樹、横断歩道をスムーズに渡るコツを伝授 「モーゼの十戒のように…」");
        var singi = 0;
    } else if (news === 111) {
        $(".text-box").html("梅沢富美男、LINEを頑なに嫌がるも… “ある機能”の便利さに態度一変");
        var singi = 0;
    } else if (news === 112) {
        $(".text-box").html("同じものをストック買いする人には、“ある特徴”が… マツコも驚き「そうですか！？」");
        var singi = 0;
    } else if (news === 113) {
        $(".text-box").html("大沢たかお、京都散歩ショットに「まるでドラマシーン」「歩くだけでもうランウェイ」");
        var singi = 0;
    } else if (news === 114) {
        $(".text-box").html("村重杏奈、マネージャーから“ムカつかれていること”が明らかに");
        var singi = 0;
    } else if (news === 115) {
        $(".text-box").html("マギー、17年ぶりに同級生と奇跡の再会「みんなに聞いてほしい！！！」");
        var singi = 0;
    } else if (news === 116) {
        $(".text-box").html("ナタリー・ポートマン、秋らしいダークな色合いの新ボブヘア披露");
        var singi = 0;
    } else if (news === 117) {
        $(".text-box").html("霜降り明星、焼津温泉に満足「日本のグアムやで」");
        var singi = 0;
    } else if (news === 118) {
        $(".text-box").html("いろはラムネが花ブービーに改名");
        var singi = 0;
    } else if (news === 119) {
        $(".text-box").html("土屋太鳳のポッドキャスト番組「太鳳のひまわり日和！」配信スタート");
        var singi = 1;
    } else if (news === 120) {
        $(".text-box").html("霜降り明星せいや、大好きなマグロでパフェを作る");
        var singi = 0;
    } else if (news === 121) {
        $(".text-box").html("寺門ジモン、肉の焼き方が適当な人を許せない「肉の声が聞こえないの？」");
        var singi = 0;
    } else if (news === 122) {
        $(".text-box").html("平野ノラ、藤田ニコルの結婚式に参列「感動で泣きっぱなしでした」");
        var singi = 0;
    } else if (news === 123) {
        $(".text-box").html("川崎麻世、妻が朝6時前に起きて作った朝食「大好きなものばかり」");
        var singi = 0;
    } else if (news === 124) {
        $(".text-box").html("小倉優子、全体的に茶色だった夕食を公開「とても美味しそう」「完璧」の声");
        var singi = 0;
    } else if (news === 125) {
        $(".text-box").html("モト冬樹、頂き物を使った夕食のメニューを公開「島根から10キロ送られてきた」");
        var singi = 0;
    } else if (news === 126) {
        $(".text-box").html("元欅坂４６・菅井友香　よく食べる男性は「素敵だと思います！」");
        var singi = 0;
    } else if (news === 127) {
        $(".text-box").html("森泉　ＤＩＹでネジを打ちすぎて指が太くなったと明かす「指輪のサイズが変わっちゃった」");
        var singi = 0;
    } else if (news === 128) {
        $(".text-box").html("奈緒、“健康オタク”の理由は「長くお酒と付き合っていくために」");
        var singi = 0;
    } else if (news === 129) {
        $(".text-box").html("岡田将生、満島ひかりの一言に笑い止まらず「過呼吸になりそうです…(笑)」");
        var singi = 0;
    } else if (news === 130) {
        $(".text-box").html("綾野剛、堂本剛にチョコレートケーキ贈る「バレンタインデーだったので…」");
        var singi = 0;
    } else if (news === 131) {
        $(".text-box").html("京本大我、共演した坂口涼太郎の家賃5万円に驚き「本当!?」");
        var singi = 0;
    } else if (news === 132) {
        $(".text-box").html("三谷幸喜監督、韓国で63歳誕生日祝われ「サランヘヨ～!」ファン350人と対面");
        var singi = 0;
    } else if (news === 133) {
        $(".text-box").html("山田杏奈、尖っていた学生時代　当時の取材記事は「恥ずかしくて見られない」");
        var singi = 0;
    } else if (news === 134) {
        $(".text-box").html("河合優実、いま熱中していることは“仕事ひとつ”「作品に取り組むことと生活は地続き」");
        var singi = 0;
    } else if (news === 135) {
        $(".text-box").html("スザンヌ、座右の銘は「明日は明日の風が吹く」");
        var singi = 1;
    }
    console.log("singi = " + singi);

// 「実在する」を押した
    $(".choice-A").on("click", function () {
        var answer = 0;
        console.log("answer = " + answer);
        if (answer == singi) {
            $(".kekka").html("正解");
            $(".kekka").css("background-color", "#FF4B4B");
            $(".choice-A, .choice-B").fadeOut("fast");
            $(".next-box, .next").fadeIn("fast");
            displayAnswer(correct + 1);
        } else if (answer != singi) {
            $(".kekka").html("不正解");
            $(".kekka").css("background-color", "#4B92FF");
            $(".choice-A, .choice-B").fadeOut("fast");
            $(".next-box, .next").fadeIn("fast");
        }
        if (number === totalQuestions) {
            if (correct >= 7) {
                $(".saiten-kekka").fadeIn("fast");
                $(".choice-0, .next, .correct, .question-box, .kekka").fadeOut("fast");
                $(".saiten-box").html("10問中" + correct + "問正解。合格です！")
            } else {
                $(".saiten-kekka").fadeIn("fast");
                $(".choice-0, .next, .correct, .question-box, .kekka").fadeOut("fast");
                $(".saiten-box").html("10問中" + correct + "問正解。不合格です……")
            }
        }
        $(".choice-A, .choice-B").off("click");
    });

// 「実在しない」を押した
    $(".choice-B").on("click", function () {
        var answer = 1;
        console.log("answer = " + answer);
        if (answer == singi) {
            $(".kekka").html("正解");
            $(".kekka").css("background-color", "#FF4B4B");
            $(".choice-A, .choice-B").fadeOut("fast");
            $(".next-box, .next").fadeIn("fast");
            displayAnswer(correct + 1);
        } else if (answer != singi) {
            $(".kekka").html("不正解");
            $(".kekka").css("background-color", "#4B92FF");
            $(".choice-A, .choice-B").fadeOut("fast");
            $(".next-box, .next").fadeIn("fast");
        }
        if (number === totalQuestions) {
            if (correct >= 7) {
                $(".saiten-kekka").fadeIn("fast");
                $(".choice-0, .next, .correct, .question-box, .kekka").fadeOut("fast");
                $(".saiten-box").html("10問中" + correct + "問正解。合格です！")
            } else {
                $(".saiten-kekka").fadeIn("fast");
                $(".choice-0, .next, .correct, .question-box, .kekka").fadeOut("fast");
                $(".saiten-box").html("10問中" + correct + "問正解。不合格です……")
            }
        }
        $(".choice-A, .choice-B").off("click");
    });
});

// 問題数を表示する関数
function displayQuestion(questionNum) {
$(".question").html("第" + questionNum + "問");
number = questionNum;
}
$(".button, .next").click(function () {
    displayQuestion(number + 1);
});

正解数を表示する関数
function displayAnswer(correctNum) {
$(".correct").html("正解数：" + correctNum);
correct = correctNum;
}