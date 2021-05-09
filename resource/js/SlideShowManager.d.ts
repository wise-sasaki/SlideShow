import { PhotoData } from "./PhotoData";
import { PhotoMode } from "./PhotoMode";
export declare class SlideShowManager {
    private slidshowToggleMenu;
    private photoAreaElemet;
    private photoArray;
    private photoCount;
    private interval;
    resetFlg: boolean;
    private endFlg;
    mode: PhotoMode;
    type: number;
    private isLock;
    isDefaultOrder: boolean;
    constructor(element: HTMLElement, array: Array<PhotoData>);
    private _addEventListener;
    private addChangeEventListener;
    private addKeybordEventListener;
    private addMousewheelEventListener;
    destructor(): void;
    changePhoto(sec: number): void;
    private changePhotoWrap;
    private changeByHeight;
    private changeByMoving;
    private countLoop;
    private calculation;
}
