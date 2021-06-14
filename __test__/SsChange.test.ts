import { SsPhotoChange } from '../src/SsPhotoChange';
import { PhotoData } from '../src/PhotoData';
import { PhotoMode } from '../src/PhotoMode';
const FileMock = jest.fn();
const spy = jest.spyOn(Math, "random");
describe('SlideShowPhotoChange', () => {
    let slideShowPhotoChange = null;
    let photoArray = new Array<PhotoData>();
    beforeEach(() => {
        // body部に検証用のDOMを作成
        document.body.innerHTML = '<div id="photo-area"></div>';
        // 画像リストを背区政
        FileMock.mockImplementation((fileName) => {
            return {
                name: fileName
            };
        });
        const file1 = new FileMock('01.jpg');
        const file2 = new FileMock('02.jpg');
        const file3 = new FileMock('03.jpg');
        const file4 = new FileMock('04.jpg');
        const file5 = new FileMock('05.jpg');
        const url = 'url';
        photoArray.push(new PhotoData(file1, url));
        photoArray.push(new PhotoData(file2, url));
        photoArray.push(new PhotoData(file3, url));
        photoArray.push(new PhotoData(file4, url));
        photoArray.push(new PhotoData(file5, url));
        // Math.randomを固定値にする
        spy.mockReturnValue(0.6);
    });
    describe('constructor test', () => {
        test('No1 => constructorの検証', () => {

        });
    });
    describe('public method test', () => {
        test('No1-1 => changePhotoの検証(mode=NORMAL)', () => {
            // 準備
            slideShowPhotoChange = new SsPhotoChange($('photo-area')[0], photoArray);
            slideShowPhotoChange.setCount(0);
            slideShowPhotoChange.isLock = false;
            slideShowPhotoChange.isDefaultOrder = true;
            slideShowPhotoChange.changePhoto(PhotoMode.NORMAL, 5);
            // 検証
            expect((slideShowPhotoChange as any).photoCount).toBe(1);
        });
        test('No1-2 => changePhotoの検証(mode=ZOOMOUT)', () => {
            // 準備
            slideShowPhotoChange = new SsPhotoChange($('photo-area')[0], photoArray);
            slideShowPhotoChange.setCount(0);
            slideShowPhotoChange.isLock = false;
            slideShowPhotoChange.isDefaultOrder = true;
            slideShowPhotoChange.changePhoto(PhotoMode.ZOOMOUT, 5);
            // 検証（カウントが加算されていること）
            expect((slideShowPhotoChange as any).photoCount).toBe(1);
        });
        test('No1-3 => changePhotoの検証(mode=SLIDEIN)', () => {
            // 準備
            slideShowPhotoChange = new SsPhotoChange($('photo-area')[0], photoArray);
            slideShowPhotoChange.setCount(0);
            slideShowPhotoChange.isLock = false;
            slideShowPhotoChange.isDefaultOrder = true;
            slideShowPhotoChange.changePhoto(PhotoMode.SLIDEIN, 5);
            // 検証（カウントが加算されていること）
            expect((slideShowPhotoChange as any).photoCount).toBe(1);
        });
        test('No1-4 => changePhotoの検証(isLock=true)', () => {
            // 準備
            slideShowPhotoChange = new SsPhotoChange($('photo-area')[0], photoArray);
            slideShowPhotoChange.setCount(0);
            slideShowPhotoChange.isLock = true;
            slideShowPhotoChange.isDefaultOrder = true;
            slideShowPhotoChange.changePhoto(PhotoMode.SLIDEIN, 5);
            // 検証（カウントが加算されていないこと）
            expect((slideShowPhotoChange as any).photoCount).toBe(0);
        });
        test('No1-5 => changePhotoの検証(isDefaultOrder=false)', () => {
            // 準備
            slideShowPhotoChange = new SsPhotoChange($('photo-area')[0], photoArray);
            slideShowPhotoChange.setCount(0);
            slideShowPhotoChange.isLock = false;
            slideShowPhotoChange.isDefaultOrder = false;
            slideShowPhotoChange.changePhoto(PhotoMode.SLIDEIN, 5);
            // 検証（カウントが指定された値になること。spyでMath.randomが0.6 * 画像リストが5なので「3」が返却される）
            expect((slideShowPhotoChange as any).photoCount).toBe(3);
        });
        test('No2 => addCountの検証', () => {
            // 準備
            slideShowPhotoChange = new SsPhotoChange($('photo-area')[0], photoArray);
            (slideShowPhotoChange as any).photoCount = 3;
            slideShowPhotoChange.addCount();
            // 検証
            expect((slideShowPhotoChange as any).photoCount).toBe(4);
        });
        test('No3 => subCountの検証', () => {
            // 準備
            slideShowPhotoChange = new SsPhotoChange($('photo-area')[0], photoArray);
            (slideShowPhotoChange as any).photoCount = 3;
            slideShowPhotoChange.subCount();
            // 検証
            expect((slideShowPhotoChange as any).photoCount).toBe(2);
        });
        test('No4 => setCountの検証', () => {
            // 準備
            slideShowPhotoChange = new SsPhotoChange($('photo-area')[0], photoArray);
            (slideShowPhotoChange as any).photoCount = 3;
            slideShowPhotoChange.setCount(0);
            // 検証
            expect((slideShowPhotoChange as any).photoCount).toBe(0);
        });
        test('No5 => getter setter isLockの検証', () => {
            // 準備
            slideShowPhotoChange = new SsPhotoChange($('photo-area')[0], photoArray);
            slideShowPhotoChange.isLock = true;
            // 検証
            expect((slideShowPhotoChange as any).isLock).toBe(true);
        });
        test('No6 => getter setter isDefaultOrderの検証', () => {
            // 準備
            slideShowPhotoChange = new SsPhotoChange($('photo-area')[0], photoArray);
            slideShowPhotoChange.isDefaultOrder = false;
            // 検証
            expect((slideShowPhotoChange as any).isDefaultOrder).toBe(false);
        });
    });
    describe('private method test', () => {
        test('No1 => changeByHeightの検証', () => {

        });
        test('No2 => changeByZoomOutの検証', () => {

        });
        test('No3 => changeBySlideInの検証', () => {

        });
        test('No4 => animationScaleの検証', () => {

        });
        test('No5 => animationMoveDownの検証', () => {

        });
        test('No6 => animationMoveUpの検証', () => {

        });
        test('No7 => animationMoveLeftの検証', () => {

        });
        test('No8 => animationMoveRightの検証', () => {

        });
        test('No9-1 => countLoopの検証 最小値', () => {
            // 準備
            slideShowPhotoChange = new SsPhotoChange($('photo-area')[0], photoArray);
            (slideShowPhotoChange as any).photoCount = 0;
            (slideShowPhotoChange as any).countLoop();
            // 検証
            expect((slideShowPhotoChange as any).photoCount).toBe(0);
        });
        test('No9-2 => countLoopの検証 最大値', () => {
            // 準備
            slideShowPhotoChange = new SsPhotoChange($('photo-area')[0], photoArray);
            (slideShowPhotoChange as any).photoCount = 4;
            (slideShowPhotoChange as any).countLoop();
            // 検証
            expect((slideShowPhotoChange as any).photoCount).toBe(4);
        });
        test('No9-3 => countLoopの検証 最小値-1', () => {
            // 準備
            slideShowPhotoChange = new SsPhotoChange($('photo-area')[0], photoArray);
            (slideShowPhotoChange as any).photoCount = -1;
            (slideShowPhotoChange as any).countLoop();
            // 検証
            expect((slideShowPhotoChange as any).photoCount).toBe(4);
        });
        test('No9-4 => countLoopの検証 最大値+1', () => {
            // 準備
            slideShowPhotoChange = new SsPhotoChange($('photo-area')[0], photoArray);
            (slideShowPhotoChange as any).photoCount = 5;
            (slideShowPhotoChange as any).countLoop();
            // 検証
            expect((slideShowPhotoChange as any).photoCount).toBe(0);
        });
        test('No10 => calculationの検証', () => {
            // 準備
            slideShowPhotoChange = new SsPhotoChange($('photo-area')[0], photoArray);
            const result = (slideShowPhotoChange as any).calculation(photoArray[0], 500,0);
            // 検証
            expect(result['photoY']).toBe(500);
            expect(result['photoX']).toBe(0);
        });
    });
});