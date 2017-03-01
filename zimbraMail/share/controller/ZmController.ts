/*
 * ZeXtras' Zimbra API for Zimlet building
 * Copyright (C) 2017 ZeXtras S.r.l.
 *
 * This file is part of ZeXtras' Zimbra API for Zimlet building.
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
 * along with ZeXtras' Zimbra API for Zimlet building. If not, see <http://www.gnu.org/licenses/>.
 */

import {DwtShell} from "../../../ajax/dwt/widgets/DwtShell";
import {ZmApp} from "../../core/ZmApp";
import {ZmButtonToolBar} from "../view/ZmButtonToolBar";
import {DwtComposite} from "../../../ajax/dwt/widgets/DwtComposite";
import {DwtControl} from "../../../ajax/dwt/widgets/DwtControl";
import {ZmSearchResultsController} from "./ZmSearchResultsController";
import {DwtDialog} from "../../../ajax/dwt/widgets/DwtDialog";
import {AjxCallback} from "../../../ajax/boot/AjxCallback";
import {ZmAccount} from "../model/ZmAccount";

export class ZmController {

  public tabId: string;
  public isHidden: boolean;

  public _app: ZmApp;
  public _toolbar: ZmControllerToolBarMap | ZmButtonToolBar;
  public _currentViewId: string;
  public _container: DwtShell;
  public _currentViewType: string;

  constructor(container: DwtControl, app?: ZmApp, type?: string, sessionId?: string, searchResultsController?: ZmSearchResultsController) {}

  /**
   * @Override
   */
  public static getDefaultViewType(): string { return undefined; }
  public getCurrentViewId(): string { return undefined; }
  public getSessionId(): string { return undefined; }
  public _clearDialog(dialog: DwtDialog): void {}
  public getViewElements(view: string, appContentView: DwtComposite, toolbar?: ZmButtonToolBar): {[name: string]: DwtControl} { return undefined; }
  public static showDialog(renameDialog: DwtDialog, _renameCb: AjxCallback, params: any, account?:ZmAccount): void {}

}

export interface ZmControllerToolBarMap {
  [viewId: string]: ZmButtonToolBar
}
