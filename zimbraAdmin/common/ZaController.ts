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

import {ZaOperation} from "./ZaOperation";
import {ZaItem} from "./ZaItem";
import {ZaListView} from "./ZaListView";

export class ZaController {
  static initPopupMenuMethods: {
    ZaAccountListController: Function[];
    ZaAccountViewController: Function[];
    ZaResourceController: Function[];
    ZaSearchListController: Function[];
  };

  /**
   * @deprecated in zimbra 8+
   */
  static initToolbarMethods: {
    ZaResourceController: Function[];
    ZaSearchListController: Function[];
    ZaAccountViewController: Function[];
    ZaAccountListController: Function[];
  };

  /**
   * @deprecated in zimbra 8+
   */
  static changeActionsStateMethods: {
    ZaAccountListController: Function[];
    ZaSearchListController: Function[];
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
