import $ from "jquery";
import * as fs from 'fs';
import { SlideShowFileReader } from '../src/SlideShowFileReader';
import { PhotoData } from '../src/PhotoData';
const FileMock = jest.fn();
describe('SlideShowFileReader', () => {
    let slideShowFileReader = null;
    beforeEach(() => {
        // body部に検証用のDOMを作成
        document.body.innerHTML = '<div class="file-area-item">'
        + '<input type="file" title="読み込んだファイルは、サーバーにアップロードされません。" id="file" webkitdirectory multiple />'
        + '</div>'
        + '<progress id="meter" max="100" value="0"></progress>'
        + '<div class="file-area-item"><label id="meter-text" for="meter"></label></div>'
        + '<div id="photo-area"></div>';
    });
    describe('public method test', () => {
        test('No1 => コンストラクタの検証', () => {
            slideShowFileReader = new SlideShowFileReader($('#file')[0],$('#photo-area')[0]);
        });
    });
    describe('event test', () => {
        test('No1 => ファイルダイアログのchangeイベントの検証', () => {
            console.log('type="file"の値を設定することはセキュリティ上できません。よってこのテストは実施不可');
            console.log('https://stackoverflow.com/questions/1696877/how-to-set-a-value-to-a-file-input-in-html/1696884#1696884');
        });
    });
    describe('private method test', () => {
        test('No1 => readFilesの検証', () => {
            slideShowFileReader = new SlideShowFileReader($('#file')[0],$('#photo-area')[0]);
            const file1 = new Blob([getUploadedImageBuffer('D:/workspace/SlideShow/__test__/image/01.jpg')], { type: "image/jpeg" });
            const event = $.Event('change', {
                files: [file1]
            });
            // 対象クラスの呼び出し
            (slideShowFileReader as any).readFiles(event);
            // 検証
            expect($('#meter').val()).toBe(100);
            expect($("#meter-text").text()).toBe("1 / 1 Complete");
            const photoArray = (slideShowFileReader as any).photoArray;
            for (const data of photoArray) {
                expect(data.xSize).toBe(448);
                expect(data.ySize).toBe(228);
                expect(data.filePath).toBe('D:/workspace/SlideShow/__test__/image/01.jpg');
                expect(data.fileName).toBe('01.jpg');
            }
        });
        FileMock.mockImplementation((fileName) => {
            return {
                name: fileName
            };
        });
        test('No2 => fileSortの検証', () => {
            const file1 = new FileMock('01.jpg');
            const file2 = new FileMock('02.jpg');
            const file3 = new FileMock('03.jpg');
            const file4 = new FileMock('04.jpg');
            const file5 = new FileMock('05.jpg');
            const url = 'url';
            const beforeArray = [];
            beforeArray.push(new PhotoData(file5, url));
            beforeArray.push(new PhotoData(file1, url));
            beforeArray.push(new PhotoData(file2, url));
            beforeArray.push(new PhotoData(file4, url));
            beforeArray.push(new PhotoData(file3, url));
            const affterArray = [];
            affterArray.push(new PhotoData(file1, url));
            affterArray.push(new PhotoData(file2, url));
            affterArray.push(new PhotoData(file3, url));
            affterArray.push(new PhotoData(file4, url));
            affterArray.push(new PhotoData(file5, url));
            // 対象クラスの呼び出し
            slideShowFileReader = new SlideShowFileReader($('#file')[0],$('#photo-area')[0]);
            (slideShowFileReader as any).fileSort(beforeArray);
            // 検証
            for(let i = 0; i < beforeArray.length; i++){
                expect(beforeArray[i].fileName).toBe(affterArray[i].fileName);
            }
        });
    });
});
const getUploadedImageBuffer = (filePath: string): ArrayBuffer => {
    const buffer = fs.readFileSync(filePath);  // Buffer
    return buffer.buffer // ArrayBuffer
};