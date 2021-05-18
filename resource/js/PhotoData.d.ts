export declare class PhotoData {
    private _xSize;
    private _ySize;
    private _fileName;
    private _filePath;
    constructor(file: File, url: any);
    set xSize(size: number);
    get xSize(): number;
    set ySize(size: number);
    get ySize(): number;
    set filePath(path: string);
    get filePath(): string;
    set fileName(name: string);
    get fileName(): string;
}
