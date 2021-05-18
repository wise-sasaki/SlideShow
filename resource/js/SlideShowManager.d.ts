import { PhotoData } from "./PhotoData";
import { PhotoMode } from "./PhotoMode";
import { SlideShowPhotoChange } from "./SlideShowPhotoChange";
export declare class SlideShowManager {
    private toggleMenu;
    change: SlideShowPhotoChange;
    private interval;
    resetFlg: boolean;
    private endFlg;
    mode: PhotoMode;
    time: number;
    constructor(element: HTMLElement, array: Array<PhotoData>);
    private _addEventListener;
    private addChangeEventListener;
    private addKeybordEventListener;
    private addMousewheelEventListener;
    destructor(): void;
    changePhoto(sec: number): void;
}
