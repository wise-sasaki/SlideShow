export declare class PhotoData {
    private x_size;
    private y_size;
    private file_name;
    private file_path;
    constructor(file: File, url: any);
    setXsize(size: number): void;
    getXsize(): number;
    setYsize(size: number): void;
    getYsize(): number;
    setFilePath(path: string): void;
    getFIlePath(): string;
    setFileName(name: string): void;
    getFileName(): string;
}
