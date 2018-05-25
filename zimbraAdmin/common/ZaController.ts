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

import {ZaAccountListController} from "../accounts/controller/ZaAccountListController";
import {ZaAccountViewController} from "../accounts/controller/ZaAccountViewController";
import {ZaResourceController} from "../resource/controller/ZaResourceController";
import {ZaSearchListController} from "../search/controller/ZaSearchListController";
import {ZaItem} from "./ZaItem";
import {ZaListView} from "./ZaListView";
import {ZaOperation} from "./ZaOperation";

export class ZaController {
  public static initPopupMenuMethods: {
    ZaAccountListController: Array<typeof ZaAccountListController>;
    ZaAccountViewController: Array<typeof ZaAccountViewController>;
    ZaResourceController: Array<typeof ZaResourceController>;
    ZaSearchListController: Array<typeof ZaSearchListController>;
  };

  /**
   * @deprecated in zimbra 8+
   */
  public static initToolbarMethods: {
    ZaResourceController: Array<typeof ZaResourceController>;
    ZaSearchListController: Array<typeof ZaSearchListController>;
    ZaAccountViewController: Array<typeof ZaAccountViewController>;
    ZaAccountListController: Array<typeof ZaAccountListController>;
  };

  /**
   * @deprecated in zimbra 8+
   */
  public static changeActionsStateMethods: {
    ZaAccountListController: Array<typeof ZaAccountListController>;
    ZaSearchListController: Array<typeof ZaSearchListController>;
  };

  public _popupOperations: ZaOperation[];
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
  public _contentView?: ZaListView;
  public _toolbar?: any;

  public popupMsgDialog(msg: string, noExecReset?: boolean): void {}

}
