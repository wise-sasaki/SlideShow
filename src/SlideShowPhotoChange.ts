import $ from "jquery";
import { PhotoData } from "./PhotoData";
import { PhotoMode } from "./PhotoMode";
/**
 * 画像切り替えクラスです。
 */
export class SlideShowPhotoChange {
    /** 画像表示エリアの要素 */
    private photoAreaElemet: HTMLElement;
    /** 画像データの配列 */
    private photoArray: Array<PhotoData>;
    /** 画像の表示時間です。 */
    private time: number = 5;
    /** 現在の画像番号 */
    private photoCount: number;
    /** ロックフラグ */
    private _isLock: boolean = false;
    /** 順序フラグ */
    private _isDefaultOrder: boolean = true;

    /**
     * コンストラクターです。
     */
    constructor(element: HTMLElement, array: Array<PhotoData>) {
        this.photoAreaElemet = element;
        this.photoArray = array;
        this.photoCount = 0;
    }

    /**
     * 画像表示処理のラッパーです。
     */
    public changePhoto(mode: PhotoMode, time: number) {
        /** 画像の表示時間です。 */
        this.time = time;
        // 画像番号の管理
        this.countLoop();
        // 現在の画像番号を基に配列から画像オブジェクトを取り出します。
        const photo = this.photoArray[this.photoCount];
        // 画像表示エリアを一旦空にします。
        $(this.photoAreaElemet).empty();
        // 画像を背景部に設定します。
        $("#slideshow-wrap").css({
            'background-image': `url(${photo.filePath})`,
        });
        // 画像表示モード毎に処理を振り分けます。
        switch (mode) {
            case PhotoMode.NORMAL:
                this.changeByHeight(photo);
                break;
            case PhotoMode.ZOOMOUT:
                this.changeByZoomOut(photo);
                break;
            case PhotoMode.SLIDEIN:
                this.changeBySlideIn(photo);
                break;
            default:
                // 何も処理しない
                break;
        }
        if (!this.isLock) {
            if (!this.isDefaultOrder) {
                // ランダム順ならランダムな値を返します。
                this.setCount(Math.floor(Math.random() * this.photoArray.length));
            } else {
                // 画像番号を加算します。
                this.addCount();
            }
        }
    }

    /** 画像番号加算 */
    public addCount(): void {
        this.photoCount++;
    }

    /** 画像番号減算 */
    public subCount(): void {
        this.photoCount--;
    }

    /** 画像番号設定 */
    public setCount(count: number): void {
        this.photoCount = count;
    }

    /** ロックフラグ getter */
    get isLock() {
        return this._isLock;
    }

    /** ロックフラグ setter */
    set isLock(lock: boolean) {
        this._isLock = lock;
    }

    /** 順序フラグ getter */
    get isDefaultOrder() {
        return this._isDefaultOrder;
    }

    /** 順序フラグ setter */
    set isDefaultOrder(order: boolean) {
        this._isDefaultOrder = order;
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
        const areaHeight = $(this.photoAreaElemet).height();
        const areaWidth = $(this.photoAreaElemet).width();
        // 画像のプロパティを取得します。
        const url = photo.filePath;
        // 画像の要素を作成します。
        // 画像にstyleを適用するためにphotoをclass属性に設定しています。
        const element = $('<img>').addClass('photo').attr('src', url);
        if (areaHeight && areaWidth) {
            // 画像のサイズを取得します。
            const size = this.calculation(photo, areaHeight, 0);
            // 表示エリアの高さに画像を縮小して表示します。
            element.width(`${size['photoX']}px`);
            element.height(`${size['photoY']}px`);
            if (areaWidth < size['photoX']) {
                // 表示エリアの横幅よりも画像の横幅が大きい場合には画像の幅を基準にサイズを調整します。
                // 画像のサイズを取得します。
                const reSize = this.calculation(photo, 0, areaWidth);
                // 表示エリアの高さに画像を縮小して表示します。
                element.width(`${reSize['photoX']}px`);
                element.height(`${reSize['photoY']}px`);
            }
        } else {
            // 100%でもサイズは合うがあえて数値を設定する。
            element.height(`${areaHeight}px`);
        }
        // 画像表示エリアに作成した画像要素を追加します。
        $(this.photoAreaElemet).append(element);
        // フェードインのアニメーションを追加したいのでanimation-fadeinをclass属性に追加します。
        element.addClass("animation-fadein");
        element.css({ "animation-duration": `${this.time}s` });
    }

