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

import {DwtHeaderTreeItem} from "../../../ajax/dwt/widgets/DwtHeaderTreeItem";
import {DwtTree, DwtTreeParams} from "../../../ajax/dwt/widgets/DwtTree";
import {DwtTreeItem} from "../../../ajax/dwt/widgets/DwtTreeItem";
import {ZmTreeController} from "../controller/ZmTreeController";
import {ZmOrganizer} from "../model/ZmOrganizer";
import {ZmTree} from "../model/ZmTree";

export class ZmTreeView extends DwtTree {

  public static COMPARE_FUNC: {[type: string]: string | ((itemA: any, itemB: any) => number)};
  public static KEY_ID: string;
  public static KEY_TYPE: string;

  public _dataTree: ZmTree;
  public _controller: ZmTreeController;

  constructor(params: ZmTreeViewParams) {
    super(params);
  }

  public getHeaderItem(): DwtHeaderTreeItem {
    return undefined;
  }

  public getTreeItemById(folderId: string): DwtTreeItem { return undefined; }

  public _addNew(parentNode: DwtTreeItem, organizer: ZmOrganizer, idx: number): DwtTreeItem { return undefined; }
  public _getHeaderTreeItemImage(): string { return undefined; }
  public setSelected(organizer: ZmOrganizer|string|boolean, skipNotify?: boolean, noFocus?: boolean): void {}
}

export interface ZmTreeViewParams extends DwtTreeParams {

}
