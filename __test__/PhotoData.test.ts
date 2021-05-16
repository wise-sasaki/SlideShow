import { PhotoData } from '../src/PhotoData';
const FileMock = jest.fn();
describe('PhotoData', () => {
    beforeEach(() => {
        FileMock.mockImplementationOnce(() => {
            return {
                name: '01.jpg'
            };
        });
    });
    describe('constructor test', () => {
        test('No1 => コンストラクタの検証', () => {
            const file = new FileMock();
            const url = '../image/01.jpg';
            const photoData = new PhotoData(file, url);
            expect(photoData.xSize).toBe(0);
            expect(photoData.ySize).toBe(0);
            expect(photoData.filePath).toBe(url);
            expect(photoData.fileName).toBe('01.jpg');
        });
    });
    describe('setter test', () => {
        test('No1 => セッターの検証', () => {
            const file = new FileMock();
            const url = 'mock_url';
            const photoData = new PhotoData(file, url);
            photoData.xSize = 100;
            photoData.ySize = 100;
            photoData.filePath = 'test_path';
            photoData.fileName = 'test_name';
            expect(photoData.xSize).toBe(100);
            expect(photoData.ySize).toBe(100);
            expect(photoData.filePath).toBe('test_path');
            expect(photoData.fileName).toBe('test_name');
        });
    });
});