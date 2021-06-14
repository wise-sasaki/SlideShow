import $ from "jquery";
import { SsPlayButton } from '../src/SsPlayButton';
describe('SlideShowPlayButton', () => {
    let slideShowPlayButton = null;
    beforeEach(() => {
        // body部に検証用のDOMを作成
        document.body.innerHTML = '<button id="play" title="再生ボタン"><span class="ui-icon ui-icon-play"></span></button>'
        + '<div id="left-side" class="hidden-area">'
        + '<div id="left-button" class="change-button button-left"></div>'
        + '</div>'
        + '<div id="right-side" class="hidden-area">'
        + '<div id="right-button" class="change-button button-right"></div>'
        + '</div>';
    });
    describe('constructor test', () => {
        test('No1 => コンストラクタの検証', () => {
            slideShowPlayButton = new SsPlayButton($('#play')[0]);
            expect($('#play').prop('disabled')).toBe(true);
            expect($('#left-side').css('display')).toBe('none');
            expect($('#right-side').css('display')).toBe('none');
        });
    });
    describe('event test', () => {
        test('No1 => ファイルダイアログのchangeイベントの検証', () => {
            slideShowPlayButton = new SsPlayButton($('#play')[0]);
            console.log('type="file"の値を設定することはセキュリティ上できません。よってこのテストは実施不可');
            console.log('https://stackoverflow.com/questions/1696877/how-to-set-a-value-to-a-file-input-in-html/1696884#1696884');
        });
        test('No2 => 再生ボタンのclickイベントの検証', () => {
            slideShowPlayButton = new SsPlayButton($('#play')[0]);
            // 一度再生ボタンを活性化する。
            $('#play').prop('disabled', false);
            $('#play').trigger('click');
            expect($('#play').prop('disabled')).toBe(true);
            expect($('#left-side').css('display')).toBe('block');
            expect($('#right-side').css('display')).toBe('block');
        });
    });
});