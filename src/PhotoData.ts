/**
 * 画像データクラスです。
 * 画像の情報を保持します。
 */
export class PhotoData {
    /** 画像の横幅 */
    private _xSize : number;
    /** 画像の縦幅 */
    private _ySize : number;
    /** 画像の名前 */
    private _fileName: string;
    /** 画像のURL */
    private _filePath: string;

    /**
     * コンストラクターです。
     * @param file 画像ファイルオブジェクト
     * @param url 画像ファイルのURL
     */
    constructor(file : File, url : any) {
        this._xSize = 0;
        this._ySize = 0;
        // Imageを使うことで画像の詳細な情報が取得できます。
        const img = new Image();
        img.src = url;
        // 読み込んだら処理する。
        img.onload = () => {
            this._xSize = img.width;
            this._ySize = img.height;
        }
        this._fileName = file.name;
        this._filePath = url;
    }

    /*
     * 一応用意したGeterSeter
    */
    set xSize(size: number) {
        this._xSize = size;
    }
    get xSize(): number {
        return this._xSize;
    }

    set ySize(size: number) {
        this._ySize = size;
    }
    get ySize(): number {
        return this._ySize;
    }

    set filePath(path: string) {
        this._filePath = path;
    }
    get filePath(): string {
        return this._filePath;
    }

    set fileName(name: string) {
        this._fileName = name;
    }
    get fileName(): string {
        return this._fileName;
    }
}