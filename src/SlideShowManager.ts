import { PhotoData } from "./PhotoData"
import { PhotoMode } from "./PhotoMode"
import { SlidshowToggleMenu } from "./SlideShowToggleMenu";

/**
 * スライドショー管理クラスです。
 */
export class SlideShowManager {
    private slidshowToggleMenu: SlidshowToggleMenu;
    /** 画像表示エリアの要素 */
    private photoAreaElemet: HTMLElement;
    /** 画像データの配列 */
    private photoArray: Array<PhotoData>;
    /** 現在の画像番号 */
    private photoCount: number;
    /** インターバル処理 */
    private interval: number = 0;
    /** スライドショーのリセットフラグ */
    public resetFlg = false;
    /** スライドショーの終了フラグ */
    private endFlg = false;
    /** 画像の表示モードです。 */
    public mode: PhotoMode = PhotoMode.NORMAL;
    /** 画像の表示時間です。 */
    public type: number = 5;
    /** ロックフラグ */
    private isLock: boolean = false;
    /** 順序フラグ */
    public isDefaultOrder: boolean = true;

    /**
     * コンストラクターです。
     * @param element 画像表示エリアの要素
     * @param array 画像データ一覧
     */
    constructor(element: HTMLElement, array: Array<PhotoData>) {
        // メンバ変数の初期化をします。
        this.photoAreaElemet = element;
        this.photoArray = array;
        this.photoCount = 0;
        this.slidshowToggleMenu = new SlidshowToggleMenu(this);
        this._addEventListener();
    }

    /**
     * イベント登録処理です。
     */
    private _addEventListener(): void {
        // 再生ボタン押下時にイベント登録。
        $('#play').on('click', () => {
            $('div.howtouse').hide();
            this.changePhoto(this.type);
        });

        // 切り替えボタン押下時にイベント登録。
        this.addChangeEventListener();

        // キーボード操作イベント登録
        this.addKeybordEventListener();

        // マウスホイール操作イベント登録
        this.addMousewheelEventListener();
    }

    /**
     * 切り替えボタン押下時イベント登録。
     */
    private addChangeEventListener(): void {
        // 表示切り替えボタン左が押されたら画像番号を前の画像に変更します。
        $('#left-button').on('click', () =>{
            if (!this.isLock) {
                this.photoCount--;
                this.photoCount--;
                this.resetFlg = true;
                this.changePhoto(this.type);
            }
        });
        // 表示切り替えボタン次が押されたら画像番号を次の画像に変更します。
        $('#right-button').on('click', () => {
            if (!this.isLock) {
                this.resetFlg = true;
                this.changePhoto(this.type);
            }
        });
    }

    /**
     * キーボード操作イベント登録
     */
    private addKeybordEventListener(): void {
        $("#background-image").on('keydown', (e: JQuery.KeyDownEvent) => {
            if (e.key === 'ArrowLeft') {
                // 押されたキーが←キーの場合
                if (!this.isLock) {
                    this.photoCount--;
                    this.photoCount--;
                    // 画像変更
                    this.resetFlg = true;
                    this.changePhoto(this.type);
                }
            } else if (e.key === 'ArrowRight') {
                // 押されたキーが→キーの場合
                if (!this.isLock) {
                    // 画像変更
                    this.resetFlg = true;
                    this.changePhoto(this.type);
                }
            } else if (e.key === 'ArrowDown') {
                //  押されたキーが↓キーの場合(隠し要素)
                this.isLock = this.isLock ? false : true;
                if (this.isLock) {
                    // ロック中のアイコンを作成する。
                    const lockDiv = document.createElement('div');
                    lockDiv.id = "lock";
                    lockDiv.classList.add('locked');
                    lockDiv.innerText = "Locked";
                    $('#file-area').append(lockDiv);
                } else {
                    $('#lock').remove();
                    // 画像変更
                    this.resetFlg = true;
                    this.changePhoto(this.type);
                }
            }
        });
    }