    /**
     * 表示する画像がズームアウトアニメーションする処理です。
     * ここでは画像をウインドウの２倍の大きさで表示した後、等倍に縮小するアニメーションを設定します。
     * @param photo 画像データ
     */
    private changeByZoomOut(photo: PhotoData): void {
        // 画像がposition:abusoluteになるので親要素の画像表示エリアはrelativeを設定すること
        $(this.photoAreaElemet).css({ "position": "relative" });
        // 画像表示エリアの範囲を取得します。
        const areaHeight = $(this.photoAreaElemet).height();
        const areaWidth = $(this.photoAreaElemet).width();
        // 画像のプロパティを取得します。
        const url = photo.filePath;
        const photoWidth = photo.xSize;
        const photoHeight = photo.ySize;
        // 画像の要素を作成します。
        const element = $('<img>').addClass('photo').attr('src', url);
        if (photoWidth < photoHeight) {
            // 縦長画像の場合
            if (areaHeight && areaWidth) {
                // 画像のサイズを取得します。
                const size = this.calculation(photo, areaHeight * 2, 0);
                // 画像の幅を設定します。
                element.height(`${size['photoY']}px`);
                // 画像をアニメションするために画像のスタイルを個別に設定します。
                this.animationScale(element, (areaWidth / 2) - (size['photoX'] / 2), (areaHeight / 2) - (size['photoY'] / 2));
            } else {
                // 100%でもサイズは合うがあえて数値を設定する。
                element.height(`${areaHeight}px`);
            }
        } else {
            // 横長画像の場合
            if (areaHeight && areaWidth) {
                // 画像のサイズを取得します。
                const size = this.calculation(photo, areaHeight * 2, 0);
                // 画像の高さを設定します。
                element.height(`${size['photoY']}px`);
                // 画像をアニメションするために画像のスタイルを個別に設定します。
                this.animationScale(element, (areaWidth / 2) - (size['photoX'] / 2), (areaHeight / 2) - (size['photoY'] / 2));
            } else {
                // 100%でもサイズは合うがあえて数値を設定する。
                element.width(`${areaWidth}px`);
            }
        }
        // 画像表示エリアに作成した画像要素を追加します。
        $(this.photoAreaElemet).append(element);
        // フェードインのアニメーションを追加したいのでanimation-fadeinをclass属性に追加します。
        element.addClass("animation-fadein");
        element.css({ "animation-duration": this.time + "s" });
    }

