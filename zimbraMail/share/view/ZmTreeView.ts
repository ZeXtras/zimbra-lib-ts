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

import {DwtTree, DwtTreeParams} from "../../../ajax/dwt/widgets/DwtTree";
import {ZmTreeController} from "../controller/ZmTreeController";
import {DwtHeaderTreeItem} from "../../../ajax/dwt/widgets/DwtHeaderTreeItem";
import {DwtTreeItem} from "../../../ajax/dwt/widgets/DwtTreeItem";
import {ZmOrganizer} from "../model/ZmOrganizer";

export class ZmTreeView extends DwtTree {

  public static COMPARE_FUNC: {[type: string]: string | Function};

  public _controller: ZmTreeController;
  public static KEY_ID: string;
  public static KEY_TYPE: string;

  constructor(params: ZmTreeViewParams) {
    super(params);
  }

  public getHeaderItem(): DwtHeaderTreeItem {
    return undefined;
  }

  public getTreeItemById(folderId: string): DwtTreeItem { return undefined; }

  public _addNew(parentNode: DwtTreeItem, organizer: ZmOrganizer, idx: number): DwtTreeItem { return undefined; }
}

export interface ZmTreeViewParams extends DwtTreeParams {

}
