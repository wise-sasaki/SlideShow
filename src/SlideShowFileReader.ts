import { MimeType } from "./MimeType";
import { PhotoData } from "./PhotoData";
import { SlideShowManager } from "./SlideShowManager";

/**
 * ファイル読み込み機能クラスです。
 * 画像ファイルだけを取り出して、後続処理で使いやすいように整理しています。
 * 非同期処理なのでこのクラスからスライドショー管理クラスを呼び出しています。fuck
 */
export class SlideShowFileReader {

    /** スライドショー管理クラス */
    private slideShowManager: SlideShowManager | null;
    /** ファイルダイアログの要素 */
    private fileElement: HTMLElement;
    /** 画像表示エリアの要素 */
    private photoAreaElement: HTMLElement;
    /** 画像データの配列 */
    private photoArray: Array<PhotoData>;

    /**
     * コンストラクターです。
     * @param file ファイルダイアログの要素
     * @param photo 画像表示エリアの要素
     */
    constructor(file: HTMLElement, photo: HTMLElement) {
        // メンバ変数の初期化をします。
        this.slideShowManager = null;
        this.fileElement = file;
        this.photoAreaElement = photo;
        this.photoArray = new Array<PhotoData>();
        this._addEventListener();
    }

    /**
     * イベントの登録処理です。
     */
    private _addEventListener(): void {
        // ファイルダイアログ部品に変更があった場合にファイルを読み込みます。
        $(this.fileElement).on('change', async (ev) => {
            // ファイルを読み込みます。
            await this.readFiles(ev);
            // 全ファイルの処理が終わったらスライドショーを実行します。
            this.slideShowManager = new SlideShowManager(this.photoAreaElement, this.photoArray);
        });
    }

    /**
     * ファイル読み込み処理です。
     * ファイルダイアログで取得できたファイルを画像ファイルだけPhotoDataとして保持します。
     * @param ev changeイベント
     */
    private async readFiles(ev: JQuery.ChangeEvent): Promise<void> {
        if (this.slideShowManager != null) {
            // ファイル読み込みが行なわれた際、前回のオブジェクトからイベントリスナーを破棄します。
            this.slideShowManager.destructor();
        }
        // 画像データを初期化します。Arrayは配列でジェネリクスを使って型を指定します。
        this.photoArray = new Array<PhotoData>();
        // プログレスバーの要素を取得します。
        const meter = $("#meter");
        const meterText = $("#meter-text");
        const fileMax = ev.target.files.length;
        let fileCount = 0;
        // ファイルダイアログから取得できた分だけ処理をループします。
        // HTMLElementのeventからev.target.filesでファイルを読み取れます。
        for (let i = 0; i < ev.target.files.length; i++) {
            // constは再代入しない場合に、letは再代入しない場合に使います。
            const file = ev.target.files[i];
            if (!MimeType.isAvailable(file.type)) {
                // 欲しいのは画像なのでMimeTypeで指定しているMINEタイプのみ処理します。
                console.log("Error:" + file.name + " is " + file.type ? file.type : 'not found');
                // fileCountを加算します。
                fileCount++;
                continue;
            }
            // FileReaderを使います。
            const fileReader = new FileReader();
            // readAsDataURLを使うとresultで画像のURLが取得できます。
            fileReader.readAsDataURL(file);
            // FileReaderの読み込みを待って処理します。
            fileReader.onload = async () => {
                const url = fileReader.result;
                // const result = await analyze(url);
                // 画像データを保持するオブジェクトを作成します。
                const photo = new PhotoData(file, url);
                // 画像データの配列に追加します。
                this.photoArray.push(photo);
                // 画像データを名前順にソートします。
                this.fileSort(this.photoArray);
                // fileCountを加算します。
                fileCount++;
                // プログレスバーに値を設定します。
                meter.val(fileCount / fileMax * 100);
                meterText.text(`${fileCount} / ${fileMax} Complete`);
            }
        }
    }

    /**
     * 画像データのソートを行ないまいます。
     * @param array 画像データの配列
     */
    private fileSort(array: PhotoData[]): void {
        array.sort(this.compareName);
    }

    /**
     * 名前順で画像データの並び替えを行ないます。
     * @param a 比較するデータ１
     * @param b 比較するデータ２
     */
    private compareName(a: PhotoData, b: PhotoData): number {
        if (a.getFileName() > b.getFileName()) {
            return 1;
        } else {
            return -1;
        }
    }

    /**
     * 画像データ取得処理です。
     * 使っていません。
     */
    public getPhotData(): Array<PhotoData> {
        return this.photoArray;
    }
}