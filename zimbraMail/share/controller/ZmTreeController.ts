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
import {DwtEvent} from "../../../ajax/dwt/events/DwtEvent";
import {DwtUiEvent} from "../../../ajax/dwt/events/DwtUiEvent";
import {DwtMenu} from "../../../ajax/dwt/widgets/DwtMenu";
import {AjxListener} from "../../../ajax/events/AjxListener";
import {ZmFolder} from "../model/ZmFolder";
import {ZmOrganizer} from "../model/ZmOrganizer";
import {ZmTree} from "../model/ZmTree";
import {ZmZimbraAccount} from "../model/ZmZimbraAccount";
import {ZmChooseFolderDialog} from "../view/dialog/ZmChooseFolderDialog";
import {ZmTreeView, ZmTreeViewParams} from "../view/ZmTreeView";
import {ZmController} from "./ZmController";

export class ZmTreeController extends ZmController {

  public _dataTree: {[id: string]: ZmTree};
  public _listeners: {[id: string]: AjxListener};
  public _treeView: {[id: string]: ZmTreeView};
  public _actionedOrganizer: ZmFolder;
  public _actionedOverviewId: string;
  public _actionMenu: AjxCallback;

  constructor(type: string) {
    super(null);
  }

  public _createTreeView(params: ZmTreeViewParams): ZmTreeView { return undefined; }
  public show(params: ZmTreeControllerShowParams): ZmTreeView { return undefined; }

  public getTreeView(overviewId: string, force?: boolean): ZmTreeView { return undefined; }
  public getDataTree(account?: ZmZimbraAccount): ZmTree { return undefined; }
  public _treeViewListener(ev: DwtUiEvent): void {}
  public _renameListener(ev: DwtUiEvent): void {}
  public _getActionedOrganizer(ev: DwtUiEvent): ZmOrganizer { return undefined; }
  public _getActionMenu(ev: DwtEvent, item: any): DwtMenu { return undefined; }
  public _moveCallback(): void {}
  public _getMoveParams(dialog: ZmChooseFolderDialog): any { return undefined; }
  public _setupOptButton(params: ZmTreeControllerShowParams): void {}
  public _initializeActionMenus(): void {}
}

export interface ZmTreeControllerShowParams {
  overviewId?: string;
  showUnread?: boolean;
  omit?: {[id: string]: boolean};
  include?: {[id: string]: boolean};
  forceCreate?: boolean;
  hideEmpty?: boolean;
  noTooltips?: boolean;
  app?: string;
  optButton?: {image: string, tooltip: string, callback: AjxCallback};
}
