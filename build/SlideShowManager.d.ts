import { PhotoData } from "./PhotoData";
export declare class SlideShowManager {
    private toggleMenu;
    private change;
    constructor(element: HTMLElement, array: Array<PhotoData>);
    private _addEventListener;
    private addChangeEventListener;
    private addKeybordEventListener;
    private addMousewheelEventListener;
    destructor(): void;
    changePhoto(sec: number): void;
    changeOrder(order: boolean): void;
}
