<script lang="ts">
    import Toastify from "toastify-js";
    import "toastify-js/src/toastify.css";

    // import svelteLogo from './assets/svelte.svg'
    // import viteLogo from '/vite.svg'
    // import Counter from './lib/Counter.svelte'
    import Header from "./lib/Header.svelte";
    import GameCard from "./lib/GameCard.svelte";
    import type { structure_data } from "./types";

    const data: structure_data = {
        links: [
            {
                title: "将棋の駒ジェネレータ",
                relative_url: "/genes/shogi-piece-generator",
                thumbnail_url: "/assets/images/link_thumbnails/thumb-t1.png",
                description: "駒の名前は自分で決めろ、目指せ3D駒モデラー！！",
                division: "tool",
                tags: [
                    { class: "generator", name: "Generator", color: "#f17070" },
                ],
            },

            // {
            //     title: "〇〇好き異常行動者否定ジェネレータ",
            //     relative_url: "gene-1",
            //     thumbnail_url: "assets/images/link_thumbnails/thumb-t2.png",
            //     description:
            //         "「ジェネレータが好きな人と付き合いたいです～！」というのは、ジェネレータで身内ノリしてワイワイできる人を探してるのであって、スクリプトをガンガン書いて笑みを浮かべたり、深夜二時にエラーが出て発狂したりするような異常行動者を探しているわけではない。",
            //     division: "tool",
            //     tags: [
            //         { class: "generator", name: "Generator", color: "#f17070" },
            //     ],
            // },
            {
                title: "BoxDancer",
                relative_url: "/tools/box-dancer-vue",
                thumbnail_url: "/assets/images/link_thumbnails/thumb-t4.png",
                description:
                    "自分だけのローカルブックマークツール！データはブラウザに保存されるので安心して使えます。",
                division: "tool",
                tags: [{ class: "tool", name: "Tool", color: "#e9912c" }],
            },
            {
                title: "画像ピンボール",
                relative_url: "games/img-pinball",
                thumbnail_url: "/assets/images/link_thumbnails/thumb-g2.png",
                division: "game",
                description:
                    "手始めに画像を入れるところからスタートだ。\n\n画像が丸く表示されたらスタート！\n\n画像を回せ！動かせ！驚かせろ！加速しろ！加速すると止まらない！共有したら社交ダンスに誘え！Twitterなら使った画像も一緒に共有できるぞ！\n\n画面の向こうの仲間と困惑を共有しろ！",
                tags: [{ class: "game", name: "Game", color: "#a86aff" }],
            },
            {
                title: "ジャイロ将棋",
                relative_url: "games/geiro-shogi-board",
                thumbnail_url: "/assets/images/link_thumbnails/thumb-g3.png",
                division: "game",
                description:
                    "うまく将棋盤を傾けて、歩兵で玉将に突撃しよう！王は逃げるのが得意でちょこまかと動き回る！うまく動きを読んで突撃しろ！！\n\n歩兵の位置が玉に重なればクリア！逆に将棋盤の外に出てしまうとNGだ。王のライフを先にゼロにしよう！",
                tags: [{ class: "game", name: "Game", color: "#a86aff" }],
            },
            {
                title: "漢検2級読みクイズ",
                relative_url: "quizzes/kanji/read/2",
                thumbnail_url: "/assets/images/link_thumbnails/thumb-g1.png",
                division: "game",
                description:
                    "※音が出ます。ご注意ください。\n\n一般人の常識？漢検二級の読みが効果音付きで学習できる！\n\n総合正解率付きで結果が分かりやすい！全140問から出題。問題文はちょっと意味が分からない文が多い！気を付けるように。\n\n作者のおすすめは勝ち抜きモードだ！失敗は許されないぞ？",
                tags: [{ class: "game", name: "Game", color: "#a86aff" }],
            },
            {
                title: "ColorDD",
                relative_url: "tools/colordd",
                thumbnail_url: "/assets/images/link_thumbnails/thumb-t3.png",
                division: "tool",
                description: "カラーツール",
                tags: [{ class: "tool", name: "Tool", color: "#e9912c" }],
            },
        ],
    };

    // Toastify({
    //     text: "当ページはAWSからロリポップサーバーへ移行しました。",
    //     // duration: 7000,
    //     // destination: "https://github.com/apvarun/toastify-js",
    //     // newWindow: true,
    //     close: true,
    //     gravity: "top", // `top` or `bottom`
    //     position: "right", // `left`, `center` or `right`
    //     stopOnFocus: true, // Prevents dismissing of toast on hover
    //     style: {},
    //     onClick: function () {}, // Callback after click
    // }).showToast();
</script>

<Header />

<main class="p-3">
    <div class="container-sm">
        <h2>Web</h2>
        <hr />
        <div class="row row-cols-1 row-cols-sm-3 g-3">
            {#each data.links as ld}
                <div class="col">
                    <GameCard card_info={ld} />
                </div>
            {/each}
        </div>
        <hr />
        <h2>Line Stamp</h2>
        <a href="https://store.line.me/stickershop/product/14991582/ja">
            <img
                src="/assets/images/stamps/line-stamp-1.png"
                alt="Stamp1 陽気な将棋"
                width="500"
            />
        </a>
    </div>
</main>