    /**
     * 表示する画像がスライドインアニメーションする処理です。
     * @param photo 画像データ
     */
    private changeBySlideIn(photo: PhotoData): void {
        // 画像がposition:abusoluteになるので親要素の画像表示エリアはrelativeを設定すること
        $(this.photoAreaElemet).css({ "position": "relative" });
        // 画像表示エリアの範囲を取得します。
        const areaHeight = $(this.photoAreaElemet).height();
        const areaWidth = $(this.photoAreaElemet).width();
        // 画像のプロパティを取得します。
        const url = photo.filePath;
        const photoWidth = photo.xSize;
        const photoHeight = photo.ySize;
        // 画像の要素を作成します。
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
                    if (areaHeight < areaWidth) {
                        // 横長画面の場合
                        this.animationMoveDown(element, areaHeight - size['photoY']);
                    } else {
                        // 縦長画面の場合
                        if (areaHeight < size['photoY']) {
                            this.animationMoveDown(element, areaHeight - size['photoY']);
                        }
                    }
                } else {
                    // ここでは上からスライドして画像全体を表示するアニメーションを設定します。
                    // 画像をアニメションするために画像のスタイルを個別に設定します。
                    if (areaHeight < areaWidth) {
                        // 横長画面の場合
                        this.animationMoveUp(element, areaHeight - size['photoY']);
                    } else {
                        // 縦長画面の場合
                        if (areaHeight < size['photoY']) {
                            this.animationMoveUp(element, areaHeight - size['photoY']);
                        }
                    }
                }
            } else {
                // 100%でもサイズは合うがあえて数値を設定する。
                element.height(`${areaHeight}px`);
            }
        } else {
            // 横長画像の場合
            if (areaHeight && areaWidth) {
                // ランダムで遊ぶ
                const random = Math.floor(Math.random() * 11);
                if (5 < random) {
                    // ここでは左からスライドして画像全体を表示するアニメーションを設定します。
                    // 画像をアニメションするために画像のスタイルを個別に設定します。
                    if (areaHeight < areaWidth) {
                        // 横長画面の場合
                        // 画像のサイズを取得します。
                        const size = this.calculation(photo, 0, areaWidth);
                        // 画像の幅を設定します。
                        element.width(`${size['photoX']}px`);
                        this.animationMoveDown(element, areaHeight - size['photoY']);
                    } else {
                        // 縦長画面の場合
                        // 画像のサイズを取得します。
                        const size = this.calculation(photo, areaHeight, 0);
                        // 画像の高さを設定します。
                        element.height(`${size['photoY']}px`);
                        this.animationMoveRight(element, areaWidth - size['photoX']);
                    }
                } else {
                    // ここでは右からスライドして画像全体を表示するアニメーションを設定します。
                    // 画像をアニメションするために画像のスタイルを個別に設定します。
                    if (areaHeight < areaWidth) {
                        // 横長画面の場合
                        // 画像のサイズを取得します。
                        const size = this.calculation(photo, 0, areaWidth);
                        // 画像の幅を設定します。
                        element.width(`${size['photoX']}px`);
                        this.animationMoveUp(element, areaHeight - size['photoY']);
                    } else {
                        // 縦長画面の場合
                        // 画像のサイズを取得します。
                        const size = this.calculation(photo, areaHeight, 0);
                        // 画像の高さを設定します。
                        element.height(`${size['photoY']}px`);
                        this.animationMoveLeft(element, areaWidth - size['photoX']);
                    }
                }
            } else {
                // 100%でもサイズは合うがあえて数値を設定する。
                element.width(`${areaWidth}px`);
            }
        }
        // 画像表示エリアに作成した画像要素を追加します。
        $(this.photoAreaElemet).append(element);
        // フェードインのアニメーションを追加したいのでanimation-fadeinをclass属性に追加します。
        element.addClass("animation-fadein");
        element.css({ "animation-duration": this.time + "s" });
    }

    /**
     * 拡大アニメーション設定です。
     * @param element 画像要素 
     * @param rangeX 横幅の計算
     * @param rangeY 縦幅の計算
     */
    private animationScale(element: JQuery<HTMLElement>, rangeX: number, rangeY: number): void {
        element.css({
            // 画像は絶対位置で配置します。
            "position": "absolute",
            // アニメーションさせた際の原点を中央に設定します。
            "transform-origin": "center",
            // 親要素の中央に配置したいので計算しています。
            // ここでのleftとtopは画像要素の左上の位置でtransform-originの原点位置ではないのに注意。
            "left": `${rangeX}px`,
            "top": `${rangeY}px`,
        });
        // 画像のサイズを1/2に縮小するアニメーションを付与する。
        element.addClass("animation-scale");
        element.css({ "animation-duration": this.time + "s" });
    }

    /**
     * 縦移動（下方向）のアニメーション設定です。
     * @param element 画像要素 
     * @param range 縦幅の計算
     */
    private animationMoveDown(element: JQuery<HTMLElement>, range: number): void {
        element.css({
            // topを親要素の高さから画像の高さ分引いたマイナス位置に配置します。
            // これにより親要素のbottomと画像のbottomが同じ位置になります。
            // アニメーションによりtopが0pxになるまで移動させるので画像が下方向にスライドして表示されます。
            "position": "absolute",
            "left": "0px",
            "top": `${range}px`,
        });
        // 画像を下方向にスクロールするアニメーションを付与します。
        element.addClass("animation-moveDown");
        element.css({ "animation-duration": this.time + "s" });
    }

    /**
     * 縦移動（上方向）のアニメーション設定です。
     * @param element 画像要素 
     * @param range 縦幅の計算
     */
    private animationMoveUp(element: JQuery<HTMLElement>, range: number): void {
        element.css({
            // 画像は絶対位置で配置します。
            "position": "absolute",
            // bottomを親要素の高さから画像の高さ分引いたマイナス位置に配置します。
            // これにより親要素のtopと画像のtopが同じ位置になります。
            // アニメーションによりbottomが0pxになるまで移動させるので画像が上方向にスライドして表示されます。
            "left": "0px",
            "bottom": `${range}px`,
        });
        // 画像を上方向にスクロールするアニメーションを付与します。
        element.addClass("animation-moveUp");
        element.css({ "animation-duration": this.time + "s" });
    }

    /**
     * 横移動（左方向）のアニメーション設定です。
     * @param element 画像要素 
     * @param range 横幅の計算
     */
    private animationMoveLeft(element: JQuery<HTMLElement>, range: number): void {
        element.css({
            // 画像は絶対位置で配置します。
            "position": "absolute",
            // rightを親要素の幅から画像の幅分引いたマイナス位置に配置します。
            // これにより親要素のrightと画像のrightが同じ位置になります。
            // アニメーションによりrightが0pxになるまで移動させるので画像が左方向にスライドして表示されます。
            "right": `${range}px`,
            "top": `0px`,
        });
        // 画像を左方向にスクロールするアニメーションを付与します。
        element.addClass("animation-moveLeft");
        element.css({ "animation-duration": this.time + "s" });
    }

    /**
     * 横移動（右方向）のアニメーション設定です。
     * @param element 画像要素 
     * @param range 横幅の計算
     */
    private animationMoveRight(element: JQuery<HTMLElement>, range: number): void {
        element.css({
            // leftを親要素の幅から画像の幅分引いたマイナス位置に配置します。
            // これにより親要素のrightと画像のrightが同じ位置になります。
            // アニメーションによりleftが0pxになるまで移動させるので画像が右方向にスライドして表示されます。
            "position": "absolute",
            "left": `${range}px`,
            "top": `0px`,
        });
        // 画像を右方向にスクロールするアニメーションを付与します。
        element.addClass("animation-moveRight");
        element.css({ "animation-duration": this.time + "s" });
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
            const percent = height / photo.ySize;
            size['photoX'] = photo.xSize * percent;
        } else if (0 < width) {
            // 横幅を基に計算する場合
            size['photoX'] = width;
            const percent = width / photo.xSize;
            size['photoY'] = photo.ySize * percent;
        } else {
            // どちらも設定されている場合
            throw Error("Either argument should be 0. height or width");
        }
        return size;
    }
}