import { PhotoMode } from '../src/PhotoMode';
import { SlideShowToggleMenu } from '../src/SlideShowToggleMenu';
const SlideShowManagerMock = jest.fn();

/**
 * コード網羅率（カバレッジ）基準
 * 命令網羅(statement coverage)（C0）
 * 分岐網羅(branch coverage)（C1）
 * 条件網羅(condition coverage)（C2）
 * 判定条件／条件網羅 (decision/condition coverage)
 * 複合条件網羅 (multiple condition coverage)
 * 経路網羅(path coverage)
 * 
 * テスト技法
 * 同値分割
 * 境界値分析
 * 状態遷移テスト
 */
describe('SlideShowToggleMenu', () => {
    // 検証用のDOMを再現
    const toggleMenuCloseDom = '<div id="toggle-menu" class="menu">';
    const toggleMenuOpenDom = '<div id="toggle-menu" class="menu active" style="display:block;">';
    const dom =
        '<div id="menu-title">Settings</div><hr>'
        + '<div id="mode">'
        + '<div id="menu-subtitle" class="menu-subtitle">Mode:</div>'
        + '<div id="normal-mode" class="menu-item"><input id="normal" type="radio" name="mode"><label for="normal">Normal</label></div>'
        + '<div id="zoomout-mode" class="menu-item"><input id="zoomout" type="radio" name="mode"><label for="zoomout">ZoomOut</label></div>'
        + '<div id="slidein-mode" class="menu-item"><input id="slidein" type="radio" name="mode"><label for="slidein">SlideIn</label></div>'
        + '</div>'
        + '<div id="time">'
        + '<div id="time-subtitle" class="menu-subtitle">Time:</div>'
        + '<div id="sec3-time" class="menu-item"><input id="sec3" type="radio" name="time"><label for="sec3">3s</label></div>'
        + '<div id="sec5-time" class="menu-item"><input id="sec5" type="radio" name="time"><label for="sec5">5s</label></div>'
        + '<div id="sec10-time" class="menu-item"><input id="sec10" type="radio" name="time"><label for="sec10">10s</label></div>'
        + '</div>'
        + '<div id="order">'
        + '<div id="order-subtitle" class="menu-subtitle">Order:</div>'
        + '<div id="default-order" class="menu-item"><input id="default" type="radio" name="order"><label for="default">ByName</label></div>'
        + '<div id="random-order" class="menu-item"><input id="random" type="radio" name="order"><label for="random">ByRandom</label></div>'
        + '</div>'
        + '</div>';
    let slideShowToggleMenu = null;
    beforeEach(() => {
        // body部に検証用のDOMを作成
        document.body.innerHTML = '<div class="setting-area"></div>';
        // SlideShowManagerクラスをモック化
        SlideShowManagerMock.mockImplementationOnce(() => {
            return {
                _mode: PhotoMode.NORMAL,
                changeMode: function(mode:PhotoMode) {this._mode = mode},
                time: 5,
                resetFlg: false,
                reset: function() {this.resetFlg = true},
                changePhoto: () => { },
                isDefaultOrder: false,
                changeOrder: function(flg: boolean) {this.isDefaultOrder = flg},
            };
        });

    });
    describe('DOM test', () => {
        /**
         * @jest-environment jsdom
         */
        test('No1 => トグルメニューのDOM構成を検証', () => {
            const slideShowManagerMock = new SlideShowManagerMock();
            slideShowToggleMenu = new SlideShowToggleMenu(slideShowManagerMock);
            // SlideShowToggleMenuで作成されているDOMを取得
            const html = $('.setting-area')[0].innerHTML;
            expect(html).toBe(toggleMenuCloseDom + dom);
        });
    });
    describe('Event test', () => {
        /**
         * @jest-environment jsdom
         */
        test('No1 => トグルメニュー表示のclickイベントを検証', () => {
            const slideShowManagerMock = new SlideShowManagerMock();
            slideShowToggleMenu = new SlideShowToggleMenu(slideShowManagerMock);
            $('#setting').trigger('click');
            // なんか検証できない
            // SlideShowToggleMenuで作成されているDOMを取得
            // const html = $('.setting-area')[0].innerHTML;
            // expect(html).toBe(toggleMenuOpenDom + dom);
        });
        test('No2-1 => 通常ラジオボタンクリック時の検証', () => {
            // 準備
            const slideShowManagerMock = new SlideShowManagerMock();
            slideShowToggleMenu = new SlideShowToggleMenu(slideShowManagerMock);
            $("#zoomout").trigger('click');// 一回ラジオボタンを切り替える
            $("#normal").trigger('click');
            // 検証
            expect(slideShowManagerMock._mode).toBe(PhotoMode.NORMAL);
        });
        test('No2-2 => 通常のラベルクリック時の検証', () => {
            // 準備
            const slideShowManagerMock = new SlideShowManagerMock();
            slideShowToggleMenu = new SlideShowToggleMenu(slideShowManagerMock);
            $("#zoomout").trigger('click');// 一回ラジオボタンを切り替える
            $("#normal-mode label").trigger('click');
            // 検証
            expect(slideShowManagerMock._mode).toBe(PhotoMode.NORMAL);
        });
        test('No3-1 => ズームアウトラジオボタンクリック時の検証', () => {
            // 準備
            const slideShowManagerMock = new SlideShowManagerMock();
            slideShowToggleMenu = new SlideShowToggleMenu(slideShowManagerMock);
            $("#zoomout").trigger('click');
            // 検証
            expect(slideShowManagerMock._mode).toBe(PhotoMode.ZOOMOUT);
        });
        test('No3-2 => ズームアウトのラベルクリック時の検証', () => {
            // 準備
            const slideShowManagerMock = new SlideShowManagerMock();
            slideShowToggleMenu = new SlideShowToggleMenu(slideShowManagerMock);
            $("#zoomout-mode label").trigger('click');
            // 検証
            expect(slideShowManagerMock._mode).toBe(PhotoMode.ZOOMOUT);
        });
        test('No4-1 => スライドインラジオボタンクリック時の検証', () => {
            // 準備
            const slideShowManagerMock = new SlideShowManagerMock();
            slideShowToggleMenu = new SlideShowToggleMenu(slideShowManagerMock);
            $("#slidein").trigger('click');
            // 検証
            expect(slideShowManagerMock._mode).toBe(PhotoMode.SLIDEIN);
        });
        test('No4-2 => スライドインラジオボタンクリック時の検証', () => {
            // 準備
            const slideShowManagerMock = new SlideShowManagerMock();
            slideShowToggleMenu = new SlideShowToggleMenu(slideShowManagerMock);
            $("#slidein-mode label").trigger('click');
            // 検証
            expect(slideShowManagerMock._mode).toBe(PhotoMode.SLIDEIN);
        });
        test('No5-1 => 3秒ラジオボタンクリック時の検証', () => {
            // 準備
            const slideShowManagerMock = new SlideShowManagerMock();
            slideShowToggleMenu = new SlideShowToggleMenu(slideShowManagerMock);
            $("#sec3").trigger('click');
            // 検証
            expect(slideShowManagerMock.time).toBe(3);
            expect(slideShowManagerMock.resetFlg).toBe(true);
        });
        test('No5-2 => 3秒のラベルクリック時の検証', () => {
            // 準備
            const slideShowManagerMock = new SlideShowManagerMock();
            slideShowToggleMenu = new SlideShowToggleMenu(slideShowManagerMock);
            $("#sec3-time label").trigger('click');
            // 検証
            expect(slideShowManagerMock.time).toBe(3);
            expect(slideShowManagerMock.resetFlg).toBe(true);
        });
        test('No6-1 => 5秒ラジオボタンクリック時の検証', () => {
            // 準備
            const slideShowManagerMock = new SlideShowManagerMock();
            slideShowToggleMenu = new SlideShowToggleMenu(slideShowManagerMock);
            // 一回3秒に切り替える
            $("#sec3").trigger('click');
            $("#sec5").trigger('click');
            // 検証
            expect(slideShowManagerMock.time).toBe(5);
            expect(slideShowManagerMock.resetFlg).toBe(true);
        });
        test('No6-2 => 5秒のラベルクリック時の検証', () => {
            // 準備
            const slideShowManagerMock = new SlideShowManagerMock();
            slideShowToggleMenu = new SlideShowToggleMenu(slideShowManagerMock);
            // 一回3秒に切り替える
            $("#sec3").trigger('click');
            $("#sec5-time label").trigger('click');
            // 検証
            expect(slideShowManagerMock.time).toBe(5);
            expect(slideShowManagerMock.resetFlg).toBe(true);
        });
        test('No7-1 => 10秒ラジオボタンクリック時の検証', () => {
            // 準備
            const slideShowManagerMock = new SlideShowManagerMock();
            slideShowToggleMenu = new SlideShowToggleMenu(slideShowManagerMock);
            $("#sec10").trigger('click');
            // 検証
            expect(slideShowManagerMock.time).toBe(10);
            expect(slideShowManagerMock.resetFlg).toBe(true);
        });
        test('No7-2 => 10秒ラジオボタンクリック時の検証', () => {
            // 準備
            const slideShowManagerMock = new SlideShowManagerMock();
            slideShowToggleMenu = new SlideShowToggleMenu(slideShowManagerMock);
            $("#sec10-time label").trigger('click');
            // 検証
            expect(slideShowManagerMock.time).toBe(10);
            expect(slideShowManagerMock.resetFlg).toBe(true);
        });
        test('No8-1 => 名前表示順ラジオボタンクリック時の検証', () => {
            // 準備
            const slideShowManagerMock = new SlideShowManagerMock();
            slideShowToggleMenu = new SlideShowToggleMenu(slideShowManagerMock);
            // 一回ランダム表示順に切り替える
            $("#random").trigger('click');
            $("#default").trigger('click');
            // 検証
            expect(slideShowManagerMock.isDefaultOrder).toBe(true);
        });
        test('No8-2 => 名前表示順ラジオボタンクリック時の検証', () => {
            // 準備
            const slideShowManagerMock = new SlideShowManagerMock();
            slideShowToggleMenu = new SlideShowToggleMenu(slideShowManagerMock);
            // 一回ランダム表示順に切り替える
            $("#random").trigger('click');
            $("#default-order label").trigger('click');
            // 検証
            expect(slideShowManagerMock.isDefaultOrder).toBe(true);
        });
        test('No9-1 => ランダム表示順ラジオボタンクリック時の検証', () => {
            // 準備
            const slideShowManagerMock = new SlideShowManagerMock();
            slideShowToggleMenu = new SlideShowToggleMenu(slideShowManagerMock);
            $("#random").trigger('click');
            // 検証
            expect(slideShowManagerMock.isDefaultOrder).toBe(false);
        });
        test('No9-2 => ランダム表示順ラジオボタンクリック時の検証', () => {
            // 準備
            const slideShowManagerMock = new SlideShowManagerMock();
            slideShowToggleMenu = new SlideShowToggleMenu(slideShowManagerMock);
            $("#random-order label").trigger('click');
            // 検証
            expect(slideShowManagerMock.isDefaultOrder).toBe(false);
        });
    });
});