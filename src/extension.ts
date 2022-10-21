import * as vscode from 'vscode';
import { startLoop } from './core';
export function activate(context: vscode.ExtensionContext) {
	startLoop();
}
export function deactivate() {}
