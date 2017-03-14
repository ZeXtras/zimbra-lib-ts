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

import {DwtComposite} from "../../ajax/dwt/widgets/DwtComposite";
import {AjxCallback} from "../../ajax/boot/AjxCallback";

export class ZmOperation {
  public static NEW_MENU: string;
  public static NEW_MESSAGE: string;
  public static REQUEST_READ_RECEIPT: string;
  public static REPLY: string;
  public static REPLY_ALL: string;
  public static SEP: string;
  public static FORMAT_HTML: string;
  public static FORMAT_TEXT: string;
  public static INC_NONE: string;
  public static INC_BODY: string;
  public static INC_SMART: string;
  public static INC_ATTACHMENT: string;
  public static USE_PREFIX: string;
  public static INCLUDE_HEADERS: string;
  public static ADD_SIGNATURE: string;
  public static COMPOSE_OPTIONS: string;
  public static CAL_REPLY: string;

  public static SPAM: string;
  public static PRINT: string;

  public static KEY_ID: string;
  public static NEW_FILE: string;
  public static VIEW_MENU: string;
  public static MENUITEM_ID: string;
  public static TEXT: string;
  public static SAVE_FILE: string;
  public static DELETE: string;
  public static RENAME_FILE: string;
  public static NEW_FOLDER: string;
  public static RENAME_FOLDER: string;
  public static SETUP: {[id: string]: ZmRegisterOperationParams};
  public static DELETE_WITHOUT_SHORTCUT: string;
  public static MOVE: string;
  public static SEND_FILE_AS_ATT: string;

  public static addOperation(parent: DwtComposite, id: string, opHash: ZmAddOperationParams, index?: number, htmlElId?: string): void {}
  public static setOperation(parent: DwtComposite, oldOp: string, newOp: string, text?: string, image?: string, disImage?: string): void {}
  public static registerOp(op: string, params: ZmRegisterOperationParams, setting?: string, callback?: AjxCallback): void {}

  public static getToolTip(id: string, keyMap: string, tooltip: string): string {
    return undefined;
  }
}

interface ZmAddOperationParams {
}

export interface ZmRegisterOperationParams {
  textKey?: string;
  tooltipKey?: string;
  image?: string;
  disImage?: string;
  shortcut?: string;
  textPrecedence?: number;
  showImageInToolbar?: boolean;
  showTextInToolbar?: boolean;
}
