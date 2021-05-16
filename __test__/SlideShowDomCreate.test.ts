import $ from "jquery";
import { SlideShowDomCreate } from '../src/SlideShowDomCreate';
describe('SlideShowDomCreate', () => {
    // 検証用DOMを作成
    const dom =　'<div id="slideshow-wrap" class="background-image">'
    + '<div id="file-area">'
    + '<div class="file-area-item">'
    + '<input webkitdirectory="" multiple="" id="file" type="file" title="読み込んだファイルは、サーバーにアップロードされません。">'
    + '</div>'
    + '<div class="file-area-item">'
    + '<button id="play" title="再生ボタン"><span class="ui-icon ui-icon-play"></span></button>'
    + '<progress id="meter" max="100" value="0"></progress>'
    + '</div>'
    + '<div class="file-area-item">'
    + '<label id="meter-text" for="meter"></label>'
    + '</div>'
    + '<hr class="line">'
    + '</div>'
    + '<div class="setting-area">'
    + '<button id="setting" title="設定ボタン"><span class="ui-icon ui-icon-gear"></span></button>'
    + '</div>'
    + '<div id="display-area">'
    + '<div class="explanation">'
    + '&lt;説明&gt;<br>'
    + '画像ファイルをスライドショーの様に順番に表示するアプリケーションです。<br>'
    + '右上の設定ボタンから表示方法、表示時間の変更ができます。<br>'
    + '読み込んだファイルは、サーバーにアップロードされません。<br>'
    + 'スマートフォンからもご利用頂けます。<br>'
    + '<br>'
    + '&lt;explanation&gt;<br>'
    + 'It is an application that displays image files in order like a slide show.<br>'
    + 'You can change the display method and display time from the setting button in the upper right.<br>'
    + 'The loaded file is not uploaded to the server.<br>'
    + 'It can also be used from a smartphone.<br>'
    + '</div>'
    + '<div id="left-side" class="hidden-area">'
    + '<div id="left-button" class="change-button button-left"></div>'
    + '</div>'
    + '<div id="right-side" class="hidden-area">'
    + '<div id="right-button" class="change-button button-right"></div>'
    + '</div>'
    + '<div id="photo-area"></div>'
    + '</div>'
    + '</div>';
    describe('DOM test', () => {
        test('No1 => スライドショーのDOM構成を検証', () => {
            new SlideShowDomCreate();
            const html = $('body')[0].innerHTML;
            expect(html).toBe(dom);
        });
    });
});