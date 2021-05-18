import { PhotoData } from "./PhotoData";
import { PhotoMode } from "./PhotoMode";
export declare class SlideShowPhotoChange {
    private photoAreaElemet;
    private photoArray;
    private time;
    private photoCount;
    private _isLock;
    private _isDefaultOrder;
    constructor(element: HTMLElement, array: Array<PhotoData>);
    changePhoto(mode: PhotoMode, time: number): void;
    addCount(): void;
    subCount(): void;
    setCount(count: number): void;
    get isLock(): boolean;
    set isLock(lock: boolean);
    get isDefaultOrder(): boolean;
    set isDefaultOrder(order: boolean);
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
