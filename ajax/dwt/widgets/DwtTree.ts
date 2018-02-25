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

import {AjxListener} from "../../events/AjxListener";
import {DwtComposite, DwtCompositeParams} from "./DwtComposite";
import {DwtTreeItem} from "./DwtTreeItem";

export class DwtTree extends DwtComposite {

  public static SINGLE_STYLE: number = 1;
  public static MULTI_STYLE: number = 2;
  public static CHECKEDITEM_STYLE: number = 4;
  public static ITEM_SELECTED: number;
  public static ITEM_ACTIONED: number;
  public static ITEM_CHECKED: number;

  constructor(params: DwtTreeParams) {
    super(params);
  }

  public addSelectionListener(listener: AjxListener): void {}
  public removeSelectionListener(listener: AjxListener): void {}
  public getTreeItemList(onlyVisible?: boolean): DwtTreeItem[] { return undefined; }
  public setSelection(treeItem?: DwtTreeItem, skipNotify?: boolean, kbNavEvent?: boolean, noFocus?: boolean): void {}

}

export interface DwtTreeParams extends DwtCompositeParams {
  style?: number;
}
