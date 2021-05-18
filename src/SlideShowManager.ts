import { PhotoData } from "./PhotoData";
import { PhotoMode } from "./PhotoMode";
import { SlideShowToggleMenu } from "./SlideShowToggleMenu";
import { SlideShowPhotoChange } from "./SlideShowPhotoChange";

/**
 * スライドショー管理クラスです。
 */
export class SlideShowManager {
    /** トグルメニュークラス */
    private toggleMenu: SlideShowToggleMenu;
    /** 画像表示切り替えクラス */
    public change: SlideShowPhotoChange;

    /** インターバル処理 */
    private interval: any = null;
    /** スライドショーのリセットフラグ */
    public resetFlg = false;
    /** スライドショーの終了フラグ */
    private endFlg = false;
    /** 画像の表示モードです。 */
    public mode: PhotoMode = PhotoMode.NORMAL;
    /** 画像の表示時間です。 */
    public time: number = 5;


    /**
     * コンストラクターです。
     * @param element 画像表示エリアの要素
     * @param array 画像データ一覧
     */
    constructor(element: HTMLElement, array: Array<PhotoData>) {
        // メンバ変数の初期化をします。
        this.toggleMenu = new SlideShowToggleMenu(this);
        this.change = new SlideShowPhotoChange(element, array);
        this._addEventListener();
    }

    /**
     * イベント登録処理です。
     */
    private _addEventListener(): void {
        // 再生ボタン押下時にイベント登録。
        $('#play').on('click', () => {
            $('div.explanation').hide();
            this.changePhoto(this.time);
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
        $('#left-button').on('click', () => {
            if (!this.change.isLock) {
                this.change.subCount();
                this.change.subCount();
                this.resetFlg = true;
                this.changePhoto(this.time);
            }
        });
        // 表示切り替えボタン次が押されたら画像番号を次の画像に変更します。
        $('#right-button').on('click', () => {
            if (!this.change.isLock) {
                this.resetFlg = true;
                this.changePhoto(this.time);
            }
        });
    }

    /**
     * キーボード操作イベント登録
     */
    private addKeybordEventListener(): void {
        $("#slideshow-wrap").on('keydown', (e: JQuery.KeyDownEvent) => {
            if (e.key === 'ArrowLeft') {
                // 押されたキーが←キーの場合
                if (!this.change.isLock) {
                    this.change.subCount();
                    this.change.subCount();
                    // 画像変更
                    this.resetFlg = true;
                    this.changePhoto(this.time);
                }
            } else if (e.key === 'ArrowRight') {
                // 押されたキーが→キーの場合
                if (!this.change.isLock) {
                    // 画像変更
                    this.resetFlg = true;
                    this.changePhoto(this.time);
                }
            } else if (e.key === 'ArrowDown') {
                //  押されたキーが↓キーの場合(隠し要素)
                this.change.isLock = this.change.isLock ? false : true;
                if (this.change.isLock) {
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
                    this.changePhoto(this.time);
                }
            }
        });
    }

    /**
     * マウスホイール操作の登録
     */
    private addMousewheelEventListener(): void {
        $("#slideshow-wrap").on('mousewheel', (ev: any) => {
            if (ev.wheelDelta > 0) {
                // マウスホイールを上に回した場合
                if (!this.change.isLock) {
                    this.change.subCount();
                    this.change.subCount();
                    // 画像変更
                    this.resetFlg = true;
                    this.changePhoto(this.time);
                }
            } else {
                // マウスホイールを下に回した場合
                if (!this.change.isLock) {
                    // 画像変更
                    this.resetFlg = true;
                    this.changePhoto(this.time);
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
        $("#slideshow-wrap").off('keydown');
        // マウスホイールイベントを破棄します。
        $("#slideshow-wrap").off('mousewheel');
        // スライドショーを停止します。
        this.endFlg = true;
        this.changePhoto(this.time);
        // トグルメニューのイベントを破棄します。
        this.toggleMenu.destructor();
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
        this.change.changePhoto(this.mode, sec);
        // 引数sec秒ごとに処理を実行します。
        this.interval = setInterval(() => {
            this.change.changePhoto(this.mode, sec);
        }, sec * 1000);
    }
}