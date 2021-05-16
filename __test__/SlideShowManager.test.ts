import $ from "jquery";
import { SlideShowManager } from '../src/SlideShowManager';
import { PhotoData } from '../src/PhotoData';
const FileMock = jest.fn();
describe('SlideShowManager', () => {
    let slideShowManager = null;
    beforeEach(() => {
        // body部に検証用のDOMを作成
        document.body.innerHTML = '<div class="file-area-item">'
        + '<input type="file" title="読み込んだファイルは、サーバーにアップロードされません。" id="file" webkitdirectory multiple />'
        + '</div>'
        + '<progress id="meter" max="100" value="0"></progress>'
        + '<div class="file-area-item"><label id="meter-text" for="meter"></label></div>'
        + '<div id="photo-area"></div>';
        FileMock.mockImplementation((fileName) => {
            return {
                name: fileName
            };
        });
    });
    describe('public method test', () => {
        test('No1 => コンストラクタの検証', () => {
            const file1 = new FileMock('01.jpg');
            const file2 = new FileMock('02.jpg');
            const file3 = new FileMock('03.jpg');
            const file4 = new FileMock('04.jpg');
            const file5 = new FileMock('05.jpg');
            const url = 'url';
            const array = [];
            array.push(new PhotoData(file5, url));
            array.push(new PhotoData(file1, url));
            array.push(new PhotoData(file2, url));
            array.push(new PhotoData(file4, url));
            array.push(new PhotoData(file3, url));
            slideShowManager = new SlideShowManager($('#photo-area')[0],array);
        });
    });
    describe('event test', () => {
        test('No1 => 再生ボタンの検証', () => {

        });
        test('No2 => 左切り替えボタンの検証', () => {

        });
        test('No3 => 右切り替えボタンの検証', () => {

        });
        test('No4 => カーソルキー左の検証', () => {

        });
        test('No5 => カーソルキー右の検証', () => {

        });
        test('No6 => カーソルキー下の検証', () => {

        });
        test('No7 => ホイール上の検証', () => {

        });
        test('No8 => ホイール下の検証', () => {

        });
    });
    describe('private method test', () => {
        test('No1 => changePhotoの検証', () => {

        });
        test('No2 => changePhotoWrapの検証', () => {

        });
    });
});