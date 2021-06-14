/**
 * プログレスバー機能クラスです。
 */
export class SsProgressBar {
    /** 画像表示エリア */
    private $photoElement: JQuery;

    /**
     * コンストラクターです。
     * @param photo 画像表示エリア
     */
    constructor(photo: HTMLElement) {
        this.$photoElement = $(photo);
        this._meterDomCreate();
        this.hide();
    }

    /**
     * プログレスバーエリアを作成します。
     */
    private _meterDomCreate(): void {
        // プログレスバーエリア
        const progressBarArea = $("<div></div>");
        progressBarArea.attr({ id: "progress-bar-area" });
        const progress = $("<progress></progress>");
        progress.attr({ id: "meter", max: "100", value: "0" });
        progressBarArea.append(progress);
        const meterText = $("<label></label>");
        meterText.attr({ id: "meter-text", for: "meter" });
        progressBarArea.append(meterText);
        this.$photoElement.append(progressBarArea);
    }

    /**
     * プログレスバーを非表示にします。
     */
    public hide(): void {
        $("#progress-bar-area").hide();
    }

    /**
     * プログレスバーを表示します。
     */
    public show(): void {
        $("#progress-bar-area").show();
    }

    /**
     * プログレスバーの値を設定する。
    */
    public value(value: number): void {
        $("#meter").val(value);
    }

    /**
     * プログレスバーのテキストを設定する。
    */
    public text(text: string): void {
        $("#meter-text").text(text);
    }
}