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

import {ZmController} from "../../share/controller/ZmController";
import {ZmActionMenu} from "../../share/view/ZmActionMenu";
import {ZmMailMsg} from "../model/ZmMailMsg";
import {ZmCsfeResult} from "../../../zimbra/csfe/ZmCsfeResult";
import {AjxCallback} from "../../../ajax/boot/AjxCallback";
import {ZmComposeView, ZmComposeView_IncOptions} from "../view/ZmComposeView";
import {DwtMessageDialog} from "../../../ajax/dwt/widgets/DwtMessageDialog";

export class ZmComposeController extends ZmController {

  public static IS_REPLY: {[name: string]: boolean};
  public static IS_CAL_REPLY: {[name: string]: boolean};
  public static IS_INVITE_REPLY: {[name: string]: boolean};
  public static IS_FORWARD: {[name: string]: boolean};
  public static RADIO_GROUP: {[name: string]: number};
  public static OP_CHECK: {[name: string]: boolean};
  public static DRAFT_TYPE_AUTO: string;
  public static INC_MAP: {[op: string]: string};

  public static DRAFT_TYPE_DELAYSEND: string;
  public static DRAFT_TYPE_NONE: string;
  public static MSG_DIALOG_1: number;
  public static MSG_DIALOG_2: number;

  public _action: string;
  public _curIncOptions: ZmComposeView_IncOptions;
  public _optionsMenu: {[name: string]: ZmActionMenu};
  public _listeners: {[name: string]: Function};
  public _composeView: ZmComposeView;
  public _msg: ZmMailMsg;
  public _sendTime: {date: Date, timezone: string};
  public _currentDlg: DwtMessageDialog;

  public _setView(params: ZmComposeControllerSetViewParams): void {}
  public _setDependentOptions(incOptions: ZmComposeControllerSetDependentOptionsParams): void {}
  public _createOptionsMenu(action: string): ZmActionMenu { return undefined; }
  public _handleResponseSaveDraftListener(draftType: string, callback: Function, results: ZmCsfeResult): void {}
  public saveDraft(
    draftType: string,
    attId?: {
      ct: string;
      id: string;
      s: number;
      ver: string;
    }[],
    docIds?: {id: string, ver: string, ct: string, s: number }[],
    callback?: AjxCallback,
    contactId?: string
  ): void {}
  public _completeAllUpload(filesArray: any[]): void {}
  public _switchInclude(op: string): void {}
  public _initAutoSave(): void {}
  /** @deprecated from Zimbra >= 8.5 */ public _uploadMyComputerFile(files: File[], prevData?: string[], start?: number): void {}
  public _initUploadMyComputerFile(files: File[]): void {}
  public _sendMsg(attId: string[], docIds: string[], draftType: string, callback: AjxCallback , contactId: string[]): void {}
  public _showMsgDialog(dlgType: number, msg: string, style: number, callbacks?: {}): void {}
}

export interface ZmComposeControllerSetDependentOptionsParams {
}

export interface ZmComposeControllerSetViewParams {
  action: string;
  msg: ZmMailMsg;
  toOverride?: string;
  subjOverride?: string;
  extraBodyText?: string;
  composeMode?: string;
  accountName?: string;
  msgIds?: number[];
  readReceipt?: boolean;
  inNewWindow?: boolean;
}