    /**
     * マウスホイール操作の登録
     */
    private addMousewheelEventListener(): void {
        $("#background-image").on('mousewheel', (ev: any) => {
            if (ev.wheelDelta > 0) {
                // マウスホイールを上に回した場合
                if (!this.isLock) {
                    this.photoCount--;
                    this.photoCount--;
                    // 画像変更
                    this.resetFlg = true;
                    this.changePhoto(this.type);
                }
            } else {
                // マウスホイールを下に回した場合
                if (!this.isLock) {
                    // 画像変更
                    this.resetFlg = true;
                    this.changePhoto(this.type);
                }
            }
        });
    }

    /**
     * オブジェクトの破棄時にListenerも破棄する。
     */
    public destructor(): void {
        // 再生ボタンのイベントを破棄します。
        $('#play').off('click');
        // 画像変更ボタン左のイベントを破棄します。
        $('#left-button').off('click');
        // 画像変更ボタン右のイベントを破棄します。
        $('right-button').off('click');
        // キーボードイベントを破棄します。
        $("#background-image").off('keydown');
        // マウスホイールイベントを破棄します。
        $("#background-image").off('mousewheel');
        // スライドショーを停止します。
        this.endFlg = true;
        this.changePhoto(this.type);
        // トグルメニューのイベントを破棄します。
        this.slidshowToggleMenu.destructor();
    }

    /**
     * 画像変更イベント処理です。
     * @param sec 待機秒数
     */
    public changePhoto(sec: number): void {
        if (this.resetFlg) {
            // スライドショーのリセットフラグがtrueの場合、タイマーをリセットします。
            clearInterval(this.interval);
            this.resetFlg = false;
        } else if (this.endFlg) {
            // スライドショーの終了フラグがtrueの場合、タイマーをリセットしてスライドショーを終了します。
            clearInterval(this.interval);
            this.endFlg = false;
            return;
        }
        // 初回の画像表示処理を呼び出します。
        this.changePhotoWrap();
        // 引数sec秒ごとに処理を実行します。
        this.interval = setInterval(() => {
            this.changePhotoWrap();
        }, sec * 1000);
    }

    /**
     * 画像表示処理のラッパーです。
     */
    private changePhotoWrap() {
        // 画像番号の管理
        this.countLoop();
        // 現在の画像番号を基に配列から画像オブジェクトを取り出します。
        const photo = this.photoArray[this.photoCount];
        // 画像表示エリアを一旦空にします。
        $(this.photoAreaElemet).empty();
        // 画像を背景部に設定します。
        $("#background-image").css({
            'background-image': `url(${photo.getFIlePath()})`,
        });
        // 画像表示モード毎に処理を振り分けます。
        switch (this.mode) {
            case PhotoMode.NORMAL:
                this.changeByHeight(photo);
                break;
            case PhotoMode.ZOOMOUT:
                this.changeByMoving(photo);
                break;
            case PhotoMode.SLIDEIN:
                this.changeByMoving(photo);
                break;
            default:
                // 何も処理しない
                break;
        }
        if (!this.isLock) {
            if (!this.isDefaultOrder) {
                // ランダム順ならランダムな値を返します。
                this.photoCount = Math.floor(Math.random() * this.photoArray.length);
            } else {
                // 画像番号を加算します。
                this.photoCount++;
            }
        }
    }

