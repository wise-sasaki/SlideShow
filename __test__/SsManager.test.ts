import { SlideShowManager } from '../src/SlideShowManager';
import { PhotoData } from '../src/PhotoData';
import { PhotoMode } from '../src/PhotoMode';
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
        test('No1 => constructorの検証', () => {
            // 準備
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
            slideShowManager = new SlideShowManager($('#photo-area')[0], array);
            // 検証
            expect(slideShowManager).toHaveBeenCalled();
        });
        test('No2-1 => changePhotoの画像切り替えのsetInterval起動の検証', () => {
            // 準備
            const file1 = new FileMock('01.jpg');
            const url = 'url';
            const array = [];
            array.push(new PhotoData(file1, url));
            slideShowManager = new SlideShowManager($('#photo-area')[0], array);
            (slideShowManager as any).resetFlg = false;
            (slideShowManager as any).endFlg = false;
            (slideShowManager as any).mode = PhotoMode.NORMAL;
            slideShowManager.changePhoto(0); // setInterval起動
            const interval = (slideShowManager as any).interval;
            // 検証
            expect(interval).not.toBeNull();
        });
        test('No2-2 => changePhotoのリセット時の検証', () => {
            // 準備
            const file1 = new FileMock('01.jpg');
            const url = 'url';
            const array = [];
            array.push(new PhotoData(file1, url));
            slideShowManager = new SlideShowManager($('#photo-area')[0], array);
            (slideShowManager as any).resetFlg = false;
            (slideShowManager as any).endFlg = false;
            (slideShowManager as any).mode = PhotoMode.NORMAL;
            slideShowManager.changePhoto(0); // setInterval起動
            const interval1 = (slideShowManager as any).interval;
            (slideShowManager as any).resetFlg = true; // リセット
            (slideShowManager as any).mode = PhotoMode.SLIDEIN;
            slideShowManager.changePhoto(0); // リセットフラグ設定後
            const interval2 = (slideShowManager as any).interval;
            // 検証
            expect(interval2).not.toBeNull();
            expect(interval1).not.toBe(interval2);
        });
        test('No2-3 => changePhotoの終了時の検証', () => {
            // 準備
            const file1 = new FileMock('01.jpg');
            const url = 'url';
            const array = [];
            array.push(new PhotoData(file1, url));
            slideShowManager = new SlideShowManager($('#photo-area')[0], array);
            (slideShowManager as any).resetFlg = false;
            (slideShowManager as any).endFlg = false;
            (slideShowManager as any).mode = PhotoMode.NORMAL;
            slideShowManager.changePhoto(0); // setInterval起動
            let interval = (slideShowManager as any).interval;
            (slideShowManager as any).endFlg = true; // 終了
            (slideShowManager as any).mode = PhotoMode.SLIDEIN;
            slideShowManager.changePhoto(0); // 終了フラグ設定後
            interval = (slideShowManager as any).interval;
            // 検証
            expect(interval).toBeNull();
        });
        test('No3 => resetの検証', () => {
            // 準備
            const file1 = new FileMock('01.jpg');
            const url = 'url';
            const array = [];
            array.push(new PhotoData(file1, url));
            slideShowManager = new SlideShowManager($('#photo-area')[0], array);
            (slideShowManager as any).resetFlg = false;
            slideShowManager.reset();
            // 検証
            expect((slideShowManager as any).resetFlg).toBe(true);
        });
        test('No4 => time getter setterの検証', () => {
            // 準備
            const file1 = new FileMock('01.jpg');
            const url = 'url';
            const array = [];
            array.push(new PhotoData(file1, url));
            slideShowManager = new SlideShowManager($('#photo-area')[0], array);
            slideShowManager.time = 11;
            // 検証
            expect((slideShowManager as any).time).toBe(11);
        });
        test('No5-1 => changeOrderの検証', () => {
            // 準備
            const file1 = new FileMock('01.jpg');
            const url = 'url';
            const array = [];
            array.push(new PhotoData(file1, url));
            slideShowManager = new SlideShowManager($('#photo-area')[0], array);
            slideShowManager.changeOrder(true);
            // 検証
            expect((slideShowManager as any).change.isDefaultOrder).toBe(true);
        });
        test('No5-2 => changeOrderの検証', () => {
            // 準備
            const file1 = new FileMock('01.jpg');
            const url = 'url';
            const array = [];
            array.push(new PhotoData(file1, url));
            slideShowManager = new SlideShowManager($('#photo-area')[0], array);
            slideShowManager.changeOrder(false);
            // 検証
            expect((slideShowManager as any).change.isDefaultOrder).toBe(false);
        });
    });
    describe('event test', () => {
        test('No1 => 再生ボタンの検証', () => {
            // 準備
            const file1 = new FileMock('01.jpg');
            const url = 'url';
            const array = [];
            array.push(new PhotoData(file1, url));
            slideShowManager = new SlideShowManager($('#photo-area')[0], array);
            $('#play').trigger("click");
            // 検証
            expect(slideShowManager.changePhoto(5)).toBeCalled();
        });
        test('No2 => 左切り替えボタンの検証', () => {
            // 準備
            const file1 = new FileMock('01.jpg');
            const url = 'url';
            const array = [];
            array.push(new PhotoData(file1, url));
            slideShowManager = new SlideShowManager($('#photo-area')[0], array);
            $('#left-button').trigger("click");
            // 検証
            expect(slideShowManager.changePhoto(5)).toBeCalled();
        });
        test('No3 => 右切り替えボタンの検証', () => {
            // 準備
            const file1 = new FileMock('01.jpg');
            const url = 'url';
            const array = [];
            array.push(new PhotoData(file1, url));
            slideShowManager = new SlideShowManager($('#photo-area')[0], array);
            $('#right-button').trigger("click");
            // 検証
            expect(slideShowManager.changePhoto(5)).toBeCalled();
        });
        test('No4 => カーソルキー左の検証', () => {
            // 準備
            const file1 = new FileMock('01.jpg');
            const url = 'url';
            const array = [];
            array.push(new PhotoData(file1, url));
            slideShowManager = new SlideShowManager($('#photo-area')[0], array);
            $('#slideshow-wrap').trigger("keydown");
            // 検証
            expect(slideShowManager.changePhoto(5)).toBeCalled();
        });
        test('No5 => カーソルキー右の検証', () => {
            // 準備
            const file1 = new FileMock('01.jpg');
            const url = 'url';
            const array = [];
            array.push(new PhotoData(file1, url));
            slideShowManager = new SlideShowManager($('#photo-area')[0], array);
            $('#slideshow-wrap').trigger("keydown");
            // 検証
            expect(slideShowManager.changePhoto(5)).toBeCalled();
        });
        test('No6 => カーソルキー下の検証', () => {
            // 準備
            const file1 = new FileMock('01.jpg');
            const url = 'url';
            const array = [];
            array.push(new PhotoData(file1, url));
            slideShowManager = new SlideShowManager($('#photo-area')[0], array);
            $('#slideshow-wrap').trigger("keydown");
            // 検証
            expect(slideShowManager.changePhoto(5)).toBeCalled();
        });
        test('No7 => ホイール上の検証', () => {
            // 準備
            const file1 = new FileMock('01.jpg');
            const url = 'url';
            const array = [];
            array.push(new PhotoData(file1, url));
            slideShowManager = new SlideShowManager($('#photo-area')[0], array);
            $('#slideshow-wrap').trigger("mousewheel");
            // 検証
            expect(slideShowManager.changePhoto(5)).toBeCalled();
        });
        test('No8 => ホイール下の検証', () => {
            // 準備
            const file1 = new FileMock('01.jpg');
            const url = 'url';
            const array = [];
            array.push(new PhotoData(file1, url));
            slideShowManager = new SlideShowManager($('#photo-area')[0], array);
            $('#slideshow-wrap').trigger("mousewheel");
            // 検証
            expect(slideShowManager.changePhoto(5)).toBeCalled();
        });
    });
});