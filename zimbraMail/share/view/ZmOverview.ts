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

import {DwtComposite} from "../../../ajax/dwt/widgets/DwtComposite";
import {ZmTreeView} from "./ZmTreeView";
import {ZmZimbraAccount} from "../model/ZmZimbraAccount";
import {DwtTreeItem} from "../../../ajax/dwt/widgets/DwtTreeItem";

export class ZmOverview extends DwtComposite {

  public account: ZmZimbraAccount;

  public clear(): void {}

  public setTreeView(treeId: string, omit?: {[treeId: string]: boolean}): void {}
  public getTreeView(treeId: string): ZmTreeView { return undefined; }
  public set(treeIds: string[], omit?: boolean): void {}
  public getTreeItemById(id: number, type?: string): DwtTreeItem { return undefined; }

}
