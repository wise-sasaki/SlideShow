/**
 * MINEタイプクラスです。
 * 許容するMINEタイプを設定します。
 */
export class MimeType {
    /*
     * statc変数を使ってみた。このアプリケーションでは特に意味なし。
     */
    /** JPEG */
    public static TYPE_JPG = "image/jpeg";
    /** PNG */
    public static TYPE_PNG = "image/png";
    /** BMP */
    public static TYPE_BMP = "image/bmp";
    /** GIF */
    public static TYPE_GIF = "image/gif";

    /**
     * MINEタイプチェック処理です。
     * staticメソッド使ってみた。
     * @param type MINEタイプ
     * @return boolean 可:true,不可:false
     */
    public static isAvailable(type : string) : boolean {
        switch (type) {
            case this.TYPE_JPG:
            case this.TYPE_PNG:
            case this.TYPE_BMP:
            case this.TYPE_GIF:
                return true;
            default:
                break;
        }
        return false;
    }
}