    /**
     * ウインドウの高さに合わせて画像を表示する処理です。
     * 本当にただ表示するだけ。
     * @param photo 画像データ
     */
    private changeByHeight(photo: PhotoData): void {
        // 画像表示エリアに画像を中央に表示するプロパティを付与します。
        $(this.photoAreaElemet).css({ "text-align": "center" });
        // 画像表示エリアの範囲を取得します。
        // JQuery型で高さなどの値を取得するとundifinedのチェックを求められるのがウザいのでHTMLElementで取得します。
        const areaHeight = this.photoAreaElemet.clientHeight;
        const areaWidth = this.photoAreaElemet.clientWidth;
        // 画像のプロパティを取得します。
        const url = photo.getFIlePath();
        // 画像の要素を作成します。
        // 画像にstyleを適用するためにphotoをclass属性に設定しています。
        const element = $('<img>').addClass('photo').attr('src', url);
        // 画像のサイズを取得します。
        const size = this.calculation(photo, areaHeight, 0);
        // 表示エリアの高さに画像を縮小して表示します。
        element.width(`${size['photoX']}px`);
        element.height(`${size['photoY']}px`);
        if (size['photoY'] < size['photoX'] && size['photoY'] < areaHeight) {
            element.css({ "margin-top": `${(areaHeight - size['photoY']) / 2}px` });
        }
        if (areaWidth < size['photoX']) {
            // 表示エリアの横幅よりも画像の横幅が大きい場合には画像の幅を基準にサイズを調整します。
            // 画像のサイズを取得します。
            const reSize = this.calculation(photo, 0, areaWidth);
            // 表示エリアの高さに画像を縮小して表示します。
            element.width(`${reSize['photoX']}px`);
            element.height(`${reSize['photoY']}px`);
            if (reSize['photoY'] < reSize['photoX'] && reSize['photoY'] < areaHeight) {
                // 上と同じ理由
                element.css({ "margin-top": `${(areaHeight - reSize['photoY']) / 2}px` });
            }
        }
        // 画像表示エリアに作成した画像要素を追加します。
        $(this.photoAreaElemet).append(element);
        // フェードインのアニメーションを追加したいのでanimation-fadeinをclass属性に追加します。
        element.addClass("animation-fadein");
        element.css({ "animation-duration": `${this.type}s` });
    }

