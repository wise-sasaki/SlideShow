/**
 * 再生ボタン機能クラスです。
 * 他のクラスでこのクラスを呼び出したいのでexportを付けています。
 */
export class SlideShowPlayer {
    /** 再生機能を設定するボタンの要素 */
    private button: HTMLElement;

    /**
     * コンストラクターです。
     * インスタンス生成時に呼ばれます。
     * @param element 再生ボタンの要素
     */
    constructor(element: HTMLElement) {
        this.button = element;
        // 初期表示時はボタンを非活性にします。
        $(this.button).prop('disabled', true);
        // 初期表示時は画像切り替えボタンを非表示にします。
        $('#left-side').css({ "display": "none" });
        $('#right-side').css({ "display": "none" });
        // イベント登録処理を呼び出します。
        this._addEventListener();
    }

    /**
     * イベント登録処理
     * jQueryのon関数を使用してイベント登録しています。
     * javascriptのaddEventLister関数と違ってイベント重複登録されてしまうので注意です。
     * 必要であればoff関数でイベントを破棄しましょう。
     * 戻り値はないのでvoidです。
     */
    private _addEventListener(): void {
        // アロー関数を使ってます。引数使わないので()です。function(){}でも良いです。
        $('#file').on('change', (ev: any) => {
            if (ev.target.files.length > 0) {
                // 読み込みファイルがある場合
                // ファイルダイアログ部品に変更があった場合に再生ボタンを活性に切り替えます。
                $(this.button).prop('disabled', false);
                // ファイルダイアログ部品に変更があった場合に画像切り替えボタンを非表示にします。
                $('#left-side').css({ "display": "none" });
                $('#right-side').css({ "display": "none" });
            }
        });

        $('#play').on('click', () => {
            // 再生ボタンが押されたときにボタンを非活性にします。
            $(this.button).prop('disabled', true);
            // 画像切り替えボタンを表示にします。
            $('#left-side').css({ "display": "block" });
            $('#right-side').css({ "display": "block" });
        })
    }
}