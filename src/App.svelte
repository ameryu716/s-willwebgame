<script lang="ts">
    // import Toastify from "toastify-js";
    import "toastify-js/src/toastify.css";

    import Header from "./lib/Header.svelte";
    import GameCard from "./lib/GameCard.svelte";
    import type { structure_data, card_info } from "./types";
    import thumb_p1 from "./assets/images/link_thumbnails/thumb-p1.png";
    import line_stamp1 from "./assets/images/stamps/line-stamp-1.png";
    import thumb_g1 from "./assets/images/link_thumbnails/thumb-g1.png";
    import thumb_g2 from "./assets/images/link_thumbnails/thumb-g2.png";
    import thumb_g3 from "./assets/images/link_thumbnails/thumb-g3.png";
    import thumb_t1 from "./assets/images/link_thumbnails/thumb-t1.png";
    import thumb_t3 from "./assets/images/link_thumbnails/thumb-t3.png";
    import thumb_t4 from "./assets/images/link_thumbnails/thumb-t4.png";

    const data: structure_data = {
        links_portfolio: ([
            {
                title: "SkillSets",
                url: "https://portfolio.amry.life",
                thumbnail_url: thumb_p1,
                description: "ポートフォリオ/スキルセットページです。",
                division: "portfolio",
            },
        ] as card_info[]).map((link) => {
            link.tags = [
                {
                    class: "portfolio",
                    name: "Portfolio",
                    color: "#4caf50",
                },
            ];
            return link;
        }),
        links_stamp: ([
            {
                title: "陽気な将棋",
                url: "https://store.line.me/stickershop/product/14991582/ja",
                thumbnail_url: line_stamp1,
                description: "Stamp1 陽気な将棋",
                division: "stamp",
            },
        ] as card_info[]).map((link) => {
            link.tags = [
                {
                    class: "stamp",
                    name: "Stamp",
                    color: "#4caf50",
                },
            ];
            return link;
        }),
        links: ([
            {
                title: "将棋の駒ジェネレータ",
                url: "/genes/shogi-piece-generator",
                thumbnail_url: thumb_t1,
                description: "駒の名前は自分で決めろ、目指せ3D駒モデラー！！",
                division: "generator",
            },
            {
                title: "BoxDancer",
                url: "/tools/box-dancer-vue",
                thumbnail_url: thumb_t4,
                description:
                    "自分だけのローカルブックマークツール！データはブラウザに保存されるので安心して使えます。",
                division: "tool",
            },
            {
                title: "画像ピンボール",
                url: "games/img-pinball",
                thumbnail_url: thumb_g2,
                division: "game",
                description:
                    "手始めに画像を入れるところからスタートだ。\n\n画像が丸く表示されたらスタート！\n\n画像を回せ！動かせ！驚かせろ！加速しろ！加速すると止まらない！共有したら社交ダンスに誘え！Twitterなら使った画像も一緒に共有できるぞ！\n\n画面の向こうの仲間と困惑を共有しろ！",
            },
            {
                title: "ジャイロ将棋",
                url: "games/geiro-shogi-board",
                thumbnail_url: thumb_g3,
                division: "game",
                description:
                    "うまく将棋盤を傾けて、歩兵で玉将に突撃しよう！王は逃げるのが得意でちょこまかと動き回る！うまく動きを読んで突撃しろ！！\n\n歩兵の位置が玉に重なればクリア！逆に将棋盤の外に出てしまうとNGだ。王のライフを先にゼロにしよう！",
            },
            {
                title: "漢検2級読みクイズ",
                url: "quizzes/kanji/read/2",
                thumbnail_url: thumb_g1,
                division: "game",
                description:
                    "※音が出ます。ご注意ください。\n\n一般人の常識？漢検二級の読みが効果音付きで学習できる！\n\n総合正解率付きで結果が分かりやすい！全140問から出題。問題文はちょっと意味が分からない文が多い！気を付けるように。\n\n作者のおすすめは勝ち抜きモードだ！失敗は許されないぞ？",
            },
            {
                title: "ColorDD",
                url: "tools/colordd",
                thumbnail_url: thumb_t3,
                division: "tool",
                description: "カラーツール",
            },
            {
                title: "Anizon.Client",
                url: "https://anizon.amry.life",
                thumbnail_url: thumb_t4,
                division: "tool",
                description: "- Anizon -\nアニソンDB",
            },
        ] as card_info[]).map((link) => {
            switch (link.division) {
                case "tool":
                    link.tags = [
                        {
                            class: "tool",
                            name: "Tool",
                            color: "#e9912c",
                        },
                    ];
                    break;
                case "game":
                    link.tags = [
                        {
                            class: "game",
                            name: "Game",
                            color: "#a86aff",
                        },
                    ];
                    break;
                case "generator":
                    link.tags = [
                        {
                            class: "generator",
                            name: "Generator",
                            color: "#f17070",
                        },
                    ];
                    break;
            }
            return link;
        }),
    };
</script>

<div class="wrapper p-2">
    <Header />
    <hr />

    <main class="p-3">
        <div class="container-sm">
            <h2>Portfolio</h2>
            <hr />
            <div class="rows row-cols-1 row-cols-sm-3 g-3">
                {#each data.links_portfolio as ld}
                    <div class="col">
                        <GameCard card_info={ld} />
                    </div>
                {/each}
            </div>
            <hr />
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
            <div class="row row-cols-1 row-cols-sm-3 g-3">
                {#each data.links_stamp as ld}
                    <div class="col">
                        <GameCard card_info={ld} classNames=" thumb-cover" />
                    </div>
                {/each}
            </div>
        </div>
    </main>
</div>

<style lang="scss" scoped>
</style>
