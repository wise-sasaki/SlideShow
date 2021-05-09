import { SlideShowManager } from "./SlideShowManager";
import { PhotoMode } from "./PhotoMode";
/**
 * トグルメニュー作成クラスです。
 */
export class SlidshowToggleMenu {
    /** スライドショー管理クラス */
    private slideShowManager: SlideShowManager;

    /**
     * コンストラクターです。
     * @param element 画像表示エリアの要素
     */
    constructor(slideShowManager: SlideShowManager) {
        // メンバ変数の初期化をします。
        this.slideShowManager = slideShowManager;
        // トグルメニューを作成します。
        this.menuInit();
        // イベント登録します。
        this.addTogglemenuEventListener();
    }

    /**
     * トグルメニューの作成
     */
    private menuInit(): void {
        // トグルメニュー外枠作成
        const menuDiv = $('<div></div>');
        menuDiv.attr({
            id: "contextmenu",
            class: "menu"
        });
        // トグルメニュータイトル
        const titleDiv = $('<div></div>');
        titleDiv.attr("id", "menu-title");
        titleDiv.text("Settings");
        menuDiv.append(titleDiv);
        const hr = $('<hr>');
        menuDiv.append(hr);
        // モード
        const modeDiv = $('<div></div>');
        modeDiv.attr("id", "mode");
        // モードタイトル
        const modeTitleDiv = $('<div></div>');
        modeTitleDiv.attr({ id: "menu-subtitle", class: "menu-subtitle" });
        modeTitleDiv.text("Mode:");
        modeDiv.append(modeTitleDiv);
        // モード「通常」項目作成
        const normalDiv = $('<div></div>');
        normalDiv.attr({ id: "normal-mode", class: "menu-item" });
        const normalRadio = $('<input/>');
        normalRadio.attr({
            id: "normal",
            type: "radio",
            name: "mode",
        });
        normalRadio.prop("checked", true);
        normalDiv.append(normalRadio);
        const normalLabel = $('<label></label>');
        normalLabel.attr("for", "normal");
        normalLabel.text("Normal");
        normalDiv.append(normalLabel);
        modeDiv.append(normalDiv);
        // モード「ズームアウト」項目作成
        const zoomoutDiv = $('<div></div>');
        zoomoutDiv.attr({ id: "zoomout-mode", class: "menu-item" });
        const zoomoutRadio = $('<input/>');
        zoomoutRadio.attr({
            id: "zoomout",
            type: "radio",
            name: "mode",
        });
        zoomoutDiv.append(zoomoutRadio);
        const zoomoutLabel = $('<label></label>');
        zoomoutLabel.attr("for", "zoomout");
        zoomoutLabel.text("ZoomOut");
        zoomoutDiv.append(zoomoutLabel);
        modeDiv.append(zoomoutDiv);
        // モード「スライドイン」項目作成
        const slideinDiv = $('<div></div>');
        slideinDiv.attr({ id: "slidein-mode", class: "menu-item" });
        const slideinRadio = $('<input/>');
        slideinRadio.attr({
            id: "slidein",
            type: "radio",
            name: "mode",
        });
        slideinDiv.append(slideinRadio);
        const slideinLabel = $('<label></label>');
        slideinLabel.attr("for", "slidein");
        slideinLabel.text("SlideIn");
        slideinDiv.append(slideinLabel);
        modeDiv.append(slideinDiv);
        menuDiv.append(modeDiv);
        // 時間
        const timeDiv = $('<div></div>');
        timeDiv.attr("id", "time");
        // 時間タイトル
        const timeTitleDiv = $('<div></div>');
        timeTitleDiv.attr({ id: "time-subtitle", class: "menu-subtitle" });
        timeTitleDiv.text("Time:");
        timeDiv.append(timeTitleDiv);
        //「３秒」項目作成
        const sec3Div = $('<div></div>');
        sec3Div.attr({ id: "sec3-time", class: "menu-item" });
        const sec3Radio = $('<input/>');
        sec3Radio.attr({
            id: "sec3",
            type: "radio",
            name: "time",
        });
        sec3Div.append(sec3Radio);
        const sec3Label = $('<label></label>');
        sec3Label.attr("for", "sec3");
        sec3Label.text("3s");
        sec3Div.append(sec3Label);
        timeDiv.append(sec3Div);
        //「５秒」項目作成
        const sec5Div = $('<div></div>');
        sec5Div.attr({ id: "sec5-time", class: "menu-item" });
        const sec5Radio = $('<input/>');
        sec5Radio.attr({
            id: "sec5",
            type: "radio",
            name: "time",
        });
        sec5Radio.prop("checked", true);
        sec5Div.append(sec5Radio);
        const sec5Label = $('<label></label>');
        sec5Label.attr("for", "sec5");
        sec5Label.text("5s");
        sec5Div.append(sec5Label);
        timeDiv.append(sec5Div);
        //「１０秒」項目作成
        const sec10Div = $('<div></div>');
        sec10Div.attr({ id: "sec10-time", class: "menu-item" });
        const sec10Radio = $('<input/>');
        sec10Radio.attr({
            id: "sec10",
            type: "radio",
            name: "time",
        });
        sec10Div.append(sec10Radio);
        const sec10Label = $('<label></label>');
        sec10Label.attr("for", "sec10");
        sec10Label.text("10s");
        sec10Div.append(sec10Label);
        timeDiv.append(sec10Div);
        menuDiv.append(timeDiv);
        // 順番
        const orderDiv = $('<div></div>');
        orderDiv.attr("id", "order");
        // 順番タイトル
        const orderTitleDiv = $('<div></div>');
        orderTitleDiv.attr({ id: "order-subtitle", class: "menu-subtitle" });
        orderTitleDiv.text("Order:");
        orderDiv.append(orderTitleDiv);
        // 「名前順」項目作成
        const defaultOrderDiv = $('<div></div>');
        defaultOrderDiv.attr({ id: "default-order", class: "menu-item" });
        const defaultOrderRadio = $('<input/>');
        defaultOrderRadio.attr({
            id: "default",
            type: "radio",
            name: "order",
        });
        defaultOrderRadio.prop("checked", true);
        defaultOrderDiv.append(defaultOrderRadio);
        const defaultOrderLabel = $('<label></label>');
        defaultOrderLabel.attr("for", "default");
        defaultOrderLabel.text("ByName");
        defaultOrderDiv.append(defaultOrderLabel);
        orderDiv.append(defaultOrderDiv);
        // 「ランダム順」項目作成
        const randomOrderDiv = $('<div></div>');
        randomOrderDiv.attr({ id: "random-order", class: "menu-item" });
        const randomOrderRadio = $('<input/>');
        randomOrderRadio.attr({
            id: "random",
            type: "radio",
            name: "order",
        });
        randomOrderDiv.append(randomOrderRadio);
        const randomOrderLabel = $('<label></label>');
        randomOrderLabel.attr("for", "random");
        randomOrderLabel.text("ByRandom");
        randomOrderDiv.append(randomOrderLabel);
        orderDiv.append(randomOrderDiv);
        menuDiv.append(orderDiv);
        // 画像表示エリアの親要素に追加
        $('.setting-area').append(menuDiv);
    }

