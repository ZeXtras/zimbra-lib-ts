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

import {
  DwtComposite,
  DwtCompositeParams
} from "../../../ajax/dwt/widgets/DwtComposite";
import {ZmTreeView} from "./ZmTreeView";
import {ZmZimbraAccount} from "../model/ZmZimbraAccount";
import {DwtTreeItem} from "../../../ajax/dwt/widgets/DwtTreeItem";
import {ZmOverviewController} from "../controller/ZmOverviewController";

export class ZmOverview extends DwtComposite {

  public account: ZmZimbraAccount;

  constructor(params: ZmOverviewParams, controller: ZmOverviewController) {
    super({
      parent: params.parent,
      className: params.overviewClass,
      posStyle: params.posStyle,
      id: params.id
    });
  }

  public clear(): void {}

  public setTreeView(treeId: string, omit?: {[treeId: string]: boolean}): void {}
  public getTreeView(treeId: string): ZmTreeView { return undefined; }
  public itemSelected(treeItem?: DwtTreeItem): void {}
  public clearSelection(): void {}
  public set(treeIds: string[], omit?: {[id: string]: boolean}): void {}
  public getTreeItemById(id: number, type?: string): DwtTreeItem { return undefined; }
}

export interface ZmOverviewParams extends DwtCompositeParams {
  overviewId?: string;
  containerId?: string;
  treeIds: string[];
  account: ZmZimbraAccount;
  overviewClass?: string;
  scroll?: string;
  selectionSupported?: boolean;
  actionSupported?: boolean;
  dndSupported?: boolean;
  headerClass?: string;
  showUnread?: boolean;
  showNewButtons?: boolean;
  treeStyle?: string;
  isCheckedByDefault?: boolean;
  noTooltips?: boolean;
  skipImplicit?: boolean;
  dynamicWidth?: boolean;
  isAppOverview: boolean;
  appName: string;
}
