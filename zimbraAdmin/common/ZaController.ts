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

import {AjxException} from "../../ajax/core/AjxException";
import {DwtComposite} from "../../ajax/dwt/widgets/DwtComposite";
import {DwtShell} from "../../ajax/dwt/widgets/DwtShell";
import {ZaAccountListController} from "../accounts/controller/ZaAccountListController";
import {ZaAccountViewController} from "../accounts/controller/ZaAccountViewController";
import {ZaResourceController} from "../resource/controller/ZaResourceController";
import {ZaSearchListController} from "../search/controller/ZaSearchListController";
import {ZaAppCtxt} from "./ZaAppCtxt";
import {ZaItem} from "./ZaItem";
import {ZaListView} from "./ZaListView";
import {ZaOperation} from "./ZaOperation";
import {ZaTabView} from "./ZaTabView";

export class ZaController {
  public static initPopupMenuMethods: {
    ZaAccountListController: Array<() => void>;
    ZaAccountViewController: Array<() => void>;
    ZaResourceController: Array<() => void>;
    ZaSearchListController: Array<() => void>;
  };

  /**
   * @deprecated in zimbra 8+
   */
  public static initToolbarMethods: {
    ZaResourceController: Array<() => void>;
    ZaSearchListController: Array<() => void>;
    ZaAccountViewController: Array<() => void>;
    ZaAccountListController: Array<() => void>;
  };

  /**
   * @deprecated in zimbra 8+
   */
  public static changeActionsStateMethods: {
    ZaAccountListController: Array<() => void>;
    ZaSearchListController: Array<() => void>;
  };

  public static setViewMethods: {[controllerIKeyName: string]: Array<(entry: ZaItem, openInNewTab: boolean, skipRefresh: boolean) => void>};

  public _popupOperations: ZaOperation[];
  public _popupOrder: number[];
  public _defaultType: string;

  /**
   * @deprecated in zimbra 8+
   */
  public _toolbarOperations: ZaOperation[];

  /**
   * @deprecated in zimbra 8+
   */
  public _toolbarOrder: number[];

  public _currentObject?: ZaItem;
  public _contentView?: ZaListView | DwtComposite;
  public _toolbar?: any;
  public _container: DwtShell;
  public _iKeyName: string;

  constructor(appContext: ZaAppCtxt, container: DwtShell, ikeyName: string) {
  }

  public popupMsgDialog(msg: string, noExecReset?: boolean): void {}
  public popupWarningDialog(msg: string, noExecReset?: boolean): void {}
  public popupErrorDialog(msg: string, ex?: AjxException, style?: number): void {}
  public switchToNextView(nextViewCtrlr: ZaController, func: (...args) => any, params?: any): void {}
  public _setView(entry: ZaItem, openInNewTab: boolean, skipRefresh: boolean): void {}
  public getMainTab(): any { return undefined; }
  public getContentViewId(): string { return undefined; }
  public _initPopupMenu(): void {}
}
