/**
 * トグルメニュー作成クラスです。
 */
export class SsDomCreate {

    /**
     * コンストラクターです。
     */
    constructor() {
        this.createDom();
    }

    /**
     * DOMを作成する。
     */
    private createDom(): void {
        const element = $("#slideshow-wrap")[0];
        if (!element) {
            // スライドショー表示エリア作成
            const slideshowWrap = $("<div></div>");
            slideshowWrap.attr({ id: "slideshow-wrap", class: "background-image" });

            // ファイル管理エリア
            const fileArea = $("<div></div>");
            fileArea.attr({ id: "file-area" });
            // ファイルダイアログエリア
            const fileAreaItem1 = $("<div></div>");
            fileAreaItem1.attr({ class: "file-area-item" });
            const fileDialog = $("<input webkitdirectory multiple />");
            fileDialog.attr({
                id: "file",
                type: "file",
                title: "読み込んだファイルは、サーバーにアップロードされません。",
            });
            fileAreaItem1.append(fileDialog);
            fileArea.append(fileAreaItem1);
            // 再生ボタン＆プログレスバーエリア
            const fileAreaItem2 = $("<div></div>");
            fileAreaItem2.attr({ class: "file-area-item" });
            const playButton = $("<button></button>");
            playButton.attr({ id: "play", title: "再生ボタン" });
            const buttonIcon = $("<span></span>");
            buttonIcon.attr({ class: "ui-icon ui-icon-play" });
            playButton.append(buttonIcon);
            fileAreaItem2.append(playButton);
            fileArea.append(fileAreaItem2);
            // 間仕切り用
            const hr = $("<hr>");
            hr.attr({ class: "line" });
            fileArea.append(hr);
            slideshowWrap.append(fileArea);

            // 設定エリア
            const settingArea = $("<div></div>");
            settingArea.attr({ class: "setting-area" });
            const settingButton = $("<button></button>");
            settingButton.attr({ id: "setting", title: "設定ボタン" });
            const settingButtonIcon = $("<span></span>");
            settingButtonIcon.attr({ class: "ui-icon ui-icon-gear" });
            settingButton.append(settingButtonIcon);
            settingArea.append(settingButton);
            slideshowWrap.append(settingArea);

            // 表示管理エリア
            const displayArea = $("<div></div>");
            displayArea.attr({ id: "display-area" });
            const explanationText = $("<div></div>");
            explanationText.attr({ class: "explanation" });
            explanationText.html("&lt;説明&gt;<br />"
                + "画像ファイルをスライドショーの様に順番に表示するアプリケーションです。<br />"
                + "右上の設定ボタンから表示方法、表示時間の変更ができます。<br />"
                + "読み込んだファイルは、サーバーにアップロードされません。<br />"
                + "スマートフォンからもご利用頂けます。<br />"
                + "<br />"
                + "&lt;explanation&gt;<br />"
                + "It is an application that displays image files in order like a slide show.<br />"
                + "You can change the display method and display time from the setting button in the upper right.<br />"
                + "The loaded file is not uploaded to the server.<br />"
                + "It can also be used from a smartphone.<br />");
            displayArea.append(explanationText);
            const leftButtonDiv = $("<div></div>");
            leftButtonDiv.attr({ id: "left-side", class: "hidden-area" });
            const leftButton = $("<div></div>");
            leftButton.attr({ id: "left-button", class: "change-button button-left" });
            leftButtonDiv.append(leftButton);
            displayArea.append(leftButtonDiv);
            const rightButtonDiv = $("<div></div>");
            rightButtonDiv.attr({ id: "right-side", class: "hidden-area" });
            const rightButton = $("<div></div>");
            rightButton.attr({ id: "right-button", class: "change-button button-right" });
            rightButtonDiv.append(rightButton);
            displayArea.append(rightButtonDiv);
            // 画像表示エリア
            const photoArea = $("<div></div>");
            photoArea.attr({ id: "photo-area" });
            displayArea.append(photoArea);
            slideshowWrap.append(displayArea);
            $('body').append(slideshowWrap);
        }
    }
}