import { PhotoData } from "./PhotoData";
import { SsToggleMenu } from "./SsToggleMenu";
import { SsPhotoChange } from "./SsPhotoChange";
import { SsStatus } from "./SsStatus";

/**
 * スライドショー管理クラスです。
 */
export class SlideShowManager {
    /** トグルメニュークラス */
    private toggleMenu: SsToggleMenu;
    /** 画像表示切り替えクラス */
    private change: SsPhotoChange;

    /**
     * コンストラクターです。
     * @param element 画像表示エリアの要素
     * @param array 画像データ一覧
     */
    constructor(element: HTMLElement, array: Array<PhotoData>) {
        // メンバ変数の初期化をします。
        this.toggleMenu = new SsToggleMenu(this);
        this.change = new SsPhotoChange(element, array);
        this._addEventListener();
    }

    /**
     * イベント登録処理です。
     */
    private _addEventListener(): void {
        // 再生ボタン押下時にイベント登録。
        $('#play').on('click', () => {
            this.changePhoto(SsStatus.time);
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
            if (!SsStatus.isLock) {
                SsStatus.subCount();
                SsStatus.subCount();
                SsStatus.reset();
                this.changePhoto(SsStatus.time);
            }
        });
        // 表示切り替えボタン次が押されたら画像番号を次の画像に変更します。
        $('#right-button').on('click', () => {
            if (!SsStatus.isLock) {
                SsStatus.reset();
                this.changePhoto(SsStatus.time);
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
                if (!SsStatus.isLock) {
                    SsStatus.subCount();
                    SsStatus.subCount();
                    // 画像変更
                    SsStatus.reset();
                    this.changePhoto(SsStatus.time);
                }
            } else if (e.key === 'ArrowRight') {
                // 押されたキーが→キーの場合
                if (!SsStatus.isLock) {
                    // 画像変更
                    SsStatus.reset();
                    this.changePhoto(SsStatus.time);
                }
            } else if (e.key === 'ArrowDown') {
                //  押されたキーが↓キーの場合(隠し要素)
                SsStatus.isLock = SsStatus.isLock ? false : true;
                if (SsStatus.isLock) {
                    // ロック中のアイコンを作成する。
                    const lockDiv = document.createElement('div');
                    lockDiv.id = "lock";
                    lockDiv.classList.add('locked');
                    lockDiv.innerText = "Locked";
                    $('#file-area').append(lockDiv);
                } else {
                    $('#lock').remove();
                    // 画像変更
                    SsStatus.reset();
                    this.changePhoto(SsStatus.time);
                }
            }
        });
    }

    /**
     * マウスホイール操作の登録
     */
    private addMousewheelEventListener(): void {
        $("#slideshow-wrap").on('mousewheel', (ev: any) => {
            if (ev.originalEvent.wheelDelta > 0) {
                // マウスホイールを上に回した場合
                if (!SsStatus.isLock) {
                    SsStatus.subCount();
                    SsStatus.subCount();
                    // 画像変更
                    SsStatus.reset();
                    this.changePhoto(SsStatus.time);
                }
            } else {
                // マウスホイールを下に回した場合
                if (!SsStatus.isLock) {
                    // 画像変更
                    SsStatus.reset();
                    this.changePhoto(SsStatus.time);
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
        $('#right-button').off('click');
        // キーボードイベントを破棄します。
        $("#slideshow-wrap").off('keydown');
        // マウスホイールイベントを破棄します。
        $("#slideshow-wrap").off('mousewheel');
        // スライドショーを停止します。
        SsStatus.endFlg = true;
        this.changePhoto(SsStatus.time);
        // トグルメニューのイベントを破棄します。
        this.toggleMenu.destructor();
    }

    /**
     * 画像変更イベント処理です。
     * @param sec 待機秒数
     */
    public changePhoto(sec: number): void {
        $('div.explanation').hide(); // 説明表示を非表示にする
        if (SsStatus.resetFlg) {
            // スライドショーのリセットフラグがtrueの場合、タイマーをリセットします。
            clearInterval(SsStatus.interval);
            SsStatus.interval = null;
            SsStatus.resetFlg = false;
        } else if (SsStatus.endFlg) {
            // スライドショーの終了フラグがtrueの場合、タイマーをリセットしてスライドショーを終了します。
            clearInterval(SsStatus.interval);
            SsStatus.interval = null;
            SsStatus.endFlg = false;
            return;
        }
        // 初回の画像表示処理を呼び出します。
        this.change.changePhoto(SsStatus.mode, sec);
        // 引数sec秒ごとに処理を実行します。
        SsStatus.interval = setInterval(() => {
            this.change.changePhoto(SsStatus.mode, sec);
        }, sec * 1000);
    }

    /**
     * 画像の表示順序を変更する。
     * @param order 
     */
    public changeOrder(order: boolean) {
        SsStatus.isDefaultOrder = order;
    }
}