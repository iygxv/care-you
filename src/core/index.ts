/**
 * vs提醒插件, 每1小时提醒一次
 */
import * as vscode from 'vscode';
import getWebviewContent from './html';
const time: number = 1000 * 3;
let panel: any;

export function startLoop() {
  setInterval(() => {
    if (panel) {
      panel.reveal();
    } else {
      panel = createWebview();
      panel.onDidDispose(() => {
        panel = null;
      });
    }
  }, time);
}

function createWebview(title = '是不是又没休息,哼') {
  const panel = vscode.window.createWebviewPanel('care-you', title, vscode.ViewColumn.Two, {
    enableScripts: true,
    retainContextWhenHidden: true,
  });
  panel.webview.html = getWebviewContent();
  return panel;
}