    /**
     * 表示する画像がアニメーションする処理です。
     * @param photo 画像データ
     */
    private changeByMoving(photo: PhotoData): void {
        // 画像がposition:abusoluteになるので親要素の画像表示エリアはrelativeを設定すること
        $(this.photoAreaElemet).css({ "position": "relative" });
        // 画像表示エリアの範囲を取得します。
        const areaHeight = $(this.photoAreaElemet).height();
        const areaWidth = $(this.photoAreaElemet).width();
        // 画像のプロパティを取得します。
        const url = photo.getFIlePath();
        const photoWidth = photo.getXsize();
        const photoHeight = photo.getYsize();
        // 画像の要素を作成します。
        // 画像にstyleを適用するためにphotoをclass属性に設定しています。
        const element = $('<img>').addClass('photo').attr('src', url);
        if (photoWidth < photoHeight) {
            // 縦長画像の場合
            if (areaHeight && areaWidth) {
                // 画像のサイズを取得します。
                const size = this.calculation(photo, 0, areaWidth);
                // 画像の幅を設定します。
                element.width(`${size['photoX']}px`);
                // ランダムで遊ぶ
                const random = Math.floor(Math.random() * 11);
                if (5 < random) {
                    // ここでは下からスライドして画像全体を表示するアニメーションを設定します。
                    // 画像をアニメションするために画像のスタイルを個別に設定します。
                    element.css({
                        // 画像は絶対位置で配置します。
                        "position": "absolute",
                        // TOPを親要素の高さから画像の高さ分引いたマイナス位置に配置します。
                        // これにより親要素のbottomと画像のbottomが同じ位置になります。
                        // アニメーションによりTOPが0pxになるまで移動させるので画像が下方向にスライドして表示されます。
                        // これを思いついたときは天才かと思った。午前４時現在
                        "left": "0px",
                        "top": `${areaHeight - size['photoY']}px`,
                    });
                    // 画像を下方向にスクロールするアニメーションを付与します。
                    element.addClass("animation-moveDown");
                    element.css({ "animation-duration": this.type + "s" });
                } else {
                    // ここでは上からスライドして画像全体を表示するアニメーションを設定します。
                    // 画像をアニメションするために画像のスタイルを個別に設定します。
                    element.css({
                        // 画像は絶対位置で配置します。
                        "position": "absolute",
                        // BOTTOMを親要素の高さから画像の高さ分引いたマイナス位置に配置します。
                        // これにより親要素のtopと画像のtopが同じ位置になります。
                        // アニメーションによりBOTTOMが0pxになるまで移動させるので画像が上方向にスライドして表示されます。
                        "left": "0px",
                        "bottom": `${areaHeight - size['photoY']}px`,
                    });
                    // 画像を上方向にスクロールするアニメーションを付与します。
                    element.addClass("animation-moveUp");
                    element.css({ "animation-duration": this.type + "s" });
                }
            } else {
                // 100%でもサイズは合うがあえて数値を設定する。
                element.height(`${areaHeight}px`);
            }
        } else {
            // 横長画像の場合
            if (areaHeight && areaWidth) {
                // ここでは画像をウインドウの２倍の大きさで表示した後、等倍に縮小するアニメーションを設定します。
                // 画像のサイズを取得します。
                const size = this.calculation(photo, areaHeight * 2, 0);
                // 画像の高さを設定します。
                element.height(`${size['photoY']}px`);
                // 画像をアニメションするために画像のスタイルを個別に設定します。
                element.css({
                    // 画像は絶対位置で配置します。
                    "position": "absolute",
                    // アニメーションさせた際の原点を中央に設定します。
                    "transform-origin": "center",
                    // 親要素の中央に配置したいので計算しています。
                    // ここでのleftとtopは画像要素の左上の位置でtransform-originの原点位置ではないのに注意。
                    "left": `${(areaWidth / 2) - (size['photoX'] / 2)}px`,
                    "top": `${(areaHeight / 2) - (size['photoY'] / 2)}px`,
                });
                // 画像のサイズを1/2に縮小するアニメーションを付与する。
                element.addClass("animation-scale");
                element.css({ "animation-duration": this.type + "s" });
            } else {
                // 100%でもサイズは合うがあえて数値を設定する。
                element.height(`${areaHeight}px`);
            }
        }
        // 画像表示エリアに作成した画像要素を追加します。
        $(this.photoAreaElemet).append(element);
        // フェードインのアニメーションを追加したいのでanimation-fadeinをclass属性に追加します。
        element.addClass("animation-fadein");
        element.css({ "animation-duration": this.type + "s" });
    }

    /**
     * 画像番号を管理します。
     */
    private countLoop(): void {
        if (this.photoCount < 0) {
            // 0より小さい場合、最後尾に移動します。
            this.photoCount = this.photoArray.length - 1;
        } else if (this.photoArray.length <= this.photoCount) {
            // 範囲外ならカウントをリセットします。
            this.photoCount = 0;
        }
    }

    /**
     * 画像のサイズを計算します。
     * 設定する高さもしくは横幅に応じて、もう片方の数値を算出します。
     * @param photo 画像データ
     * @param height 画像の高さ（widthを設定する場合、0を指定してください）
     * @param width 画像の横幅（heightを設定する場合、0を指定してください）
     * @return 画像サイズを取得する連想配列
     */
    private calculation(photo: PhotoData, height: number, width: number): { [key: string]: number } {
        let size: { [key: string]: number } = {};
        if (0 < height) {
            // 高さを基に計算する場合
            size['photoY'] = height;
            const percent = height / photo.getYsize();
            size['photoX'] = photo.getXsize() * percent;
        } else if (0 < width) {
            // 横幅を基に計算する場合
            size['photoX'] = width;
            const percent = width / photo.getXsize();
            size['photoY'] = photo.getYsize() * percent;
        } else {
            // どちらも設定されている場合
            // メソッドの使い方的に例外を吐き出すべき？IllegalArgumentException的な
            size['photoY'] = height;
            size['photoX'] = width;
        }
        return size;
    }
}