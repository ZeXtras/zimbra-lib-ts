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

import {ZmBaseController} from "../../share/controller/ZmBaseController";
import {ZmApptClone} from "../model/ZmAppt";
import {ZmApptComposeView} from "../view/ZmApptComposeView";
import {ZmCsfeResult} from "../../../zimbra/csfe/ZmCsfeResult";
import {ZmCalItem} from "../model/ZmCalItem";
import {ZmCsfeException} from "../../../zimbra/csfe/ZmCsfeException";
import {AjxCallback} from "../../../ajax/boot/AjxCallback";

export class ZmCalItemComposeController extends ZmBaseController {

  public static SAVE: string;

  public _composeView: ZmApptComposeView;
  public _action: string;

  public enableToolbar(enable: boolean): void {}
  public _saveCalItemFoRealz(calItem: ZmApptClone, attId: string, notifyList: string[], force: boolean): void {}
  public showErrorMessage(message: string): void {}
  public _handleResponseSave(calItem: ZmCalItem, result: ZmCsfeResult): void {}
  public _handleErrorSave(calItem: ZmCalItem, ex: ZmCsfeException): void {}
  public _doSaveCalItem(calItem: ZmCalItem, attId: string, callback: AjxCallback, errorCallback: AjxCallback, notifyList: string[]): void {}
  public isCloseAction(): boolean { return undefined; }
  public setFormatBtnItem(skipNotify: boolean, composeMode: "text/plain" | "text/html" ): void {}
  /** @deprecated Is invoked on @see {ZmApptComposeController} */ public closeView(): void {} // TODO: Warn Zimbra about this...

}
