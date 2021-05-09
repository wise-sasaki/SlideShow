/**
 * 画像データクラスです。
 * 画像の情報を保持します。
 */
export class PhotoData {
    /** 画像の横幅 */
    private x_size : number;
    /** 画像の縦幅 */
    private y_size : number;
    /** 画像の名前 */
    private file_name: string;
    /** 画像のURL */
    private file_path: string;

    /**
     * コンストラクターです。
     * @param file 画像ファイルオブジェクト
     * @param url 画像ファイルのURL
     */
    constructor(file : File, url : any) {
        this.x_size = 0;
        this.y_size = 0;
        // Imageを使うことで画像の詳細な情報が取得できます。
        const img = new Image();
        img.src = url;
        // 読み込んだら処理する。
        img.onload = () => {
            this.x_size = img.width;
            this.y_size = img.height;
        }
        this.file_name = file.name;
        this.file_path = url;
    }

    /*
     * 一応用意したGeterSeter
    */
    public setXsize(size: number): void {
        this.x_size = size;
    }
    public getXsize(): number {
        return this.x_size;
    }

    public setYsize(size: number): void {
        this.y_size = size;
    }
    public getYsize(): number {
        return this.y_size;
    }

    public setFilePath(path: string): void {
        this.file_path = path;
    }
    public getFIlePath(): string {
        return this.file_path;
    }

    public setFileName(name: string): void {
        this.file_name = name;
    }
    public getFileName(): string {
        return this.file_name;
    }
}