    /**
     * トグルメニューの登録
     */
    private addTogglemenuEventListener(): void {
        $('#setting').on('click', () => {
            $('#contextmenu').slideToggle();
            $('#contextmenu').toggleClass('active');
            // 「通常」が押されたら表示モードを通常に変更
            this.modeAddEvent($("#normal"), PhotoMode.NORMAL);

            // 「ズームアウト」が押されたら表示モードを効果に変更
            this.modeAddEvent($("#zoomout"), PhotoMode.ZOOMOUT);

            // 「スライドイン」が押されたら表示モードを効果に変更
            this.modeAddEvent($("#slidein"), PhotoMode.SLIDEIN);

            // 「３秒」が押されたら表示時間を３秒に変更
            this.typeAddEvent($("#sec3"), 3);

            // 「５秒」が押されたら表示時間を５秒に変更
            this.typeAddEvent($("#sec5"), 5);

            // 「１０秒」が押されたら表示時間を１０秒に変更
            this.typeAddEvent($("#sec10"), 10);

            // 「名前順」が押されたら表示順を通常順に変更
            this.orderAddEvent($("#default"), true);

            // 「ランダム順」が押されたら表示順をランダム順に変更
            this.orderAddEvent($("#random"), false);
        });
    }

    /**
     * オブジェクトの破棄時にListenerも破棄する。
     */
    public destructor(): void {
        $('#setting').off('click');
        $("#zoomout").off('change');
        $("#slidein").off('change');
        $("#sec3").off('change');
        $("#sec5").off('change');
        $("#sec10").off('change');
        $("#default").off('change');
        $("#random").off('change');
    }

    /**
     * トグルメニューの項目に画像表示モード切り替えイベントを登録します。
     * @param $elem 対象の要素
     * @param mode 画像表示モード
     */
    private modeAddEvent($elem: JQuery, mode: PhotoMode): void {
        // 自分自身の要素にchangeイベントを登録します。
        $elem.on('change', () => {
            this.slideShowManager.mode = mode;
        });
    }

    /**
     * トグルメニューの項目に表示秒数切り替えイベントを登録します。
     * @param $elem 対象の要素
     * @param sec 秒数
     */
    private typeAddEvent($elem: JQuery, sec: number): void {
        // 自分自身の要素にchangeイベントを登録します。
        $elem.on('change', () => {
            this.slideShowManager.type = sec;
            this.slideShowManager.resetFlg = true;
            this.slideShowManager.changePhoto(this.slideShowManager.type);
        });
    }

    /**
     * トグルメニューの項目に表示順切り替えイベントを登録します。
     * @param $elem 対象の要素
     * @param flg 切り替えフラグtrue:通常順 false:ランダム順 
     */
    private orderAddEvent($elem: JQuery, flg: boolean): void {
        // 自分自身の要素にchangeイベントを登録します。
        $elem.on('change', () => {
            this.slideShowManager.isDefaultOrder = flg;
        });
    }
}