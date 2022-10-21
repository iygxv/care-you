"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startLoop = void 0;
/**
 * vs提醒插件, 每1小时提醒一次
 */
const vscode = require("vscode");
const html_1 = require("./html");
const time = 1000 * 3;
let panel;
function startLoop() {
    setInterval(() => {
        if (panel) {
            panel.reveal();
        }
        else {
            panel = createWebview();
            panel.onDidDispose(() => {
                panel = null;
            });
        }
    }, time);
}
exports.startLoop = startLoop;
function createWebview(title = '是不是又没休息,哼') {
    const panel = vscode.window.createWebviewPanel('care-you', title, vscode.ViewColumn.Two, {
        enableScripts: true,
        retainContextWhenHidden: true,
    });
    panel.webview.html = (0, html_1.default)();
    return panel;
}
//# sourceMappingURL=index.js.map