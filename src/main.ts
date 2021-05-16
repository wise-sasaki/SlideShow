import { SlideShowDomCreate } from "./SlideShowDomCreate";
import { SlideShowFileReader } from "./SlideShowFileReader";
import { SlideShowPlayButton } from "./SlideShowPlayButton";

/**
 * Windows風スライドショーのメインクラスです。
 * 各画面部品の呼び出しを担当します。
 * スクリプトはHTMLのbody部最後で呼ばれます＝DOMの生成が完了しています。
 */
class Main {
    /**
     * メインメソッドです。
     * HTMLの要素からサイズなどの情報を取得して、
     * 各機能に対するクラスの呼び出しを行ないます。
     */
    public main() {
        // DOMの作成
        new SlideShowDomCreate();
        // ファイル操作エリアを取得
        const $fileArea: JQuery = $('#file-area');
        // 画像表示エリアを取得
        const $photoArea: JQuery = $('#photo-area');

        /*
         * 画面の構成要素を動的に決定します。
         */
        this.setDisplaySize($fileArea, $photoArea);
        // 画面サイズが変更された場合
        $(window).on('resize', () => {
            this.setDisplaySize($fileArea, $photoArea);
        });

        // ファイル読み込み機能の呼び出し
        new SlideShowFileReader($('#file')[0], $photoArea[0]);
        // 再生ボタン機能の呼び出し
        new SlideShowPlayButton($('#play')[0]);
    }

    /**
     * 画面のサイズを動的に設定します。
     * @param $fileArea ファイル操作エリア
     * @param $photoArea 画像表示エリア
     */
    private setDisplaySize($fileArea: JQuery, $photoArea: JQuery): void {
        // ブラウザのサイズを取得
        const windowH = $(window).height();
        const windowW = $(window).width();
        const fileAreaH = $fileArea.height();
        if (windowH && windowW && fileAreaH) {
            // 画像表示エリアの高さを設定します。
            $photoArea.css({
                'max-height': `${windowH - fileAreaH - 50}px`,
                'height': `${windowH - fileAreaH - 50}px`
            });
        }
    }
}

// メイン処理を起動
$(window).on('load', () => {
    new Main().main();
});