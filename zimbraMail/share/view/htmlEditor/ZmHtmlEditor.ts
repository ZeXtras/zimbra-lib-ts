/*
 * T4Z - TypeScript 4 Zimlet
 * Copyright (C) 2017 ZeXtras S.r.l.
 *
 * This file is part of T4Z - TypeScript 4 Zimlet.
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation, version 2 of
 * the License.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with T4Z - TypeScript 4 Zimlet. If not, see <http://www.gnu.org/licenses/>.
 */

import {DwtControl} from "../../../../ajax/dwt/widgets/DwtControl";
import {AjxStringUtilConvertHtml2TextConvertor} from "../../../../ajax/util/AjxStringUtil";
import {DwtTabGroup} from "../../../../ajax/dwt/keyboard/DwtTabGroup";

export class ZmHtmlEditor extends DwtControl {
  public static TINY_MCE_PATH: string;
  /** @deprecated from Zimbra >= 8.5 */ public static _VALUE: string;

  public _mode: ZmHtmlEditorMode;
  public _editorInitialized: boolean;
  public _bodyTextAreaId: string;
  public _ignoreWords: {[word: string]: boolean};

  public getContent(insertFontStyle?: boolean, onlyInnerContent?: boolean): string { return undefined; }
  public setContent(content: string): void {}
  public getMode(): ZmHtmlEditorMode { return undefined; }
  public setMode(mode: ZmHtmlEditorMode, convert?: boolean, convertor?: AjxStringUtilConvertHtml2TextConvertor): void {}
  public discardMisspelledWords(keepModeDiv?: boolean): void {}
  public getContentField(): HTMLTextAreaElement { return undefined; }
  public initEditorManager(id: string, autoFocus?: boolean): void {}
  public getEditor(): TinyMCE|null { return undefined; }
  public onInit(ev: ZmHtmlEditorOnInitEv): void {}
  public moveCaretToTop(num?: number): void {}
  public _setupTabGroup(mainTabGroup?: DwtTabGroup): void {}
  public _resetSize(): void {}
  public _convertHtml2Text(convertor: AjxStringUtilConvertHtml2TextConvertor): string { return undefined; }

}

export interface TinyMceWindow extends Window {
  tinyMCEPreInit: {
    base: string;
  };
  tinyMCE: any;
  tinymce: any;
}

export interface TinyMCE {
  execCommand(cmd: string, ui: boolean, v?: string): boolean;
  setContent(content: string, args: {format: "raw"}): void;
  getElement(): HTMLTextAreaElement;
}

export type ZmHtmlEditorMode = "text/plain" | "text/html";

export interface ZmHtmlEditorOnInitEv {
  isDefaultPrevented: Function;
  isImmediatePropagationStopped: Function;
  isPropagationStopped: Function;
  preventDefault: Function;
  stopImmediatePropagation: Function;
  stopPropagation: Function;
  target: TinyMCE;
  type: "init";
}
