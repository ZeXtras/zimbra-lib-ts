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

import {AjxCallback} from "../../../ajax/boot/AjxCallback";
import {DwtComposite} from "../../../ajax/dwt/widgets/DwtComposite";
import {DwtControl} from "../../../ajax/dwt/widgets/DwtControl";
import {DwtDialog} from "../../../ajax/dwt/widgets/DwtDialog";
import {DwtShell} from "../../../ajax/dwt/widgets/DwtShell";
import {ZmApp} from "../../core/ZmApp";
import {ZmAccount} from "../model/ZmAccount";
import {ZmButtonToolBar} from "../view/ZmButtonToolBar";
import {ZmSearchResultsController} from "./ZmSearchResultsController";
import {ZmAppChooser} from "../view/ZmAppChooser";

export abstract class ZmController {

  /**
   * @Override me!
   */
  public static getDefaultViewType(): string { return undefined; }
  public static showDialog(
    renameDialog: DwtDialog,
    _renameCb: AjxCallback,
    params: any,
    account?: ZmAccount,
  ): void {}

  public tabId: string;
  public isHidden: boolean;

  public _app: ZmApp;
  public _toolbar: ZmControllerToolBarMap | ZmButtonToolBar;
  public _currentViewId: string;
  public _container: DwtShell;
  public _currentViewType: string;
  public _elementsToHide: string[];

  constructor(
    container: DwtControl,
    app?: ZmApp,
    type?: string,
    sessionId?: string,
    searchResultsController?: ZmSearchResultsController,
  ) {}
  public getCurrentViewId(): string { return undefined; }
  public getAppChooser(): ZmAppChooser { return undefined; }
  public getSessionId(): string { return undefined; }
  public _clearDialog(dialog: DwtDialog): void {}
  public getViewElements(
    view: string,
    appContentView: DwtComposite,
    toolbar?: ZmButtonToolBar,
  ): {[name: string]: DwtControl} { return undefined; }

  public getDefaultViewType(): string { return undefined; }
  public _setView(...params: any[]): void {}

  protected _preUnloadCallback(): boolean { return undefined; }
  protected _preHideCallback(): boolean { return undefined; }
  protected _postHideCallback(): boolean { return undefined; }
  protected _postRemoveCallback(): boolean { return undefined; }
  protected _preShowCallback(): boolean { return undefined; }
  protected _postShowCallback(): boolean { return undefined; }

}

export interface ZmControllerToolBarMap {
  [viewId: string]: ZmButtonToolBar;
}
