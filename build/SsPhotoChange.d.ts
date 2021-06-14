import { PhotoData } from "./PhotoData";
import { PhotoMode } from "./PhotoMode";
export declare class SsPhotoChange {
    private photoAreaElemet;
    private photoArray;
    private time;
    constructor(element: HTMLElement, array: Array<PhotoData>);
    changePhoto(mode: PhotoMode, time: number): void;
    private changeByHeight;
    private changeByZoomOut;
    private changeBySlideIn;
    private animationScale;
    private animationMoveDown;
    private animationMoveUp;
    private animationMoveLeft;
    private animationMoveRight;
    private countLoop;
    private calculation;
}
