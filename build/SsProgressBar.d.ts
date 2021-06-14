export declare class SsProgressBar {
    private $photoElement;
    constructor(photo: HTMLElement);
    private _meterDomCreate;
    hide(): void;
    show(): void;
    value(value: number): void;
    text(text: string): void;
}
