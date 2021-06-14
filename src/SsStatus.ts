import { PhotoMode } from "./PhotoMode";
export class SsStatus {

    /** インターバル処理 */
    private static _interval: any = null;
    /** スライドショーのリセットフラグ */
    private static _resetFlg = false;
    /** スライドショーの終了フラグ */
    private static _endFlg = false;
    /** 画像の表示モードです。 */
    private static _mode: PhotoMode = PhotoMode.NORMAL;
    /** 画像の表示時間です。 */
    private static _time: number = 5;
    /** 現在の画像番号 */
    private static _photoCount: number;
    /** ロックフラグ */
    private static _isLock: boolean = false;
    /** 順序フラグ */
    private static _isDefaultOrder: boolean = true;


    /**
     * インターバルをセットする。
     */
    static set interval(interval: any) {
        this._interval = interval;
    }

    /**
     * インターバルを返却する。
     */
    static get interval(): any {
        return this._interval;
    }

    /**
     * スライドショーをリセットする。
     */
    public static reset() {
        this._resetFlg = true;
    }

    /**
     * スライドショーを取得する。
     */
    static get resetFlg(): boolean {
        return this._resetFlg;
    }

    /**
     * スライドショーを取得する。
     */
    static set resetFlg(resetFlg: boolean) {
        this._resetFlg = resetFlg;
    }

    /**
     * 表示モードを取得する。
     * @param mode 
     */
    static get mode(): PhotoMode {
        return this._mode;
    }

    /**
     * 表示モードを変更する。
     * @param mode 
     */
    static set mode(mode: PhotoMode) {
        this._mode = mode;
    }

    /**
     * 終了フラグを取得する。
     * @param endFlg 
     */
    static get endFlg(): boolean {
        return this._endFlg;
    }

    /**
     * 終了フラグを変更する。
     * @param endFlg 
     */
    static set endFlg(endFlg: boolean) {
        this._endFlg = endFlg;
    }

    /**
     * 表示時間を取得する。
     */
    static get time() {
        return this._time;
    }

    /**
     * 表示時間を設定する。
     */
    static set time(time: number) {
        this._time = time;
    }
    
    /** 画像番号加算 */
    public static addCount(): void {
        this._photoCount++;
    }

    /** 画像番号減算 */
    public static subCount(): void {
        this._photoCount--;
    }

    /** 画像番号設定 */
    static get photoCount(): number {
        return this._photoCount;
    }

    /** 画像番号設定 */
    static set photoCount(count: number) {
        this._photoCount = count;
    }

    /** ロックフラグ getter */
    static get isLock() {
        return this._isLock;
    }

    /** ロックフラグ setter */
    static set isLock(lock: boolean) {
        this._isLock = lock;
    }

    /** 順序フラグ getter */
    static get isDefaultOrder() {
        return this._isDefaultOrder;
    }

    /** 順序フラグ setter */
    static set isDefaultOrder(order: boolean) {
        this._isDefaultOrder = order;
    }

}